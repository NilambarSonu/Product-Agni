import { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { email, farmArea, requestType } = req.body;

    if (!email || !farmArea || !requestType) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required',
      });
    }

    const emailUser = process.env.EMAIL_USER;
    const emailPassword = process.env.EMAIL_PASSWORD;

    if (!emailUser || !emailPassword) {
      return res.status(500).json({
        success: false,
        message: 'Email service not configured',
      });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPassword,
      },
    });

    const mailOptions = {
      from: emailUser,
      to: 'saathi.ai.innovation@gmail.com',
      subject: `New Farm Inquiry from ${email}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #4CAF50; color: white; padding: 20px; text-align: center;">
            <h1>New Farm Inquiry</h1>
          </div>
          <div style="background: #f9f9f9; padding: 20px; margin: 20px 0;">
            <p><strong>Email Address:</strong> ${email}</p>
            <p><strong>Farm Area:</strong> ${farmArea}</p>
            <p><strong>Interested In:</strong> ${requestType}</p>
          </div>
          <div style="text-align: center; color: #666; font-size: 12px;">
            <p>This email was sent from your Agni Product Site contact form.</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

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
}