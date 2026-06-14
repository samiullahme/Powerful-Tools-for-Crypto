import type { Metadata } from 'next';
import Link from 'next/link';
import ContentPageLayout from '@/components/ContentPageLayout';
import { legalLastUpdated, siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'DMCA Policy',
  description:
    'Digital Millennium Copyright Act (DMCA) takedown and counter-notification procedures for CryptoRedar.',
};

export default function DmcaPolicyPage() {
  return (
    <ContentPageLayout
      title="DMCA Policy"
      subtitle="CryptoRedar respects intellectual property rights and responds to valid notices under the Digital Millennium Copyright Act."
      lastUpdated={legalLastUpdated}
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'DMCA Policy' }]}
    >
      <p>
        {siteConfig.legalName} (&quot;CryptoRedar&quot;) complies with the Digital Millennium Copyright Act
        (17 U.S.C. § 512) and similar laws internationally. This page describes how copyright owners can report
        infringement and how users may submit counter-notifications.
      </p>

      <h2>Designated Copyright Agent</h2>
      <p>
        Send DMCA notices and counter-notifications to our designated agent:
      </p>
      <div className="not-prose rounded-xl border border-black/[0.06] bg-slate-50/80 p-5 my-6 text-sm text-[#64748B] leading-relaxed">
        <p className="font-semibold text-[#0F172A] mb-2">CryptoRedar — DMCA Agent</p>
        <p className="m-0">
          Email:{' '}
          <a href={`mailto:${siteConfig.dmcaEmail}`} className="text-[#FF9500] font-medium">
            {siteConfig.dmcaEmail}
          </a>
        </p>
        <p className="mt-2 mb-0">Subject line: &quot;DMCA Takedown Notice&quot; or &quot;DMCA Counter-Notification&quot;</p>
      </div>

      <h2>Filing a Takedown Notice</h2>
      <p>
        If you believe content on CryptoRedar infringes your copyright, provide a written notice including{' '}
        <strong>all</strong> of the following (17 U.S.C. § 512(c)(3)):
      </p>
      <ol>
        <li>Your physical or electronic signature</li>
        <li>Identification of the copyrighted work claimed to have been infringed</li>
        <li>
          Identification of the infringing material and information reasonably sufficient to locate it (exact URL)
        </li>
        <li>Your contact information (address, telephone, email)</li>
        <li>
          A statement that you have a good-faith belief the use is not authorized by the copyright owner, its
          agent, or the law
        </li>
        <li>
          A statement, under penalty of perjury, that the information in the notice is accurate and that you are
          authorized to act on behalf of the copyright owner
        </li>
      </ol>
      <p>
        Incomplete notices may delay processing. We may forward your notice to the user who posted the material
        and/or publish redacted versions for transparency.
      </p>

      <h2>Counter-Notification</h2>
      <p>
        If you believe material was removed or disabled by mistake or misidentification, you may submit a
        counter-notification including:
      </p>
      <ol>
        <li>Your physical or electronic signature</li>
        <li>Identification of the material and its location before removal</li>
        <li>A statement under penalty of perjury that you have a good-faith belief the material was removed by mistake</li>
        <li>Your name, address, phone number, and consent to jurisdiction of the federal court in your district (or if outside the US, any judicial district where CryptoRedar may be found)</li>
        <li>Consent to accept service of process from the person who filed the original notice</li>
      </ol>
      <p>
        Upon receipt of a valid counter-notification, we may restore the material after 10–14 business days unless
        the copyright owner files a court action.
      </p>

      <h2>Repeat Infringers</h2>
      <p>
        CryptoRedar may terminate access for users who are repeat infringers in appropriate circumstances.
      </p>

      <h2>Misrepresentations</h2>
      <p>
        Under 17 U.S.C. § 512(f), any person who knowingly materially misrepresents that material is infringing
        (or was removed by mistake) may be liable for damages, including costs and attorney fees.
      </p>

      <h2>Other Inquiries</h2>
      <p>
        For non-DMCA legal matters, contact{' '}
        <a href={`mailto:${siteConfig.legalEmail}`}>{siteConfig.legalEmail}</a>. For general support, visit our{' '}
        <Link href="/contact">Contact page</Link>.
      </p>
    </ContentPageLayout>
  );
}
