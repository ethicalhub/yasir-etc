"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "../uiComponent";

const contactFormSchema = z.object({
  username: z
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

  const onSubmit = async (data: ContactFormValues) => {
    const response = await fetch("/api/contactForm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    console.log("response", await response.json());
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="mb-4">
          <label htmlFor="username" className="block font-medium text-primary">
            Name
          </label>
          <input
            id="username"
            type="text"
            {...register("username")}
            className={`mt-1 w-full rounded-lg border p-3 ${
              errors.username ? "border-error" : "border-secondary"
            }`}
          />
          {errors.username && (
            <p className="mt-1 text-sm text-error">{errors.username.message}</p>
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
