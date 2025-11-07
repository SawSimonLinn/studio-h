"use server";

import * as z from 'zod';

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

type ContactFormValues = z.infer<typeof formSchema>;

export async function handleContactForm(data: ContactFormValues) {
  try {
    const validatedData = formSchema.parse(data);
    
    // In a real application, you would send this message via an email service.
    console.log("New Contact Form Message:", validatedData);

    return { success: true };
  } catch (error) {
    console.error("Contact form submission error:", error);
    return { success: false };
  }
}
