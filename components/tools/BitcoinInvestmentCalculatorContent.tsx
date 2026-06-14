import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';

const pageUrl = `${siteConfig.url}/tools/crypto/bitcoin-investment-calculator`;

const faqs = [
  {
    question: 'Can I calculate returns for dates before 2013?',
    answer:
      'Bitcoin prices before mid-2010 are sparse and largely anecdotal. Reliable exchange-based price data becomes consistent from 2013 onward, when Coinbase and Bitstamp published continuous order books. Our bitcoin investment calculator uses verified historical price data; very early dates may return limited or unavailable results due to the absence of credible market records prior to exchanges launching.',
  },
  {
    question: 'Does this tool use real historical Bitcoin prices?',
    answer:
      'Yes. The btc investment calculator pulls from verified historical price datasets derived from major exchanges. Prices reflect daily close values, which means intra-day variance is not captured. For trades executed at exact intra-day prices, treat results as a directional estimate rather than a precise figure and cross-reference against your actual exchange trade history.',
  },
  {
    question: 'What if I did dollar-cost averaging into Bitcoin?',
    answer:
      'DCA scenarios require entering a monthly investment amount and start date. The calculator computes each periodic purchase at the historical BTC price on that date, sums the total cost basis, and compares it against the final value using the current or selected end price. This is the most realistic way to model how consistent monthly buying would have performed versus a lump-sum entry.',
  },
  {
    question: 'Is past Bitcoin performance a predictor of future returns?',
    answer:
      'No. Historical bitcoin returns demonstrate what occurred under specific market conditions, regulatory environments, and adoption cycles that may not repeat. Bitcoin has produced extreme gains and losses across different four-year cycles. Use this bitcoin return calculator as a research tool for understanding past outcomes, not as a forecast. All investment decisions carry risk, including total loss of capital.',
  },
  {
    question: 'How does Bitcoin investment differ from stock investment?',
    answer:
      'Bitcoin trades 24/7 with no market hours, no dividends, and no earnings reports. Volatility is structurally higher—BTC has experienced drawdowns exceeding 80% multiple times. There is no central authority to bail out the asset. Unlike equities, Bitcoin is not backed by company revenues. Custody risk (losing private keys or exchange failure) is a real risk without an equivalent in traditional equities.',
  },
];

const howToSteps = [
  {
    name: 'Select your investment date',
    text: 'Choose the historical date you want to model. This sets the BTC price at which your hypothetical investment was made. Use any date from 2013 onward for reliable price data.',
  },
  {
    name: 'Enter your investment amount in USD',
    text: 'Input the dollar amount you want to model. This is your total capital deployed in the lump-sum scenario, or your recurring monthly amount for the DCA scenario.',
  },
  {
    name: 'Choose lump sum or DCA',
    text: 'Lump sum calculates a single purchase on the selected date. DCA runs monthly purchases from your start date to your selected end date, buying at each month\'s historical closing price.',
  },
  {
    name: 'View current value, profit, and ROI',
    text: 'The calculator outputs total BTC acquired, current portfolio value, total cost invested, net profit or loss, and ROI percentage. Use these figures for research and scenario planning.',
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
  name: "How to Use CryptoRedar's Bitcoin Investment Calculator",
  description:
    'Step-by-step guide to calculating historical Bitcoin investment returns with CryptoRedar\'s free bitcoin investment calculator.',
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
      name: 'Bitcoin Investment Calculator',
      item: pageUrl,
    },
  ],
};

const prose =
  'mt-10 pt-10 border-t border-slate-200/60 [&_h2]:text-xl [&_h2]:md:text-2xl [&_h2]:font-bold [&_h2]:text-[#0F172A] [&_h2]:tracking-[-0.025em] [&_h2]:mt-10 [&_h2]:mb-4 [&_h2:first-child]:mt-0 [&_h3]:text-base [&_h3]:md:text-lg [&_h3]:font-semibold [&_h3]:text-[#0F172A] [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:text-[15px] [&_p]:leading-7 [&_p]:text-[#64748B] [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-4 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:mb-4 [&_ol]:space-y-3 [&_li]:text-[15px] [&_li]:leading-7 [&_li]:text-[#64748B] [&_a]:text-[#FF9500] [&_a]:font-medium [&_a]:underline-offset-2 [&_a]:hover:underline [&_strong]:text-[#0F172A] [&_strong]:font-semibold';

