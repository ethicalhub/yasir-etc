"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
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
  const [formMessage, setFormMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const response = await fetch("/api/contactForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setFormMessage({ type: "success", text: "Message sent successfully!" });
        reset();
      } else {
        setFormMessage({
          type: "error",
          text: result.message || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      setFormMessage({
        type: "error",
        text: "An error occurred. Please try again later.",
      });
    }

    setTimeout(() => setFormMessage(null), 5000);
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

        {/* Submit Button */}
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
        {formMessage && (
          <p
            className={`mt-4 rounded-lg bg-secondary p-2 text-lg   ${
              formMessage.type === "success" ? "text-dark" : "text-error"
            }`}
          >
            {formMessage.text}
          </p>
        )}
      </form>
    </>
  );
};

export default ContactForm;
