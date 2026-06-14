import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';

const pageUrl = `${siteConfig.url}/tools/crypto/crypto-portfolio-tracker`;

const faqs = [
  {
    question: 'Is this crypto portfolio tracker free?',
    answer:
      'Yes, completely. CryptoRedar\'s portfolio tracker is free to use with no paywalls, no premium tier, and no feature locks behind a login screen. All tracking runs in your browser with holdings saved to your local device storage, so your financial data never leaves your machine. There are no subscription fees, trial periods, or hidden charges of any kind.',
  },
  {
    question: 'How many coins can I track?',
    answer:
      'You can track as many assets as your browser storage allows—in practice, hundreds of entries. The tracker supports any cryptocurrency: Bitcoin, Ethereum, Solana, BNB, MATIC, altcoins, and tokens across networks. There is no hard cap on the number of positions. Each entry takes a coin name, quantity, and average buy price; current values update from the integrated price feed.',
  },
  {
    question: 'Does it support DCA tracking?',
    answer:
      'Yes. For dollar-cost averaged positions, enter the total quantity held and your weighted average buy price as a single entry. The tracker computes your total cost basis, current market value, and net P&L from those inputs. If you prefer granular lot tracking, create separate entries for each purchase with the specific date, price, and quantity; the tracker aggregates them into total portfolio view.',
  },
  {
    question: 'Can I use this for tax reporting?',
    answer:
      'The tracker provides the cost basis and realized/unrealized P&L data that feeds into tax calculations. For Indian users, export figures directly into our crypto tax calculator to compute 30% VDA liability. For US users, the cost basis data aligns with IRS requirements for capital gains reporting. The tracker does not automatically generate tax forms—use its data as input to a tax filing workflow or share with your accountant.',
  },
  {
    question: 'How does a portfolio tracker differ from an exchange wallet?',
    answer:
      'An exchange wallet shows holdings on one platform only. A portfolio tracker aggregates assets across multiple exchanges, wallets, and chains into a single view, giving you true total exposure. If you hold BTC on Coinbase, ETH on a hardware wallet, and SOL on Kraken, an exchange wallet shows each in isolation. A crypto portfolio tracker combines all positions to show total value, overall P&L, and allocation percentages across your entire crypto stack.',
  },
];

const howToSteps = [
  {
    name: 'Add your crypto assets',
    text: 'Enter each cryptocurrency you hold. Input the coin name or symbol. You can add BTC, ETH, SOL, or any altcoin—the tracker handles all assets identically.',
  },
  {
    name: 'Enter quantity held and average buy price',
    text: 'For each asset, input how many coins you hold and your average purchase price. For DCA positions, use the weighted average across all buy orders. For single purchases, use the exact fill price.',
  },
  {
    name: 'Sync with live prices',
    text: 'The tracker fetches current market prices and automatically calculates your present portfolio value for each asset. Prices update in real time from reliable market data sources.',
  },
  {
    name: 'Monitor total portfolio value and individual coin P&L',
    text: 'View your total portfolio value, individual asset profit/loss in both absolute and percentage terms, and allocation breakdown by asset. Use this data to spot overexposure and track progress toward investment goals.',
  },
  {
    name: 'Export data for tax reporting',
    text: 'Export your holdings data as a CSV or copy figures for use in tax calculations. Feed cost basis and sale values into our crypto tax calculator for India, or share with your accountant for ITR or other tax filings.',
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
  name: "How to Use CryptoRedar's Crypto Portfolio Tracker",
  description:
    "Step-by-step guide to tracking your cryptocurrency portfolio using CryptoRedar's free crypto portfolio tracker.",
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
      name: 'Crypto Portfolio Tracker',
      item: pageUrl,
    },
  ],
};

