import type { Metadata } from 'next';
import Link from 'next/link';
import ContentPageLayout from '@/components/ContentPageLayout';
import ContactForm from '@/components/ContactForm';
import { siteConfig } from '@/lib/site-config';
import { withCanonical } from '@/lib/seo';

export const metadata: Metadata = withCanonical('/contact', {
  title: 'Contact Us',
  description:
    'Get in touch with the CryptoRedar team for support, corrections, partnerships, advertising, and legal inquiries. We respond within 2–3 business days.',
  openGraph: {
    title: 'Contact CryptoRedar',
  },
});

const contactChannels = [
  {
    title: 'General & Support',
    email: siteConfig.supportEmail,
    description: 'Tool bugs, calculation questions, feature requests, and account-free support.',
  },
  {
    title: 'Partnerships & Advertising',
    email: siteConfig.adsEmail,
    description: 'Media kits, sponsored placements, and brand collaboration proposals.',
  },
  {
    title: 'Legal & Privacy',
    email: siteConfig.legalEmail,
    description: 'Privacy requests, terms questions, and regulatory correspondence.',
  },
  {
    title: 'Copyright (DMCA)',
    email: siteConfig.dmcaEmail,
    description: 'Takedown notices and counter-notifications under the DMCA.',
  },
];

export default function ContactPage() {
  return (
    <ContentPageLayout
      title="Contact Us"
      subtitle="We read every message. Choose the right channel below for the fastest response."
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Contact Us' }]}
      wide
    >
      <p>
        CryptoRedar is a lean, remote team serving a global audience. We do not operate a call center — email
        and the form below are the most reliable ways to reach us. Most inquiries receive a reply within{' '}
        <strong>2–3 business days</strong>; complex legal or partnership matters may take slightly longer.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 my-8 not-prose">
        {contactChannels.map((channel) => (
          <div
            key={channel.email}
            className="rounded-xl border border-black/[0.06] bg-slate-50/80 p-5"
          >
            <h3 className="text-sm font-bold text-[#0F172A] mb-1">{channel.title}</h3>
            <a
              href={`mailto:${channel.email}`}
              className="text-sm font-semibold text-[#FF9500] hover:underline block mb-2"
            >
              {channel.email}
            </a>
            <p className="text-xs text-[#64748B] leading-relaxed m-0">{channel.description}</p>
          </div>
        ))}
      </div>

      <h2>Send a Message</h2>
      <p>
        Fill out the form below and your message will be delivered directly to our team. We reply to the email
        address you provide.
      </p>

      <ContactForm />

      <h2>Before You Write</h2>
      <ul>
        <li>
          For calculation discrepancies, include the tool name, inputs used, and expected vs actual output.
        </li>
        <li>
          We cannot provide personalized investment, tax, or legal advice — see our{' '}
          <Link href="/disclaimer">Disclaimer</Link>.
        </li>
        <li>
          Privacy-related requests (access, deletion) should be sent to{' '}
          <a href={`mailto:${siteConfig.privacyEmail}`}>{siteConfig.privacyEmail}</a> with
          &quot;Privacy Request&quot; in the subject line.
        </li>
      </ul>
    </ContentPageLayout>
  );
}
