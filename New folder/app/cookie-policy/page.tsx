import type { Metadata } from 'next';
import Link from 'next/link';
import ContentPageLayout from '@/components/ContentPageLayout';
import { legalLastUpdated, siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Learn how CryptoRedar uses cookies and similar technologies, and how you can manage your preferences.',
};

export default function CookiePolicyPage() {
  return (
    <ContentPageLayout
      title="Cookie Policy"
      subtitle="This policy explains what cookies are, how we use them, and how you can control them."
      lastUpdated={legalLastUpdated}
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Cookie Policy' }]}
    >
      <p>
        This Cookie Policy supplements our <Link href="/privacy-policy">Privacy Policy</Link> and describes how{' '}
        {siteConfig.legalName} (&quot;CryptoRedar&quot;) uses cookies and similar tracking technologies on{' '}
        {siteConfig.url}.
      </p>

      <h2>What Are Cookies?</h2>
      <p>
        Cookies are small text files stored on your device when you visit a website. They help sites remember
        preferences, keep sessions secure, measure traffic, and deliver relevant advertising. Similar technologies
        include local storage, session storage, and pixel tags.
      </p>

      <h2>How CryptoRedar Uses Cookies</h2>
      <h3>Strictly necessary</h3>
      <p>
        Required for core functionality such as load balancing, security, and remembering cookie consent choices.
        These cannot be disabled without breaking essential features.
      </p>
      <h3>Functional / local storage</h3>
      <p>
        Some tools store draft input in your browser&apos;s local storage (not server-side cookies) so you can
        resume work after refreshing. This data stays on your device and is not sent to us. Clear it anytime via
        browser settings.
      </p>
      <h3>Analytics</h3>
      <p>
        We may use analytics services to understand aggregate traffic patterns — pages visited, referral sources,
        device types, and session duration. Analytics data helps us prioritize improvements. Where available, IP
        addresses are anonymized.
      </p>
      <h3>Advertising</h3>
      <p>
        Third-party ad partners may set cookies to serve ads, limit repeat impressions, and measure campaign
        performance. These partners operate under their own privacy policies. CryptoRedar does not control
        third-party cookies once set.
      </p>

      <h2>Cookie Table (Representative)</h2>
      <div className="not-prose overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-black/10 text-left">
              <th className="py-2 pr-4 font-semibold text-[#0F172A]">Category</th>
              <th className="py-2 pr-4 font-semibold text-[#0F172A]">Purpose</th>
              <th className="py-2 font-semibold text-[#0F172A]">Duration</th>
            </tr>
          </thead>
          <tbody className="text-[#64748B]">
            <tr className="border-b border-black/[0.05]">
              <td className="py-3 pr-4">Essential</td>
              <td className="py-3 pr-4">Security, consent, site operation</td>
              <td className="py-3">Session – 1 year</td>
            </tr>
            <tr className="border-b border-black/[0.05]">
              <td className="py-3 pr-4">Analytics</td>
              <td className="py-3 pr-4">Traffic measurement, performance</td>
              <td className="py-3">Up to 2 years</td>
            </tr>
            <tr>
              <td className="py-3 pr-4">Advertising</td>
              <td className="py-3 pr-4">Ad delivery and frequency capping</td>
              <td className="py-3">Varies by partner</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Managing Cookies</h2>
      <p>You can control cookies through several methods:</p>
      <ul>
        <li>
          <strong>Browser settings</strong> — block or delete cookies in Chrome, Firefox, Safari, or Edge
          preferences
        </li>
        <li>
          <strong>Private / incognito mode</strong> — limits persistent cookies for a single session
        </li>
        <li>
          <strong>Industry opt-outs</strong> — visit{' '}
          <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">
            aboutads.info
          </a>{' '}
          (US) or{' '}
          <a href="https://www.youronlinechoices.eu/" target="_blank" rel="noopener noreferrer">
            youronlinechoices.eu
          </a>{' '}
          (EU) for advertising preference tools
        </li>
      </ul>
      <p>Blocking all cookies may affect tool functionality and saved drafts.</p>

      <h2>Do Not Track</h2>
      <p>
        Some browsers send &quot;Do Not Track&quot; signals. There is no universal standard for responding to DNT.
        We currently do not alter tracking behavior solely based on DNT signals, but you may use the controls
        above to limit tracking.
      </p>

      <h2>Updates</h2>
      <p>
        We may update this Cookie Policy when we add services or change partners. Check the date at the top of
        this page for the latest version.
      </p>

      <h2>Contact</h2>
      <p>
        Questions: <a href={`mailto:${siteConfig.privacyEmail}`}>{siteConfig.privacyEmail}</a>
      </p>
    </ContentPageLayout>
  );
}