const prose =
  'mt-10 pt-10 border-t border-slate-200/60 [&_h2]:text-xl [&_h2]:md:text-2xl [&_h2]:font-bold [&_h2]:text-[#0F172A] [&_h2]:tracking-[-0.025em] [&_h2]:mt-10 [&_h2]:mb-4 [&_h2:first-child]:mt-0 [&_h3]:text-base [&_h3]:md:text-lg [&_h3]:font-semibold [&_h3]:text-[#0F172A] [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:text-[15px] [&_p]:leading-7 [&_p]:text-[#64748B] [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-4 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:mb-4 [&_ol]:space-y-3 [&_li]:text-[15px] [&_li]:leading-7 [&_li]:text-[#64748B] [&_a]:text-[#FF9500] [&_a]:font-medium [&_a]:underline-offset-2 [&_a]:hover:underline [&_strong]:text-[#0F172A] [&_strong]:font-semibold';

export default function CryptoPortfolioTrackerContent() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <article className={prose} aria-label="Crypto portfolio tracker guide">
        <h2>What Is a Crypto Portfolio Tracker?</h2>
        <p>
          A <strong>crypto portfolio tracker</strong> aggregates all your cryptocurrency holdings
          into a single dashboard, showing current market value, cost basis, profit/loss per asset,
          and total portfolio performance in real time. Instead of logging into three exchanges and
          two wallets to mentally sum your exposure, you see everything in one place with live
          prices applied automatically.
        </p>
        <p>
          Serious crypto investors use a tracker as a command center for their entire position.
          Day traders check intra-day P&amp;L across multiple coins without switching tabs. Long-term
          holders review weekly allocation drift without running manual spreadsheet calculations.
          DeFi participants combine on-chain yields with exchange holdings to see their true net
          position. If you own more than one asset—or hold assets on more than one platform—a{' '}
          <strong>bitcoin portfolio tracker</strong> and multi-coin tracker is not optional; it is
          the minimum baseline for informed decision-making.
        </p>

        <h2>Why Tracking Your Crypto Portfolio Matters</h2>
        <p>
          The case for using a <strong>cryptocurrency portfolio tracker</strong> goes beyond
          convenience. Real-time P&amp;L visibility is a risk management tool, not just a reporting
          one. When you can see that a single altcoin now represents 45% of your portfolio after a
          rally, you have actionable data. Without tracking, you only discover overexposure after the
          drawdown has already started.
        </p>
        <p>
          Tax preparation in jurisdictions like India—where every realized gain triggers a 30% VDA
          tax—requires precise cost basis data for every disposal. Reconstructing that from
          fragmented exchange histories at year-end is error-prone and time-consuming. A tracker
          that logs each purchase with quantity and price gives you clean inputs for our{' '}
          <Link href="/tools/crypto/crypto-tax-calculator">crypto tax calculator for India</Link>{' '}
          at ITR filing time.
        </p>
        <p>
          Rebalancing decisions require portfolio-level data. If your target allocation is 60% BTC,
          30% ETH, and 10% altcoins, you need to see current allocation percentages before you can
          execute a rebalancing trade. Emotional discipline also improves when you{' '}
          <strong>monitor crypto portfolio</strong> performance against a plan rather than reacting
          to price headlines in isolation.
        </p>

        <h2>What to Look for in a Crypto Portfolio Manager</h2>
        <p>
          Not all <strong>crypto portfolio manager</strong> tools are built the same. The features
          that matter most for serious investors:
        </p>
        <ul>
          <li>
            <strong>Multi-coin support:</strong> Must handle Bitcoin, Ethereum, and all major
            altcoins without requiring manual price entry.
          </li>
          <li>
            <strong>Real-time prices:</strong> Prices that update automatically against live market
            feeds, not cached 24-hour-old data.
          </li>
          <li>
            <strong>Profit/loss tracking:</strong> Per-asset and total portfolio P&amp;L in both
            absolute and percentage terms, calculated from your actual cost basis.
          </li>
          <li>
            <strong>DCA tracking:</strong> Ability to enter weighted average buy prices for
            systematically accumulated positions without manual math.
          </li>
          <li>
            <strong>Export for taxes:</strong> Data export capability so holdings and cost basis can
            flow into tax calculators or accountant workflows.
          </li>
          <li>
            <strong>Privacy-first:</strong> Local or browser-based storage with no server-side
            collection of your financial positions.
          </li>
        </ul>

        <h2>How to Use CryptoRedar&apos;s Crypto Portfolio Tracker</h2>
        <ol>
          {howToSteps.map((step, i) => (
            <li key={i}>
              <strong>{step.name}.</strong> {step.text}
            </li>
          ))}
        </ol>

        <h2>How to Build a Balanced Crypto Portfolio</h2>
        <p>
          Allocation strategy depends on your risk tolerance and investment horizon. Three
          structured approaches:
        </p>

        <h3>Conservative allocation — capital preservation focus</h3>
        <p>
          70% Bitcoin, 20% Ethereum, 10% stablecoins (USDC or USDT). This portfolio prioritizes
          the two highest-liquidity, longest-track-record assets while keeping a liquidity buffer
          to buy dips without selling positions. Suitable for investors with a 3–5 year horizon who
          want crypto exposure without altcoin volatility.
        </p>

        <h3>Growth allocation — asymmetric upside focus</h3>
        <p>
          40% Bitcoin, 30% Ethereum, 30% mid-cap altcoins (SOL, AVAX, MATIC, or sector leaders in
          DeFi/L2). The altcoin sleeve targets higher-beta growth in the assets most likely to
          outperform during a bull market. Rebalancing quarterly prevents any single altcoin from
          growing to a disproportionate share after a price spike.
        </p>

        <h3>Aggressive allocation — high-beta exposure</h3>
        <p>
          20% Bitcoin, 80% high-beta altcoins across DeFi, gaming, AI crypto, and emerging L1s.
          Maximum upside during bull markets; maximum drawdown during bears. Only appropriate if
          you can tolerate 80–90% drawdowns on the altcoin sleeve and have a multi-year horizon to
          recover. Size this portfolio as a portion of total investable assets, not all of it.
        </p>
        <p>
          Whichever allocation you run, use the tracker weekly. Markets move faster than quarterly
          review cycles, and unchecked allocation drift can silently concentrate risk in a single
          asset before you notice.
        </p>

        <h2>Common Portfolio Tracking Mistakes to Avoid</h2>
        <ul>
          <li>
            <strong>Ignoring fees in profit calculation:</strong> Exchange fees and gas costs reduce
            net returns. A trade that looks profitable at the headline price level can be a loss
            once all transaction costs are included. Always calculate using net figures from your
            exchange statements, not displayed P&amp;L which may exclude certain fees.
          </li>
          <li>
            <strong>Not tracking cost basis per lot:</strong> For tax purposes, the IRS and Indian
            IT Department both require accurate cost basis records. If you bought ETH at three
            different prices, you need each lot recorded separately—not just a single averaged
            figure—to use specific identification for tax optimization.
          </li>
          <li>
            <strong>Confusing paper gains with realized profit:</strong> Unrealized gains exist only
            in the tracker. They can disappear in hours during a volatile correction. Make decisions
            based on what you would actually receive after selling, not the number on the screen
            while the position is open.
          </li>
          <li>
            <strong>Neglecting tax events:</strong> Every swap, staking reward, and airdrop is a
            taxable event in India and many other jurisdictions. Not logging these at the time they
            occur makes year-end tax filing exponentially harder—and increases the risk of
            underreporting income.
          </li>
        </ul>
        <p>
          Use the tracker alongside our{' '}
          <Link href="/tools/crypto/crypto-profit-calculator">crypto profit calculator</Link> for
          individual trade analysis and{' '}
          <Link href="/tools/crypto/crypto-roi-calculator">crypto ROI calculator</Link> for
          performance benchmarking. Explore the full{' '}
          <Link href="/tools/crypto">all crypto tools</Link> suite to manage every aspect of your
          crypto investment workflow in one place.
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
