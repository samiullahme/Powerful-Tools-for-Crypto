'use client';

import { useState } from 'react';
import { btnPrimary, formGroup, formInput, formLabel, formSelect, formTextarea } from '@/lib/ui-classes';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('support');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, topic, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus('error');
        setErrorMessage(data.error ?? 'Something went wrong. Please try again.');
        return;
      }

      setStatus('success');
      setName('');
      setEmail('');
      setTopic('support');
      setMessage('');
    } catch {
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="not-prose max-w-xl mt-6 rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-6">
        <p className="text-sm font-semibold text-[#0F172A] mb-1">Message sent successfully</p>
        <p className="text-sm text-[#64748B] m-0">
          Thank you for contacting CryptoRedar. We will reply to your email within 2–3 business days.
        </p>
        <button
          type="button"
          className={`${btnPrimary} mt-4`}
          onClick={() => setStatus('idle')}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="not-prose max-w-xl mt-6">
      <div className={formGroup}>
        <label className={formLabel} htmlFor="contact-name">
          Your Name
        </label>
        <input
          id="contact-name"
          className={formInput}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Jane Doe"
          required
          disabled={status === 'sending'}
        />
      </div>
      <div className={formGroup}>
        <label className={formLabel} htmlFor="contact-email">
          Email Address
        </label>
        <input
          id="contact-email"
          className={formInput}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          required
          disabled={status === 'sending'}
        />
      </div>
      <div className={formGroup}>
        <label className={formLabel} htmlFor="contact-topic">
          Topic
        </label>
        <select
          id="contact-topic"
          className={formSelect}
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          disabled={status === 'sending'}
        >
          <option value="support">Tool support or bug report</option>
          <option value="advertising">Advertising & partnerships</option>
          <option value="legal">Legal or privacy</option>
          <option value="dmca">DMCA / copyright</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className={formGroup}>
        <label className={formLabel} htmlFor="contact-message">
          Message
        </label>
        <textarea
          id="contact-message"
          className={formTextarea}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Describe your question or issue in detail..."
          rows={6}
          required
          disabled={status === 'sending'}
        />
      </div>
      {status === 'error' && (
        <p className="text-sm text-red-600 mb-4" role="alert">
          {errorMessage}
        </p>
      )}
      <button type="submit" className={btnPrimary} disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  );
}
