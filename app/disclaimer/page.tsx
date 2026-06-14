import type { Metadata } from 'next';
import Link from 'next/link';
import ContentPageLayout from '@/components/ContentPageLayout';
import { legalLastUpdated, siteConfig } from '@/lib/site-config';
import { withCanonical } from '@/lib/seo';

export const metadata: Metadata = withCanonical('/disclaimer', {
  title: 'Disclaimer',
  description:
    'Important disclaimers regarding CryptoRedar tools — not financial, tax, or legal advice. Use at your own risk.',
});

export default function DisclaimerPage() {
  return (
    <ContentPageLayout
      title="Disclaimer"
      subtitle="CryptoRedar provides tools and information for general purposes only. Read this before relying on any output."
      lastUpdated={legalLastUpdated}
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Disclaimer' }]}
    >
      <p>
        The information, calculators, converters, and articles on {siteConfig.url} are provided by{' '}
        {siteConfig.legalName} for <strong>general informational and educational purposes only</strong>. By
        using this website, you acknowledge and agree to the following disclaimers.
      </p>

      <h2>Not Financial or Investment Advice</h2>
      <p>
        Nothing on CryptoRedar constitutes a recommendation to buy, sell, or hold any cryptocurrency, security,
        or financial instrument. We do not provide investment advisory services. Past performance displayed in
        calculators does not guarantee future results. Cryptocurrency markets are highly volatile — you may lose
        some or all of your capital. Always conduct your own research and consult a licensed financial advisor
        before investing.
      </p>

      <h2>Not Tax or Legal Advice</h2>
      <p>
        Tax calculators (including crypto tax and GST tools) produce estimates based on simplified assumptions and
        the inputs you provide. Tax laws vary by country, state, and individual circumstance and change
        frequently. CryptoRedar is not a tax preparer, CPA firm, or law firm. Outputs are not substitutes for
        professional tax or legal counsel. Verify all figures with a qualified professional before filing
        returns or making compliance decisions.
      </p>

      <h2>Accuracy of Calculations</h2>
      <p>
        We strive for accuracy and test our tools regularly, but we make no warranty that results are complete,
        current, or error-free. Rounding, floating-point arithmetic, outdated tax slabs, or incorrect user inputs
        may affect outputs. You are solely responsible for verifying results before acting on them.
      </p>

      <h2>No Professional Relationship</h2>
      <p>
        Using CryptoRedar does not create a client, fiduciary, advisor-client, or attorney-client relationship
        between you and CryptoRedar or its operators.
      </p>

      <h2>Third-Party Content &amp; Links</h2>
      <p>
        External links and advertisements are provided for convenience. We do not endorse third-party products,
        exchanges, or services unless explicitly stated in a signed agreement. Your use of third-party sites is
        at your own risk and subject to their terms.
      </p>

      <h2>Developer Tools</h2>
      <p>
        Developer utilities (JSON formatters, JWT decoders, hash generators, etc.) are aids for development and
        debugging. Do not use them as sole security controls. Never paste production secrets into any online tool
        unless you fully trust the environment. CryptoRedar processes most developer tool data locally, but you
        remain responsible for credential hygiene.
      </p>

      <h2>Limitation of Responsibility</h2>
      <p>
        To the fullest extent permitted by applicable law, CryptoRedar disclaims liability for any direct or
        indirect loss arising from reliance on site content or tool outputs, including financial loss, tax
        penalties, trading losses, or business interruption. See our{' '}
        <Link href="/terms-of-use">Terms of Use</Link> for full liability limitations.
      </p>

      <h2>Report Errors</h2>
      <p>
        If you identify a factual or formula error, please notify us at{' '}
        <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a> so we can investigate and
        correct it promptly.
      </p>
    </ContentPageLayout>
  );
}
