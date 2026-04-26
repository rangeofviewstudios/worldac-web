"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SERVICES } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface FormData {
  name: string;
  company: string;
  email: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

type SubmitState = "idle" | "submitting" | "success" | "error";

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Name is required";
  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email";
  }
  if (!data.message.trim()) errors.message = "Message is required";
  return errors;
}

const inputBase = cn(
  "w-full px-4 py-3 text-sm rounded-[var(--radius-md)] border",
  "bg-[var(--color-bg-subtle)] text-[var(--color-text)]",
  "placeholder:text-[var(--color-text-faint)]",
  "border-[var(--color-border)]",
  "outline-none transition-all duration-200",
  "focus:border-[var(--color-accent)] focus:bg-[var(--color-bg-elevated)]",
  "focus:shadow-[0_0_0_3px_color-mix(in_srgb,var(--color-accent)_15%,transparent)]"
);

const errorInput = "border-red-500/60 focus:border-red-500 focus:shadow-[0_0_0_3px_rgb(239_68_68_/_0.15)]";

export function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate(form);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSubmitState("submitting");
    // Simulate submission — replace with actual API call
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setSubmitState("success");
  };

  if (submitState === "success") {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-6">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
          style={{ backgroundColor: "color-mix(in srgb, #0ea5e9 12%, transparent)" }}
        >
          <CheckCircle size={28} style={{ color: "#0ea5e9" }} />
        </div>
        <h3 className="font-display font-bold text-xl mb-3" style={{ color: "var(--color-text)" }}>
          Message received.
        </h3>
        <p className="text-sm max-w-sm" style={{ color: "var(--color-text-muted)" }}>
          We'll be in touch within one business day. For urgent requests,
          reach us directly at contact@worldaconsulting.com.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Name + Company row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label
            htmlFor="name"
            className="text-xs font-medium"
            style={{ color: "var(--color-text-muted)" }}
          >
            Name <span style={{ color: "#0ea5e9" }}>*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            className={cn(inputBase, errors.name && errorInput)}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="text-xs flex items-center gap-1.5 text-red-400">
              <AlertCircle size={11} /> {errors.name}
            </p>
          )}
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="company"
            className="text-xs font-medium"
            style={{ color: "var(--color-text-muted)" }}
          >
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Your company"
            value={form.company}
            onChange={handleChange}
            className={inputBase}
          />
        </div>
      </div>

      {/* Email */}
      <div className="space-y-1.5">
        <label
          htmlFor="email"
          className="text-xs font-medium"
          style={{ color: "var(--color-text-muted)" }}
        >
          Work Email <span style={{ color: "#0ea5e9" }}>*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@company.com"
          value={form.email}
          onChange={handleChange}
          className={cn(inputBase, errors.email && errorInput)}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="text-xs flex items-center gap-1.5 text-red-400">
            <AlertCircle size={11} /> {errors.email}
          </p>
        )}
      </div>

      {/* Service interest */}
      <div className="space-y-1.5">
        <label
          htmlFor="service"
          className="text-xs font-medium"
          style={{ color: "var(--color-text-muted)" }}
        >
          Service Interest
        </label>
        <select
          id="service"
          name="service"
          value={form.service}
          onChange={handleChange}
          className={cn(inputBase, "cursor-pointer appearance-none")}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%238ba3c1' strokeWidth='2'%3E%3Cpolyline points='6,9 12,15 18,9'/%3E%3C/svg%3E")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 1rem center",
            paddingRight: "2.5rem",
          }}
        >
          <option value="">Select a service (optional)</option>
          {SERVICES.map((s) => (
            <option key={s.id} value={s.id}>
              {s.title}
            </option>
          ))}
          <option value="multiple">Multiple services</option>
          <option value="other">Not sure / other</option>
        </select>
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <label
          htmlFor="message"
          className="text-xs font-medium"
          style={{ color: "var(--color-text-muted)" }}
        >
          Message <span style={{ color: "#0ea5e9" }}>*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us about your project or challenge..."
          value={form.message}
          onChange={handleChange}
          className={cn(inputBase, errors.message && errorInput, "resize-none")}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="text-xs flex items-center gap-1.5 text-red-400">
            <AlertCircle size={11} /> {errors.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <Button
        type="submit"
        variant="primary"
        size="md"
        icon={Send}
        disabled={submitState === "submitting"}
        className="w-full sm:w-auto justify-center"
      >
        {submitState === "submitting" ? "Sending..." : "Send Message"}
      </Button>

      {submitState === "error" && (
        <p className="text-xs text-red-400 flex items-center gap-1.5">
          <AlertCircle size={11} />
          Something went wrong. Please try again or email us directly.
        </p>
      )}
    </form>
  );
}
