"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "../uiComponent";

const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters.")
    .max(50, "Name can't exceed 50 characters."),
  email: z
    .string()
    .email("Invalid email address.")
    .nonempty("Email is required."),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters.")
    .max(500, "Message can't exceed 500 characters."),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (data: ContactFormValues) => {
    console.log("Form Submitted:", data);
    reset();
    // You can integrate email service here (e.g., EmailJS, SendGrid)
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium text-primary">
            Name
          </label>
          <input
            id="name"
            type="text"
            {...register("name")}
            className={`mt-1 w-full rounded-lg border p-3 ${
              errors.name ? "border-error" : "border-secondary"
            }`}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-error">{errors.name.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium text-primary">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className={`mt-1 w-full rounded-lg border p-3 ${
              errors.email ? "border-error" : "border-secondary"
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-error">{errors.email.message}</p>
          )}
        </div>

        {/* Message Field */}
        <div className="mb-4">
          <label htmlFor="message" className="block font-medium text-primary">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            {...register("message")}
            className={`mt-1 w-full rounded-lg border p-3 ${
              errors.message ? "border-error" : "border-secondary"
            }`}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-error">{errors.message.message}</p>
          )}
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="secondary"
            type="submit"
            disabled={isSubmitting}
            className="transition disabled:bg-gray disabled:text-dark"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
