import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';

const pageUrl = `${siteConfig.url}/tools/crypto/crypto-tax-calculator`;

const faqs = [
  {
    question: 'Do I pay tax on crypto losses in India?',
    answer:
      'No. Under India\'s 2022 Finance Act, losses from Virtual Digital Assets cannot be set off against any other income—including gains from other crypto trades. If you lose ₹2 lakh on Bitcoin and gain ₹2 lakh on Ethereum in the same year, you still pay 30% tax on the ₹2 lakh ETH gain. Losses also cannot be carried forward to subsequent years, unlike traditional capital losses under Indian tax law.',
  },
  {
    question: 'Is crypto-to-crypto swap taxable in India?',
    answer:
      'Yes. The Income Tax Department treats a crypto-to-crypto swap as a disposal of the first asset at fair market value, triggering a taxable event even if you never converted to rupees. If you swap BTC for ETH, the fair market value of ETH received on that date is treated as your sale consideration for BTC, and 30% tax applies on any gain over your BTC cost of acquisition.',
  },
  {
    question: 'What is TDS on crypto transactions?',
    answer:
      'TDS (Tax Deducted at Source) at 1% is deducted by exchanges on the seller\'s consideration for VDA transactions above ₹10,000 per financial year (₹50,000 for specified persons such as individuals not required to audit accounts). The exchange remits this directly to the government and reflects it in your Form 26AS. You can claim this TDS credit against your total tax liability when filing ITR.',
  },
  {
    question: 'Can I deduct trading fees from crypto tax in India?',
    answer:
      'No. Under Section 115BBH, the only deduction permitted against VDA income is the cost of acquisition—the price you paid for the asset. Exchange fees, gas fees, transaction charges, and any other expenses are explicitly excluded from deductions. This is a strict rule with no exceptions, making fee-efficient trading more important for Indian crypto investors than for traders in most other jurisdictions.',
  },
  {
    question: 'How do I report crypto income in ITR?',
    answer:
      'Crypto income is reported under Schedule VDA in ITR-2 or ITR-3, introduced from AY 2023-24 onward. For each disposal, you report the date of acquisition, date of transfer, cost of acquisition, and sale consideration. Income from VDA transactions is taxable at a flat 30% under Section 115BBH. Exchanges operating in India provide annual transaction statements to assist with this filing. Consult a CA for complex portfolios with DeFi activity.',
  },
];

const howToSteps = [
  {
    name: 'Enter your crypto asset name',
    text: 'Specify which Virtual Digital Asset you are calculating tax for—BTC, ETH, SOL, or any other. Indian tax law applies identically to all VDAs regardless of the asset.',
  },
  {
    name: 'Enter purchase price in rupees (₹)',
    text: 'Input the price per coin at the time of purchase. This is your cost of acquisition—the only deductible expense under Section 115BBH. Use your exchange invoice or contract note for accuracy.',
  },
  {
    name: 'Enter sale price in rupees (₹)',
    text: 'Input the price per coin at the time of disposal. For crypto-to-crypto swaps, use the fair market value of the received asset on the date of the transaction.',
  },
  {
    name: 'Enter quantity',
    text: 'Input the number of coins or tokens sold. For partial disposals, enter only the quantity being disposed of in this transaction.',
  },
  {
    name: 'View tax payable and effective rate',
    text: 'The calculator outputs gross profit, total tax at 30% flat rate, and TDS estimate if applicable. Use this figure for advance tax planning and ITR verification.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: "How to Use CryptoRedar's Crypto Tax Calculator India",
  description:
    "Step-by-step guide to calculating your cryptocurrency tax liability in India using CryptoRedar's free crypto tax calculator.",
  step: howToSteps.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: step.name,
    text: step.text,
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Crypto Tools',
      item: `${siteConfig.url}/tools/crypto`,
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Crypto Tax Calculator India',
      item: pageUrl,
    },
  ],
};

const prose =
  'mt-10 pt-10 border-t border-slate-200/60 [&_h2]:text-xl [&_h2]:md:text-2xl [&_h2]:font-bold [&_h2]:text-[#0F172A] [&_h2]:tracking-[-0.025em] [&_h2]:mt-10 [&_h2]:mb-4 [&_h2:first-child]:mt-0 [&_h3]:text-base [&_h3]:md:text-lg [&_h3]:font-semibold [&_h3]:text-[#0F172A] [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:text-[15px] [&_p]:leading-7 [&_p]:text-[#64748B] [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-4 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:mb-4 [&_ol]:space-y-3 [&_li]:text-[15px] [&_li]:leading-7 [&_li]:text-[#64748B] [&_a]:text-[#FF9500] [&_a]:font-medium [&_a]:underline-offset-2 [&_a]:hover:underline [&_strong]:text-[#0F172A] [&_strong]:font-semibold';

