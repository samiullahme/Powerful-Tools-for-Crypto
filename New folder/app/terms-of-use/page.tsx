import type { Metadata } from 'next';
import Link from 'next/link';
import ContentPageLayout from '@/components/ContentPageLayout';
import { legalLastUpdated, siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms and conditions governing your access to and use of CryptoRedar tools and website content.',
};

export default function TermsOfUsePage() {
  return (
    <ContentPageLayout
      title="Terms of Use"
      subtitle="Please read these terms carefully before using CryptoRedar. By accessing our site, you agree to be bound by them."
      lastUpdated={legalLastUpdated}
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Terms of Use' }]}
    >
      <p>
        These Terms of Use (&quot;Terms&quot;) govern your access to {siteConfig.url} and all tools, content,
        and services provided by {siteConfig.legalName} (&quot;CryptoRedar,&quot; &quot;we,&quot; or
        &quot;us&quot;). If you do not agree, do not use the site.
      </p>

      <h2>1. Eligibility</h2>
      <p>
        You must be at least 18 years old (or the age of majority in your jurisdiction) to use CryptoRedar. By
        using the site, you represent that you meet this requirement and have authority to enter into these
        Terms.
      </p>

      <h2>2. License &amp; Acceptable Use</h2>
      <p>
        We grant you a limited, non-exclusive, non-transferable, revocable license to access and use CryptoRedar
        for personal and commercial purposes, subject to these Terms. You may not:
      </p>
      <ul>
        <li>Scrape, crawl, or harvest the site at scale without written permission</li>
        <li>Reverse engineer, decompile, or attempt to extract source code except as permitted by law</li>
        <li>Interfere with site security, availability, or other users&apos; access</li>
        <li>Use the site for unlawful, fraudulent, or harmful activities</li>
        <li>Misrepresent affiliation with CryptoRedar or imply endorsement without consent</li>
        <li>Automate access in a manner that imposes unreasonable load on our infrastructure</li>
      </ul>

      <h2>3. No Professional Advice</h2>
      <p>
        CryptoRedar provides informational tools and educational content only. Nothing on this site constitutes
        financial, investment, tax, legal, or accounting advice. Calculators produce estimates based on your
        inputs and stated assumptions — results may not reflect your actual tax liability, investment outcome, or
        legal obligations. Consult qualified professionals before making decisions. See our{' '}
        <Link href="/disclaimer">Disclaimer</Link>.
      </p>

      <h2>4. Intellectual Property</h2>
      <p>
        The CryptoRedar name, logo, site design, tool interfaces, and original content are owned by or licensed
        to us and protected by copyright, trademark, and other laws. You may link to our pages with a fair and
        legal description. Framing, mirroring, or republishing substantial portions without permission is
        prohibited.
      </p>

      <h2>5. User Content</h2>
      <p>
        Data you enter into tools remains yours. Because processing occurs locally in most cases, we do not claim
        ownership of your inputs. If you send us feedback or suggestions, you grant us a perpetual, royalty-free
        license to use that feedback to improve our services without obligation to you.
      </p>

      <h2>6. Third-Party Links &amp; Advertising</h2>
      <p>
        The site may contain links to third-party websites and advertisements served by ad networks. We do not
        control and are not responsible for third-party content, products, or privacy practices. Your
        interactions with advertisers are solely between you and the advertiser.
      </p>

      <h2>7. Disclaimers</h2>
      <p>
        THE SITE AND TOOLS ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY
        KIND, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, ACCURACY, AND
        NON-INFRINGEMENT. WE DO NOT WARRANT UNINTERRUPTED OR ERROR-FREE OPERATION.
      </p>

      <h2>8. Limitation of Liability</h2>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, CRYPTOREDAR AND ITS OPERATORS SHALL NOT BE LIABLE FOR ANY
        INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, OR
        GOODWILL, ARISING FROM YOUR USE OF THE SITE. OUR TOTAL LIABILITY FOR ANY CLAIM SHALL NOT EXCEED USD $100
        OR THE AMOUNT YOU PAID US IN THE TWELVE MONTHS PRECEDING THE CLAIM (WHICH IS ZERO FOR FREE TOOLS),
        WHICHEVER IS GREATER, WHERE SUCH LIMITATION IS PERMITTED BY LAW.
      </p>

      <h2>9. Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless CryptoRedar from claims, damages, and expenses (including
        reasonable legal fees) arising from your misuse of the site or violation of these Terms.
      </p>

      <h2>10. Modifications &amp; Termination</h2>
      <p>
        We may modify these Terms or discontinue features at any time. Material changes will be posted on this
        page with an updated date. We may suspend access for violations. Sections that by nature should survive
        termination (disclaimers, liability limits, indemnity) will survive.
      </p>

      <h2>11. Governing Law</h2>
      <p>
        These Terms are governed by applicable laws without regard to conflict-of-law principles. Disputes shall
        be resolved in courts of competent jurisdiction unless mandatory consumer protection laws in your
        country require otherwise.
      </p>

      <h2>12. Contact</h2>
      <p>
        Legal inquiries: <a href={`mailto:${siteConfig.legalEmail}`}>{siteConfig.legalEmail}</a>
        <br />
        <Link href="/contact">Contact page</Link>
      </p>
    </ContentPageLayout>
  );
}
