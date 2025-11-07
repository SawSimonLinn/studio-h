"use server";

import * as z from 'zod';

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  artworkType: z.string(),
  concept: z.string(),
  budget: z.string().optional(),
});

type CommissionFormValues = z.infer<typeof formSchema>;

export async function handleCommissionRequest(data: CommissionFormValues) {
  try {
    const validatedData = formSchema.parse(data);
    
    // In a real application, you would:
    // 1. Send an email notification to the studio owner.
    // 2. Send a confirmation email to the user.
    // 3. Save the request to a database.
    console.log("New Commission Request:", validatedData);

    return { success: true };
  } catch (error) {
    console.error("Commission form submission error:", error);
    return { success: false };
  }
}
