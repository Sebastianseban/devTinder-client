import { z } from "zod";

export const registerSchema = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    username: z
      .string()
      .min(3, "Username must be at least 3 characters")
      .max(30, "Username too long")
      .regex(/^[a-zA-Z0-9]+$/, "Only letters and numbers allowed"),
    emailId: z.string().email("Invalid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });



export const loginSchema = z.object({
  emailId: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export const completeProfileSchema = z.object({
  gender: z.enum(["male", "female", "other"], "Select your gender"),
  age: z
    .string()
    .regex(/^\d+$/, "Age must be a number")
    .transform(Number)
    .refine((n) => n > 0 && n < 120, "Enter a valid age"),
  location: z.string().min(2, "Location is required"),
  headline: z.string().min(5, "Headline is too short"),
  phoneNumber: z.string().min(5, "Enter a valid phone number"),
  experienceLevel: z.enum(
    ["student", "junior", "mid", "senior", "lead", "freelancer"],
    "Select experience level"
  ),
  skills: z.array(z.string()).min(1, "Select at least one skill"),
  bio: z.string().min(10, "Bio must be at least 10 characters"),
  github: z.string().optional(),
  linkedin: z.string().optional(),
  portfolio: z.string().optional(),
  twitter: z.string().optional(),
  photo: z.instanceof(File, "Upload a profile photo"),
});