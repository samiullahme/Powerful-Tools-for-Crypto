import type { Metadata } from 'next';
import Link from 'next/link';
import ContentPageLayout from '@/components/ContentPageLayout';
import { legalLastUpdated, siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How CryptoRedar collects, uses, and protects your information when you use our free online tools.',
};

export default function PrivacyPolicyPage() {
  return (
    <ContentPageLayout
      title="Privacy Policy"
      subtitle="Your privacy matters. This policy explains what we collect, why we collect it, and the choices you have."
      lastUpdated={legalLastUpdated}
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Privacy Policy' }]}
    >
      <p>
        {siteConfig.legalName} (&quot;CryptoRedar,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
        operates {siteConfig.url}. This Privacy Policy describes how we handle information when you visit our
        website and use our free browser-based tools.
      </p>

      <h2>Information We Collect</h2>
      <h3>Information you provide</h3>
      <p>
        If you contact us by email or form, we receive the information you choose to send (name, email address,
        message content). We use this solely to respond to your inquiry.
      </p>
      <h3>Information processed locally</h3>
      <p>
        Most CryptoRedar tools run entirely in your web browser. Calculator inputs, text you paste, and file
        contents are processed on your device and are not transmitted to our servers unless a specific tool
        explicitly states otherwise. Some tools save draft input in your browser&apos;s{' '}
        <strong>local storage</strong> for convenience; you can clear this via browser settings.
      </p>
      <h3>Automatically collected information</h3>
      <p>
        Like most websites, we may collect standard server and analytics data: IP address (often truncated or
        anonymized), browser type, device type, referring URL, pages viewed, and approximate geographic region.
        We use this to maintain security, measure traffic, and improve performance. See our{' '}
        <Link href="/cookie-policy">Cookie Policy</Link> for details on cookies and similar technologies.
      </p>

      <h2>How We Use Information</h2>
      <ul>
        <li>Operate, maintain, and improve the website and tools</li>
        <li>Respond to support, legal, and partnership inquiries</li>
        <li>Monitor for abuse, fraud, and security incidents</li>
        <li>Comply with applicable laws and enforce our Terms of Use</li>
        <li>Serve contextual advertising through third-party ad partners (where enabled)</li>
      </ul>
      <p>We do not sell your personal information to data brokers.</p>

      <h2>Third-Party Services</h2>
      <p>
        We may use third-party providers for hosting, analytics, advertising, and content delivery. These
        providers process data under their own privacy policies. We select partners that maintain industry-standard
        security practices, but we are not responsible for their independent data handling.
      </p>

      <h2>Data Retention</h2>
      <p>
        Contact emails are retained as long as needed to resolve your request and for legitimate business
        records. Analytics data is retained according to our analytics provider&apos;s configuration, typically
        in aggregated form.
      </p>

      <h2>Your Rights</h2>
      <p>
        Depending on your jurisdiction, you may have rights to access, correct, delete, or restrict processing
        of personal data, and to object to certain processing or request portability. To exercise these rights,
        email{' '}
        <a href={`mailto:${siteConfig.privacyEmail}`}>{siteConfig.privacyEmail}</a> with &quot;Privacy
        Request&quot; in the subject line. We will verify your request and respond within applicable legal
        timeframes.
      </p>

      <h2>Children&apos;s Privacy</h2>
      <p>
        CryptoRedar is not directed at children under 13 (or 16 in the EEA/UK). We do not knowingly collect
        personal information from children. If you believe a child has provided us data, contact us and we will
        delete it promptly.
      </p>

      <h2>International Transfers</h2>
      <p>
        Our infrastructure and service providers may process data in countries other than your own. Where
        required, we implement appropriate safeguards for cross-border transfers.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy periodically. Material changes will be reflected by updating the
        &quot;Last updated&quot; date above. Continued use of the site after changes constitutes acceptance of
        the revised policy.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this Privacy Policy:{' '}
        <a href={`mailto:${siteConfig.privacyEmail}`}>{siteConfig.privacyEmail}</a>
        <br />
        General contact: <Link href="/contact">Contact page</Link>
      </p>
    </ContentPageLayout>
  );
}
