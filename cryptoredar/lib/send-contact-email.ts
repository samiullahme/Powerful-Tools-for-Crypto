import nodemailer from 'nodemailer';
import { siteConfig } from '@/lib/site-config';

export type ContactPayload = {
  name: string;
  email: string;
  topic: string;
  message: string;
};

const topicLabels: Record<string, string> = {
  support: 'Tool support or bug report',
  advertising: 'Advertising & partnerships',
  legal: 'Legal or privacy',
  dmca: 'DMCA / copyright',
  other: 'Other',
};

function getSmtpConfig() {
  const host = process.env.SMTP_HOST ?? 'smtp.hostinger.com';
  const port = Number(process.env.SMTP_PORT ?? '465');
  const user = process.env.SMTP_USER ?? siteConfig.email;
  const pass = process.env.SMTP_PASSWORD;

  if (!pass) {
    throw new Error('SMTP_PASSWORD is not configured');
  }

  return {
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  };
}

export async function sendContactEmail(payload: ContactPayload) {
  const to = process.env.CONTACT_TO_EMAIL ?? siteConfig.email;
  const from = process.env.SMTP_FROM ?? siteConfig.email;
  const topicLabel = topicLabels[payload.topic] ?? payload.topic;

  const transporter = nodemailer.createTransport(getSmtpConfig());

  await transporter.sendMail({
    from: `"CryptoRedar Contact" <${from}>`,
    to,
    replyTo: payload.email,
    subject: `[CryptoRedar] ${topicLabel} — ${payload.name}`,
    text: [
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Topic: ${topicLabel}`,
      '',
      'Message:',
      payload.message,
    ].join('\n'),
    html: `
      <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
      <p><strong>Topic:</strong> ${escapeHtml(topicLabel)}</p>
      <hr />
      <p><strong>Message:</strong></p>
      <p style="white-space:pre-wrap">${escapeHtml(payload.message)}</p>
    `,
  });
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
