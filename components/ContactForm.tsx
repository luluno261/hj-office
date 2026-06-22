'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import {
  buildContactEmailBody,
  buildGmailComposeUrl,
} from '@/lib/email-links';

type ContactFormProps = {
  toEmail: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  phonePlaceholder: string;
  subjectPlaceholder: string;
  messagePlaceholder: string;
  submitLabel: string;
};

export function ContactForm({
  toEmail,
  namePlaceholder,
  emailPlaceholder,
  phonePlaceholder,
  subjectPlaceholder,
  messagePlaceholder,
  submitLabel,
}: ContactFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    const emailSubject =
      subject.trim() || 'Demande de contact — HJ Offices';
    const body = buildContactEmailBody({
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      message: message.trim(),
    });
    const url = buildGmailComposeUrl(toEmail, emailSubject, body);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <form
      className="mt-8 space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}>
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={namePlaceholder}
          className="w-full rounded border border-[#A8A8A8] bg-transparent px-4 py-3 text-teal-900 placeholder:text-teal-900/60 focus:border-gold focus:outline-none"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={emailPlaceholder}
          className="w-full rounded border border-[#A8A8A8] bg-transparent px-4 py-3 text-teal-900 placeholder:text-teal-900/60 focus:border-gold focus:outline-none"
        />
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder={phonePlaceholder}
          className="w-full rounded border border-[#A8A8A8] bg-transparent px-4 py-3 text-teal-900 placeholder:text-teal-900/60 focus:border-gold focus:outline-none"
        />
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder={subjectPlaceholder}
          className="w-full rounded border border-[#A8A8A8] bg-transparent px-4 py-3 text-teal-900 placeholder:text-teal-900/60 focus:border-gold focus:outline-none"
        />
      </div>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={messagePlaceholder}
        rows={4}
        className="w-full rounded border border-[#A8A8A8] bg-transparent px-4 py-3 text-teal-900 placeholder:text-teal-900/60 focus:border-gold focus:outline-none"
      />
      <Button type="submit">{submitLabel}</Button>
    </form>
  );
}
