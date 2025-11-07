
"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { handleCommissionRequest } from './actions';
import { artworkTypes } from '@/lib/data';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  artworkType: z.string().min(1, { message: "Please select an artwork type." }),
  concept: z.string().min(10, { message: "Please describe your idea in at least 10 characters." }),
  budget: z.string().optional(),
});

type CommissionFormValues = z.infer<typeof formSchema>;

const artworkTypeOptions = artworkTypes.filter(t => t !== 'All');

export function CommissionForm() {
  const { toast } = useToast();
  const form = useForm<CommissionFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      artworkType: '',
      concept: '',
      budget: '',
    },
  });

  async function onSubmit(values: CommissionFormValues) {
    const result = await handleCommissionRequest(values);

    if (result.success) {
      toast({
        title: 'Request Sent!',
        description: "Thank you for your interest. We'll be in touch soon.",
      });
      form.reset();
    } else {
      toast({
        variant: 'destructive',
        title: 'Something went wrong.',
        description: 'Please try submitting the form again.',
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid md:grid-cols-2 gap-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="your.email@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid md:grid-cols-2 gap-8">
            <FormField
            control={form.control}
            name="artworkType"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Artwork Type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                    <SelectTrigger>
                        <SelectValue placeholder="Select a type (e.g., Painting)" />
                    </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                    {artworkTypeOptions.map(type => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                    </SelectContent>
                </Select>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
                control={form.control}
                name="budget"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Budget Range (Optional)</FormLabel>
                    <FormControl>
                    <Input placeholder="e.g., 500,000 - 1,000,000 Ks" {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
        </div>
        <FormField
          control={form.control}
          name="concept"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Concept / Idea</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describe your idea, including subject, style, colors, and any other details."
                  rows={6}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" size="lg" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? "Submitting..." : "Submit Request"}
        </Button>
      </form>
    </Form>
  );
}
