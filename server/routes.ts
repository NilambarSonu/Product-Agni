import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // Configure nodemailer transporter with better error handling
  const emailUser = process.env.EMAIL_USER;
  const emailPassword = process.env.EMAIL_PASSWORD;

  console.log('Email config:', {
    user: emailUser ? 'Set' : 'Not set',
    password: emailPassword ? 'Set' : 'Not set'
  });

  if (!emailUser || !emailPassword) {
    console.error('EMAIL_USER or EMAIL_PASSWORD environment variables are not set!');
  }

  // FIXED: Use createTransport instead of createTransporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: emailUser,
      pass: emailPassword,
    },
  });

  // FIXED: Added proper TypeScript types for the callback parameters
  transporter.verify(function (error: Error | null, success: boolean) {
    if (error) {
      console.error('Transporter verification failed:', error);
    } else {
      console.log('Email transporter is ready to send messages');
    }
  });

  // Email endpoint
  app.post("/api/send-email", async (req, res) => {
    try {
      const { email, farmArea, requestType } = req.body;

      // Validate required fields
      if (!email || !farmArea || !requestType) {
        return res.status(400).json({
          success: false,
          message: 'All fields are required',
        });
      }

      // Check if email credentials are available
      if (!emailUser || !emailPassword) {
        console.error('Email credentials missing');
        return res.status(500).json({
          success: false,
          message: 'Email service not configured. Please contact administrator.',
        });
      }

      // Email content
      const mailOptions = {
        from: emailUser,
        to: 'saathi.ai.innovation@gmail.com',
        subject: `New Farm Inquiry from ${email}`,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
              <style>
                  body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                  .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                  .header { background: #4CAF50; color: white; padding: 20px; text-align: center; }
                  .content { background: #f9f9f9; padding: 20px; margin: 20px 0; }
                  .field { margin-bottom: 15px; }
                  .label { font-weight: bold; color: #555; }
                  .value { color: #333; }
                  .footer { text-align: center; color: #666; font-size: 12px; margin-top: 20px; }
              </style>
          </head>
          <body>
              <div class="container">
                  <div class="header">
                      <h1>New Farm Inquiry</h1>
                  </div>
                  <div class="content">
                      <div class="field">
                          <span class="label">Email Address:</span>
                          <span class="value">${email}</span>
                      </div>
                      <div class="field">
                          <span class="label">Farm Area:</span>
                          <span class="value">${farmArea}</span>
                      </div>
                      <div class="field">
                          <span class="label">Interested In:</span>
                          <span class="value">${requestType}</span>
                      </div>
                  </div>
                  <div class="footer">
                      <p>This email was sent from your Agni Product Site contact form.</p>
                  </div>
              </div>
          </body>
          </html>
        `,
      };

      // Send email
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent successfully:', info.messageId);

      res.status(200).json({
        success: true,
        message: 'Email sent successfully! We will reach out within 24 hours.',
      });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to send email. Please try again later.',
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}