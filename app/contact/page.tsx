'use client';

import { useState } from 'react';
import { Header } from '@/components/Header';
import Script from "next/script";
import { FormData, FormErrors } from '@/lib/types';

const CONTACT_TOPICS = [
  'Lighting & Controls',
  'Solar Panels',
  'Power & Energy',
  'Security & Sign Trailers',
  'Medical Equipment',
];

const formatPhone = (value: string) => {
  const digits = value.replace(/\D/g, '').slice(0, 10);
  if (digits.length === 0) return '';
  if (digits.length <= 3) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
};

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    topic: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!form.name.trim()) newErrors.name = true;
    if (!form.email.trim()) {
      newErrors.email = true;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'invalid';
    }
    if (!form.phone.trim()) newErrors.phone = true;
    if (!form.topic) newErrors.topic = true;
    if (!form.message.trim()) newErrors.message = true;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setSubmitted(true);
      // In a real app, send form data to server here
      console.log('Form submitted:', form);
    }
  };

  const handleReset = () => {
    setForm({
      name: '',
      email: '',
      phone: '',
      topic: '',
      message: '',
    });
    setErrors({});
    setSubmitted(false);

  };

  const fieldBorder = (key: keyof FormData) =>
    errors[key as keyof FormErrors] ? 'border-error-primary' : 'border-border-lighter2';
  const fieldErrorMsg = (key: keyof FormData) =>
    errors[key as keyof FormErrors];

  return (
    <>
      <Header />

      <main className="max-w-[1240px] mx-auto px-7 py-16 pb-[90px]">
        <div className="mb-2">
          <div className="text-xs font-semibold tracking-widest uppercase text-accent-primary">
            Contact
          </div>
        </div>
        <h1 className="text-[clamp(28px,3.6vw,44px)] tracking-tight font-semibold mb-6">
          Request a quote
        </h1>
        <p className="text-[17px] text-text-tertiary mb-11 max-w-[600px]">
          Tell us what you need and we&apos;ll respond within one business day with pricing and availability.
        </p>

        {/* Form */}
       <div className="max-w-[900px] mx-auto">
  <iframe
    src="https://api.leadconnectorhq.com/widget/form/fXIB0CaGIIfmKtgh5i0Y"
    style={{
      width: "100%",
      height: "700px",
      border: "none",
      borderRadius: "8px",
    }}
    id="inline-fXIB0CaGIIfmKtgh5i0Y"
    title="SHT LLC FORM"
  ></iframe>

  <Script
    src="https://link.msgsndr.com/js/form_embed.js"
    strategy="afterInteractive"
  />
</div>
      </main>
    </>
  );
}
