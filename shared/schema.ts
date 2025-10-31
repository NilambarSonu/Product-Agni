import { z } from "zod";

export interface SensorData {
  id: string;
  latitude: number;
  longitude: number;
  moisture: number;
  ph: number;
  nitrogen: number;
  phosphorus: number;
  potassium: number;
  temperature: number;
  timestamp: string;
}

export interface FieldDataPoint {
  x: number;
  y: number;
  value: number;
  zone: string;
}

export const demoRequestSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  farmArea: z.string().min(1, "Please specify your farm area"),
  requestType: z.enum(["demo", "quote", "support"]),
});

export type DemoRequest = z.infer<typeof demoRequestSchema>;