export default function BitcoinInvestmentCalculatorContent() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <article className={prose} aria-label="Bitcoin investment calculator guide">
        <h2>What Is a Bitcoin Investment Calculator?</h2>
        <p>
          A <strong>bitcoin investment calculator</strong> answers a deceptively simple question: if
          you had invested a specific amount in Bitcoin on a specific date, what would it be worth
          today? The tool retrieves the historical BTC price at your chosen date, calculates how
          many coins your investment would have purchased, and multiplies that by the current price
          to show present value, net profit, and ROI.
        </p>
        <p>
          Curious investors use it to benchmark their actual returns against what passive BTC
          exposure would have delivered. Researchers model different entry points to study market
          cycle behavior. Financial planners run scenarios for clients asking about crypto
          allocations. Even FOMO sufferers find constructive use in converting regret into concrete
          data—understanding exactly what was missed and why. Whether you want to analyze{' '}
          <strong>historical bitcoin returns</strong> or test a DCA hypothesis, this tool turns
          abstract &quot;what if&quot; into real numbers.
        </p>

        <h2>How Bitcoin Investment Returns Are Calculated</h2>
        <p>
          The formula behind every <strong>btc investment calculator</strong> is straightforward:
        </p>
        <p className="font-mono text-sm bg-slate-50 border border-slate-200/80 rounded-xl px-4 py-3 text-[#0F172A] mb-4">
          Current Value = (Investment Amount ÷ Price at Entry) × Current Price
        </p>
        <p>
          Your investment amount divided by the BTC price on the entry date gives you the quantity
          of Bitcoin purchased. Multiply that quantity by the current price and you get your
          portfolio value today. Subtract the original investment to get net profit. Divide net
          profit by the original investment and multiply by 100 for ROI percentage.
        </p>
        <p>
          Example: $1,000 invested in Bitcoin in January 2020, when BTC traded near $7,200, would
          have purchased approximately 0.139 BTC. With Bitcoin above $60,000 in 2024, that position
          is worth roughly $8,300—a gain of $7,300 or about <strong>730% ROI</strong>. This{' '}
          <strong>bitcoin return calculator</strong> automates that arithmetic across any date range,
          removing the manual lookup and math that make historical analysis tedious.
        </p>
        <p>
          For DCA scenarios, the same formula runs monthly: each month&apos;s contribution is
          divided by that month&apos;s historical BTC price, the coin amounts accumulate, and the
          final total is valued at current price. This produces a weighted average cost basis and
          realistic total return figure for systematic investors.
        </p>

        <h2>Bitcoin&apos;s Historical Performance at a Glance</h2>
        <p>
          Understanding <strong>historical bitcoin returns</strong> requires context across distinct
          market cycles:
        </p>
        <ul>
          <li>
            <strong>2013:</strong> BTC hit its first major ATH near $1,150 in November, driven by
            Cyprus banking crisis demand and early exchange growth. A subsequent crash to under $200
            followed.
          </li>
          <li>
            <strong>2017 bull run:</strong> Bitcoin surged from $1,000 to nearly $20,000, fueled by
            ICO mania and retail FOMO. The 2018 bear market erased roughly 84% of peak value.
          </li>
          <li>
            <strong>2020 halving rally:</strong> The May 2020 halving cut block rewards from 12.5
            to 6.25 BTC. Institutional accumulation (MicroStrategy, Square) pushed price from
            $9,000 to $29,000 by year-end.
          </li>
          <li>
            <strong>2021 ATH at $69,000:</strong> November 2021 marked Bitcoin&apos;s all-time
            high of $68,789. The 2022 bear market brought it back to $15,500 following the FTX
            collapse.
          </li>
          <li>
            <strong>2024 ETF approval:</strong> The SEC approved spot Bitcoin ETFs in January 2024,
            triggering institutional inflows and a new ATH above $73,000 in March 2024.
          </li>
        </ul>
        <p>
          Each cycle shows higher lows and higher highs over a multi-year horizon—but also severe
          intermediate drawdowns that test every investor&apos;s conviction.
        </p>

        <h2>Key Variables That Affect Your BTC Investment Return</h2>
        <p>
          Four variables dominate the output of any bitcoin investment calculator, and controlling
          them is the entire discipline of crypto investing:
        </p>
        <ul>
          <li>
            <strong>Entry date:</strong> Buying at a cycle bottom versus a cycle top produces
            returns that differ by several hundred percent on identical capital.
          </li>
          <li>
            <strong>Holding period:</strong> Short-term positions capture volatility in both
            directions. Long-term holders (4+ years) have historically recovered from every major
            drawdown in BTC&apos;s history.
          </li>
          <li>
            <strong>DCA vs lump sum:</strong> DCA reduces timing risk at the cost of potentially
            lower returns in a consistently rising market. Lump sum maximizes exposure but
            concentrates timing risk on a single day.
          </li>
          <li>
            <strong>Exit timing:</strong> Selling at a local low during panic turns paper losses
            into realized losses. Defining exit criteria before entering prevents emotional
            decisions.
          </li>
          <li>
            <strong>Fees and taxes:</strong> Exchange fees, withdrawal costs, and capital gains tax
            reduce net return. Indian traders face 30% on gains; US traders face capital gains tax
            rates varying by hold duration.
          </li>
        </ul>

        <h2>How to Use This Bitcoin Investment Calculator</h2>
        <ol>
          {howToSteps.map((step, i) => (
            <li key={i}>
              <strong>{step.name}.</strong> {step.text}
            </li>
          ))}
        </ol>

        <h2>Real Investment Scenarios</h2>

        <h3>$500 lump sum in January 2020</h3>
        <p>
          BTC price in January 2020 averaged approximately $7,200. A $500 investment purchased
          about 0.0694 BTC. At a BTC price of $65,000 in mid-2024, that position would be worth
          approximately <strong>$4,511—a gain of $4,011 or about 802% ROI</strong>. Zero trades
          made, zero complexity: pure hold from a low-FOMO entry point.
        </p>

        <h3>$100/month DCA for 24 months starting January 2021</h3>
        <p>
          Starting DCA at the beginning of 2021 means buying at prices ranging from $29,000 to
          $69,000 (the ATH), then through the 2022 bear market down to $15,500. Total invested:
          $2,400. The weighted average cost basis across the cycle sits near $38,000, reflecting
          heavy exposure to the bear. At a current price of $65,000, the position would be worth
          roughly <strong>$4,100—a gain of approximately $1,700 or 71%</strong>. DCA smoothed the
          pain of buying the top but took time to recover.
        </p>

        <h3>$10,000 lump sum at the November 2021 ATH ($68,789)</h3>
        <p>
          Buying at the exact cycle top is the sobering counterexample. $10,000 purchased
          approximately 0.1454 BTC. At current prices near $65,000, that position is worth about{' '}
          <strong>$9,450—a loss of $550 or -5.5%</strong>, roughly three years later. The 2022 bear
          market pushed this position to a $5,500 loss at the lows. Anyone who sold during the FTX
          panic realized a 55% loss. Holding through recovered most of the ground. Use the{' '}
          <Link href="/tools/crypto/crypto-profit-calculator">crypto profit calculator</Link> to
          model specific exit scenarios on any entry, and check{' '}
          <Link href="/tools/crypto/crypto-roi-calculator">crypto ROI calculator</Link> to benchmark
          against alternative asset deployment.
        </p>

        <h2>Bitcoin vs Other Asset Classes — Historical ROI</h2>
        <p>
          Over the five years from 2019 to 2024, Bitcoin outperformed every major traditional asset
          class by a wide margin, but with far higher volatility:
        </p>
        <ul>
          <li>
            <strong>Bitcoin (BTC):</strong> Approximately +800% to +1,000% depending on exact entry
            and exit dates within the period.
          </li>
          <li>
            <strong>S&amp;P 500:</strong> Approximately +90% to +100% over the same five years,
            including the 2022 equity bear market.
          </li>
          <li>
            <strong>Gold:</strong> Approximately +60% to +70%, driven by inflation concerns and
            central bank buying.
          </li>
          <li>
            <strong>US Real Estate (Case-Shiller Index):</strong> Approximately +40% to +60%
            nationally, heavily market-dependent.
          </li>
        </ul>
        <p>
          Bitcoin&apos;s return premium comes with commensurate risk: a 50–80% drawdown during bear
          phases versus 20–35% peak-to-trough declines in equities. Portfolio allocation decisions
          should weigh risk-adjusted returns, not raw numbers. Explore all{' '}
          <Link href="/tools/crypto">all crypto tools</Link> to build a complete picture of your
          exposure and returns.
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