export default function CryptoTaxCalculatorContent() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <article className={prose} aria-label="Crypto tax calculator India guide">
        <h2>What Is a Crypto Tax Calculator?</h2>
        <p>
          A <strong>crypto tax calculator India</strong> computes your tax liability on
          cryptocurrency gains under the country&apos;s specific VDA (Virtual Digital Asset) tax
          framework. Unlike calculators designed for the US or UK, this tool applies India&apos;s
          2022 Finance Act rules: a flat 30% tax on profits, 1% TDS on qualifying transactions, and
          zero allowance for expense deductions beyond cost of acquisition.
        </p>
        <p>
          The tool is essential because India&apos;s crypto tax rules are uniquely strict. There is
          no distinction between short-term and long-term gains, no loss set-off against other
          income, and no carry-forward of losses. Every realized profit—regardless of how small—is
          taxed at 30% flat. Running the numbers before you file, or better yet before you execute
          a trade, eliminates the risk of underpaying advance tax and facing interest penalties
          under Section 234B and 234C.
        </p>

        <h2>How India Taxes Cryptocurrency — The Complete Rules</h2>
        <p>
          The <strong>30% crypto tax India</strong> framework was introduced through the Finance Act
          2022, effective from Assessment Year 2023-24. Here is exactly what the law specifies:
        </p>
        <ul>
          <li>
            <strong>Flat 30% tax on gains:</strong> All profits from VDA disposals are taxed at
            30%, plus applicable surcharge and cess (effective rate up to ~42.7% for highest income
            slabs). No slab rate benefits apply.
          </li>
          <li>
            <strong>Only deduction: cost of acquisition.</strong> You cannot deduct exchange fees,
            gas fees, transaction charges, or any other expenses. The only permitted deduction is
            the purchase price of the asset being disposed of.
          </li>
          <li>
            <strong>No loss set-off:</strong> A loss on one VDA cannot be used to reduce gains on
            another VDA in the same year. Each profitable trade is taxed independently.
          </li>
          <li>
            <strong>No carry-forward:</strong> VDA losses cannot be carried to future assessment
            years—unlike capital losses under Section 70-74 of the Income Tax Act.
          </li>
          <li>
            <strong>1% TDS under Section 194S:</strong> Exchanges deduct 1% TDS on the seller side
            for transactions above ₹10,000 per year (₹50,000 for specified persons). This is
            credited to your Form 26AS and adjustable against your total tax liability.
          </li>
        </ul>
        <p>
          This <strong>VDA tax calculator</strong> applies all these rules automatically, so you see
          the real after-tax position on any trade—not just the gross profit headline.
        </p>

        <h2>The Crypto Tax Formula for India</h2>
        <p>
          Calculating <strong>how to calculate crypto tax India</strong> comes down to one formula:
        </p>
        <p className="font-mono text-sm bg-slate-50 border border-slate-200/80 rounded-xl px-4 py-3 text-[#0F172A] mb-4">
          Tax Payable = 30% × (Sale Value − Cost of Acquisition)
        </p>
        <p>
          Example: you bought 1 ETH at ₹1,00,000 and sold it at ₹2,50,000. Gross profit = ₹1,50,000.
          Tax payable = 30% × ₹1,50,000 = <strong>₹45,000</strong>. Net profit after tax =
          ₹1,05,000. Note: if your exchange deducted 1% TDS (₹2,500 on ₹2,50,000 sale value),
          that amount is credited against your ₹45,000 liability, leaving advance tax to pay of
          ₹42,500.
        </p>
        <p>
          No deduction is permitted for the exchange trading fee of, say, ₹250 on the buy leg and
          ₹250 on the sell leg. Both fees are ignored under Section 115BBH. This makes the effective
          tax burden higher than the headline 30% when fees are factored into actual net returns.
        </p>

        <h2>What Counts as a Taxable Crypto Event in India?</h2>
        <p>The following are all taxable events under Indian VDA tax law:</p>
        <ul>
          <li>
            <strong>Selling crypto for INR:</strong> The most straightforward taxable event—any
            disposal for fiat rupees triggers 30% tax on the gain.
          </li>
          <li>
            <strong>Crypto-to-crypto swap:</strong> Swapping BTC for ETH is treated as selling BTC
            at fair market value on the date of swap, even if you never touch rupees.
          </li>
          <li>
            <strong>Using crypto for purchases:</strong> Paying for goods or services with crypto is
            a disposal event. The market value of what you received is the sale consideration.
          </li>
          <li>
            <strong>Staking rewards:</strong> Rewards earned from staking are taxable as income in
            the year received, at fair market value on the date of receipt. When eventually sold,
            the cost of acquisition is the fair market value at which they were originally taxed.
          </li>
          <li>
            <strong>Airdrops:</strong> Crypto received via airdrop is taxable as income at fair
            market value on receipt. Subsequent sale triggers the 30% VDA tax on any further gain.
          </li>
          <li>
            <strong>Mining income:</strong> Mining rewards are taxable as income when received. The
            cost of acquisition for future disposal purposes is the market value at the time of
            mining.
          </li>
        </ul>
        <p>
          Transfers between your own wallets, gifting between family members, and unrealized gains
          (holding without selling) are generally not taxable events—but consult a qualified CA for
          your specific situation.
        </p>

        <h2>How to Use CryptoRedar&apos;s Crypto Tax Calculator</h2>
        <ol>
          {howToSteps.map((step, i) => (
            <li key={i}>
              <strong>{step.name}.</strong> {step.text}
            </li>
          ))}
        </ol>

        <h2>Real Tax Calculation Examples</h2>

        <h3>Example 1: BTC trade with ₹5 lakh profit</h3>
        <p>
          You bought 0.1 BTC at ₹30,00,000 per BTC (cost: ₹3,00,000). You sold 0.1 BTC at
          ₹80,00,000 per BTC (sale value: ₹8,00,000). Profit = ₹5,00,000. Tax at 30% ={' '}
          <strong>₹1,50,000</strong>. TDS at 1% of sale value = ₹8,000, which offsets your
          liability. Net tax to pay via advance tax: ₹1,42,000. Your exchange trading fees on both
          legs are not deductible.
        </p>

        <h3>Example 2: ETH loss scenario — zero tax but no offset</h3>
        <p>
          You bought 2 ETH at ₹2,00,000 each (cost: ₹4,00,000). You sold at ₹1,50,000 each (sale
          value: ₹3,00,000). Loss = ₹1,00,000. <strong>Tax payable: ₹0</strong>—you cannot pay tax
          on a loss. But critically, this ₹1,00,000 loss cannot be used to reduce tax on a
          profitable BTC trade executed in the same year. It is simply absorbed. This is the most
          punishing aspect of India&apos;s VDA tax rules for active traders.
        </p>

        <h3>Example 3: SOL staking reward taxability</h3>
        <p>
          You received 5 SOL as staking rewards when SOL was priced at ₹12,000 per token. Taxable
          income in year of receipt = 5 × ₹12,000 = <strong>₹60,000</strong>, added to your total
          income and taxed at your applicable slab rate (not the 30% VDA rate—staking rewards are
          treated as &apos;Income from Other Sources&apos; per current guidance). When you
          eventually sell the 5 SOL at ₹20,000 each, the gain = (₹20,000 − ₹12,000) × 5 = ₹40,000,
          and 30% VDA tax applies on that ₹40,000 gain. Use our{' '}
          <Link href="/tools/crypto/crypto-profit-calculator">crypto profit calculator</Link> to
          model this two-stage tax treatment.
        </p>

        <h2>TDS on Crypto — What You Must Know</h2>
        <p>
          Section 194S mandates that exchanges deduct 1% TDS on the seller&apos;s consideration for
          every qualifying VDA transaction. Key operational facts:
        </p>
        <ul>
          <li>
            Threshold: ₹10,000 per financial year per buyer-seller pair (₹50,000 for specified
            persons filing ITR).
          </li>
          <li>
            The exchange deducts TDS at the point of settlement and remits it to the government
            within the statutory timeline.
          </li>
          <li>
            TDS is reflected in your <strong>Form 26AS</strong> and AIS (Annual Information
            Statement), which the IT Department uses to cross-verify declared income.
          </li>
          <li>
            You can claim TDS as a credit against your 30% tax liability. If TDS exceeds your total
            tax (rare for profitable traders), you can claim a refund in your ITR.
          </li>
          <li>
            <strong>Advance tax implications:</strong> If your total estimated VDA tax liability
            exceeds ₹10,000 for the year, you must pay advance tax in four installments (June,
            September, December, March). Failure attracts interest under Sections 234B and 234C.
          </li>
        </ul>
        <p>
          Cross-reference with our{' '}
          <Link href="/tools/crypto/crypto-roi-calculator">crypto ROI calculator</Link> and{' '}
          <Link href="/tools/crypto/crypto-portfolio-tracker">crypto portfolio tracker</Link> to
          maintain a complete picture of realized gains across your entire portfolio, and explore{' '}
          <Link href="/tools/crypto">all crypto tools</Link> for end-to-end trade analysis.
        </p>

        <h2>Frequently Asked Questions</h2>
        <div className="not-prose flex flex-col gap-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group border border-slate-200/80 rounded-xl bg-white/50 overflow-hidden"
            >
              <summary className="cursor-pointer px-5 py-4 text-sm font-semibold text-[#0F172A] list-none flex items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
                {faq.question}
                <span className="text-slate-400 text-xs transition-transform group-open:rotate-180 shrink-0">
                  ▼
                </span>
              </summary>
              <div className="px-5 pb-4 text-sm text-[#64748B] leading-6 border-t border-slate-100">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </article>
    </>
  );
}
