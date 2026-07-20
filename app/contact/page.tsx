'use client';

import { useState } from 'react';
import { Header } from '@/components/Header';
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
        <div className="max-w-[500px]">
          <div className="bg-white border border-border-light rounded-[22px] px-[clamp(24px,3vw,36px)] py-[clamp(24px,3vw,36px)] shadow-form-card">
            {submitted ? (
              <div className="text-center py-9">
                <div className="w-16 h-16 rounded-full bg-success-bg flex items-center justify-center mx-auto mb-5.5">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1a7f37" strokeWidth="2.2">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold mb-3">Request received</h2>
                <p className="text-base leading-[1.55] text-text-tertiary mb-7 max-w-[360px] mx-auto">
                  Thanks – your quote request is in. A member of our sales team will reach out
                  within one business day.
                </p>
                <button
                  onClick={handleReset}
                  className="bg-accent-primary border border-accent-primary text-white px-8 py-3 rounded-full text-base font-medium cursor-pointer hover:bg-accent-hover transition-colors"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <div className="grid gap-6">
                {/* Name */}
                <div>
                  <label className="block text-[13.5px] font-medium mb-[7px]">Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => { const newVal = e.target.value; setForm({ ...form, name: newVal }); if (newVal.trim()) setErrors(prev => ({ ...prev, name: false })); }}
                    placeholder="Full name"
                    className={`w-full h-12 border ${fieldBorder('name')} bg-white rounded-md px-[18px] text-base outline-none transition-colors`}
                  />
                  {errors.name && (
                    <div className="text-xs text-error-primary mt-1.5">This field is required</div>
                  )}
                </div>

                {/* Email & Phone Row */}
                <div className="grid grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[13.5px] font-medium mb-[7px]">Email</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => { const newVal = e.target.value; setForm({ ...form, email: newVal }); if (newVal.includes('@')) setErrors(prev => ({ ...prev, email: false })); }}
                      placeholder="you@company.com"
                      className={`w-full h-12 border ${fieldBorder('email')} bg-white rounded-md px-[18px] text-base outline-none transition-colors`}
                    />
                    {fieldErrorMsg('email') && (
                      <div className="text-xs text-error-primary mt-1.5">
                        {fieldErrorMsg('email') === 'invalid'
                          ? 'Enter a valid email'
                          : 'This field is required'}
                      </div>
                    )}
                  </div>
                  <div>
                    <label className="block text-[13.5px] font-medium mb-[7px]">Phone</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => { const newVal = formatPhone(e.target.value); setForm({ ...form, phone: newVal }); if (newVal.length > 0) setErrors(prev => ({ ...prev, phone: false })); }}
                      placeholder="(XXX) XXX-XXXX"
                      className={`w-full h-12 border ${fieldBorder('phone')} bg-white rounded-md px-[18px] text-base outline-none transition-colors`}
                    />
                    {errors.phone && (
                      <div className="text-xs text-error-primary mt-1.5">This field is required</div>
                    )}
                  </div>
                </div>

                {/* Topic */}
                <div>
                  <label className="block text-[13.5px] font-medium mb-[7px]">
                    What can we help with?
                  </label>
                  <select
                    value={form.topic}
                    onChange={(e) => { const newVal = e.target.value; setForm({ ...form, topic: newVal }); if (newVal) setErrors(prev => ({ ...prev, topic: false })); }}
                    className={`w-full h-12 border ${fieldBorder('topic')} bg-white rounded-md px-[18px] text-base outline-none appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="%231d1d1f" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>')] bg-no-repeat bg-[right_12px_center] pr-[45px] cursor-pointer transition-colors`}
                    style={{ color: form.topic ? '#1d1d1f' : '#a1a1a6' }}
                  >
                    <option value="" disabled>
                      Select a category
                    </option>
                    {CONTACT_TOPICS.map((topic) => (
                      <option key={topic} value={topic}>
                        {topic}
                      </option>
                    ))}
                  </select>
                  {errors.topic && (
                    <div className="text-xs text-error-primary mt-1.5">
                      Please choose a category
                    </div>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[13.5px] font-medium mb-[7px]">Message</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => { const newVal = e.target.value; setForm({ ...form, message: newVal }); if (newVal.trim()) setErrors(prev => ({ ...prev, message: false })); }}
                    placeholder="Products, quantities, timeline, delivery location…"
                    rows={4}
                    className={`w-full border ${fieldBorder('message')} bg-white rounded-md px-[18px] py-3 text-base outline-none resize-vertical leading-[1.5] transition-colors`}
                  />
                  {errors.message && (
                    <div className="text-xs text-error-primary mt-1.5">This field is required</div>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  className="w-full bg-accent-primary text-white border-none px-[18px] py-3 rounded-full text-base font-medium cursor-pointer hover:bg-accent-hover transition-colors mt-2"
                >
                  Submit quote request
                </button>

                <div className="text-[12.5px] text-text-placeholder text-center">
                  All fields required. We reply within one business day.
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
