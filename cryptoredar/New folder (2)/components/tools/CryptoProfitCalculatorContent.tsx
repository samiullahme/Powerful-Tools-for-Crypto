import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';

const pageUrl = `${siteConfig.url}/tools/crypto/crypto-profit-calculator`;

const faqs = [
  {
    question: 'Is crypto profit taxable?',
    answer:
      'Yes, in most jurisdictions. India taxes crypto gains at a flat 30% when you sell, with no loss offset against other income. The US treats crypto as property—selling for a profit triggers capital gains tax at ordinary or preferential rates. The UK applies Capital Gains Tax above your annual exempt amount. Tax applies on realized gains when you dispose of the asset, not on unrealized paper profits while you hold.',
  },
  {
    question: 'How do I calculate profit on multiple crypto buys?',
    answer:
      'Use a weighted average cost basis: multiply each buy price by its quantity, sum the totals, divide by total coins held. That average becomes your entry price in this calculator. For precise tax reporting with FIFO or specific identification methods, track each lot separately in a spreadsheet or use a crypto portfolio tracker that stores individual purchase dates and amounts.',
  },
  {
    question: 'Does this calculator support all cryptocurrencies?',
    answer:
      'Yes. The math is identical whether you trade Bitcoin, Ethereum, Solana, BNB, or any altcoin. Enter prices in INR, USD, or EUR using the currency selector above. Pair your figures with live crypto prices from exchanges or aggregators to stay aligned with current market rates before you execute a trade or close a position.',
  },
  {
    question: 'What is a good crypto profit percentage?',
    answer:
      'Context matters more than a fixed benchmark. Beating your cost of capital after fees and taxes is the baseline. Short-term traders often target 2–5% per trade; long-term holders measure against multi-year CAGR. Compare results to a simple BTC or ETH buy-and-hold strategy to judge whether active trading actually added value over passive exposure.',
  },
  {
    question: 'How is crypto profit different from crypto ROI?',
    answer:
      'Profit is the absolute dollar or rupee gain: sale revenue minus total cost including fees. ROI expresses that gain as a percentage of your initial investment. A ₹10,000 profit on a ₹50,000 position is 20% ROI. Use our crypto ROI calculator when you need percentage returns compared across different position sizes and time horizons.',
  },
];

const howToSteps = [
  {
    name: 'Enter the cryptocurrency name or symbol',
    text: 'Decide which asset you are evaluating—BTC, ETH, SOL, or any altcoin. The calculator works on price and quantity rather than live ticker lookup, so pull exact fill prices from your exchange trade history and confirm the coin matches your records.',
  },
  {
    name: 'Enter your buy price and quantity',
    text: 'Input the price per coin at purchase and how many coins you bought. If you DCAed across several orders, calculate a weighted average buy price first, then enter that single figure here for an accurate blended cost basis.',
  },
  {
    name: 'Enter your sell price',
    text: 'Add the exit price per coin—either your actual sale price from the exchange or a target price for planning. Cross-check against live crypto prices on CoinMarketCap or your order book before committing to a trade based on projected numbers.',
  },
  {
    name: 'Add any trading fees',
    text: 'Enter buy and sell fee percentages from your exchange fee schedule. Maker/taker rates differ by platform and VIP tier; including them prevents overstated crypto investment profit figures that look good on paper but shrink after costs.',
  },
  {
    name: 'View instant profit/loss and percentage return',
    text: 'Read investment cost, sale revenue, net profit or loss, ROI percentage, and multiplier instantly. Use the copy button to save results for tax records, trade journals, or sharing with your accountant at year-end.',
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
  name: "How to Use CryptoRedar's Crypto Profit Calculator",
  description:
    'Step-by-step guide to calculating cryptocurrency profit, loss, and ROI with CryptoRedar\'s free crypto profit calculator.',
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
      name: 'Crypto Profit Calculator',
      item: pageUrl,
    },
  ],
};

const prose =
  'mt-10 pt-10 border-t border-slate-200/60 [&_h2]:text-xl [&_h2]:md:text-2xl [&_h2]:font-bold [&_h2]:text-[#0F172A] [&_h2]:tracking-[-0.025em] [&_h2]:mt-10 [&_h2]:mb-4 [&_h2:first-child]:mt-0 [&_h3]:text-base [&_h3]:md:text-lg [&_h3]:font-semibold [&_h3]:text-[#0F172A] [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:text-[15px] [&_p]:leading-7 [&_p]:text-[#64748B] [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-4 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:mb-4 [&_ol]:space-y-3 [&_li]:text-[15px] [&_li]:leading-7 [&_li]:text-[#64748B] [&_a]:text-[#FF9500] [&_a]:font-medium [&_a]:underline-offset-2 [&_a]:hover:underline [&_strong]:text-[#0F172A] [&_strong]:font-semibold';

export default function CryptoProfitCalculatorContent() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <article className={prose} aria-label="Crypto profit calculator guide">
        <h2>What Is a Crypto Profit Calculator?</h2>
        <p>
          A <strong>crypto profit calculator</strong> computes your net gain or loss on a cryptocurrency
          trade by comparing what you paid against what you received at exit, after fees. Instead of
          juggling spreadsheets at 2 a.m. when markets move, you enter buy price, sell price, quantity,
          and fee rates—then get instant numbers you can act on. The output tells you whether a trade
          actually made money once costs are stripped out, not just whether price went up.
        </p>
        <p>
          Day traders use it to validate entries before closing a position. Long-term HODLers run
          scenarios on exit targets without touching their cold storage records. DeFi investors model
          swaps, bridge costs, and partial exits across liquidity pools. Anyone who needs to{' '}
          <strong>calculate crypto returns</strong> accurately—without rounding errors—benefits from a
          dedicated tool rather than mental math or a generic spreadsheet template.
        </p>
        <p>
          CryptoRedar&apos;s version runs entirely in your browser with no account required. It supports
          INR, USD, and EUR, calculates ROI and multiplier alongside raw profit, and pairs naturally with
          our <Link href="/tools/crypto">all crypto tools</Link> for tax estimation, ROI comparison, and
          multi-asset portfolio tracking when your holdings grow beyond a single trade.
        </p>

        <h2>How to Calculate Crypto Profit and Loss</h2>
        <p>
          The core formula behind every <strong>crypto profit and loss calculator</strong> is
          straightforward:
        </p>
        <p className="font-mono text-sm bg-slate-50 border border-slate-200/80 rounded-xl px-4 py-3 text-[#0F172A] mb-4">
          Profit = (Sell Price − Buy Price) × Amount − Fees
        </p>
        <p>
          <strong>Buy Price</strong> is your cost per coin at entry. <strong>Sell Price</strong> is the
          exit price per coin. <strong>Amount</strong> is the quantity of coins traded.{' '}
          <strong>Fees</strong> include exchange maker/taker charges on both sides of the trade—often
          0.1% per leg on major platforms, higher on DEX swaps.
        </p>
        <p>
          Example: you bought <strong>0.5 BTC at $30,000</strong> and sold at <strong>$45,000</strong>.
          Gross gain = ($45,000 − $30,000) × 0.5 = <strong>$7,500</strong>. With 0.1% fees on buy and
          sell, fees total roughly $37.50, leaving net profit of <strong>$7,462.50</strong>.
        </p>
        <p>
          Percentage gain uses a separate formula:{' '}
          <strong>(Net Profit ÷ Total Investment Cost) × 100</strong>. Here, investment cost including
          buy-side fee is $15,007.50, so ROI ≈ <strong>49.75%</strong>. That is{' '}
          <strong>how to calculate crypto profit</strong> correctly—always net of costs, not on headline
          price difference alone. Many traders overstate wins by ignoring the fee column on their exchange
          export; this calculator forces those numbers into the result.
        </p>

        <h2>Why Crypto Profit Calculation Is More Complex Than Stocks</h2>
        <p>
          Crypto markets never close. A position opened on a Sunday can gap against you before traditional
          markets open Monday. Exchanges charge layered fees—maker, taker, withdrawal, and sometimes spread
          markup—that stock brokers often fold into simpler commission structures. You might pay to deposit,
          trade, withdraw, and then pay gas to move assets on-chain—a cost stack equities rarely replicate.
        </p>
        <p>
          On-chain activity adds <strong>network gas fees</strong>, especially for Ethereum mainnet
          transfers and L2 bridges. Dollar-cost averaging across multiple buy-ins means your true entry
          price is a weighted average, not a single figure from one lucky fill. Staking rewards, airdrops,
          and liquidity pool yields count as taxable income in many countries before you ever sell the
          underlying asset.
        </p>
        <p>
          Tax rules add another layer. India applies a flat 30% on crypto gains with limited deductions.
          The US distinguishes short-term versus long-term capital gains. The UK taxes disposals above an
          annual exempt amount. Your paper profit shrinks once these obligations hit. A calculator that
          handles fees and produces clean inputs saves you from surprises when filing season arrives.
        </p>

        <h2>Key Factors That Affect Your Crypto Profit</h2>

        <h3>Entry price and timing</h3>
        <p>
          Your cost basis sets the floor for any profitable exit. Buying at a local top versus averaging
          in over weeks produces radically different outcomes on the same sell price. Timing also affects
          which tax bracket applies—an early exit can convert a winning trade into a net loss after
          short-term rates and fees.
        </p>

        <h3>Exit price and market conditions</h3>
        <p>
          Liquidity dries up during crashes; slippage on large orders can erase edge that looked certain
          on a chart. Thin altcoin order books may fill below your target. Model conservative sell prices
          rather than best-case bid snapshots, especially for positions larger than daily volume.
        </p>

        <h3>Trading fees (maker/taker)</h3>
        <p>
          High-frequency traders pay taker fees on every market order. Even 0.1% per side compounds across
          dozens of round trips monthly—a $100,000 volume trader can lose hundreds in fees alone. VIP
          tiers and limit orders reduce costs; factor your actual rate, not the headline advertised rate.
        </p>

        <h3>Network/gas fees</h3>
        <p>
          Moving assets between wallets, chains, or into DeFi protocols adds costs that centralized
          exchange statements often omit. A profitable CEX trade can turn negative after a $40 Ethereum
          withdrawal. Include them when calculating true crypto investment profit on self-custodied assets.
        </p>

        <h3>Tax obligations</h3>
        <p>
          India applies a flat <strong>30% tax on crypto gains</strong> plus TDS on certain transactions.
          The US taxes crypto as property with short-term rates up to 37% or long-term preferential rates.
          The UK uses Capital Gains Tax above the annual exempt amount. Run figures through our{' '}
          <Link href="/tools/crypto/crypto-tax-calculator">crypto tax calculator for India</Link> after
          gross profit is clear.
        </p>

        <h3>Holding period (short vs long term gains)</h3>
        <p>
          In the US, assets held over one year qualify for lower long-term capital gains rates. Short-term
          trades inherit ordinary income tax treatment. A <strong>bitcoin profit calculator</strong> shows
          gross results; your holding period determines what you keep. Use a{' '}
          <strong>crypto gains calculator</strong> like this one for the math, then layer tax rules on
          top.
        </p>

        <h2>Crypto Profit Calculator vs Manual Calculation — Why Use a Tool?</h2>
        <p>
          Manual spreadsheets break under pressure. One mistyped decimal on a volatile altcoin trade
          distorts your entire P&amp;L. A <strong>cryptocurrency profit calculator</strong> eliminates
          that friction: enter four fields, get investment cost, sale revenue, net profit, ROI, and
          multiplier in milliseconds. No formula maintenance, no version drift between devices.
        </p>
        <p>
          Speed matters when you are deciding whether to take profit during a spike. Accuracy matters when
          you are reconciling multiple DCA buys—plug your weighted average buy price once instead of
          summing rows manually. Multi-currency support lets Indian traders work in ₹ while US users stay
          in $, without rebuilding formulas each quarter.
        </p>
        <p>
          Human error spikes in complex scenarios: partial sells, fee tier changes mid-year, or switching
          between spot and futures P&amp;L. A dedicated tool standardizes the math every time. Pair results
          with our <Link href="/tools/crypto/crypto-portfolio-tracker">crypto portfolio tracker</Link> when
          you hold more than one asset, and cross-check percentage returns on the{' '}
          <Link href="/tools/crypto/crypto-roi-calculator">crypto ROI calculator</Link> for a second view
          on capital efficiency.
        </p>

        <h2>How to Use CryptoRedar&apos;s Crypto Profit Calculator</h2>
        <ol>
          {howToSteps.map((step, i) => (
            <li key={i}>
              <strong>{step.name}.</strong> {step.text}
            </li>
          ))}
        </ol>

        <h2>Real-World Crypto Profit Examples</h2>

        <h3>Example 1: Bitcoin (BTC) — short-term trade</h3>
        <p>
          Buy 0.25 BTC at $62,000 ($15,500 cost). Sell two weeks later at $68,000 ($17,000 revenue). Gross
          gain: $1,500. After 0.1% fees each side (~$32.50 total), net profit ≈{' '}
          <strong>$1,467.50</strong>, a <strong>+9.47% return</strong> on capital deployed. Short holding
          periods often face higher tax tiers in the US and full ordinary rates in India—check{' '}
          <a
            href="https://www.irs.gov/businesses/small-businesses-self-employed/digital-assets"
            target="_blank"
            rel="noopener noreferrer"
          >
            IRS crypto tax guidelines
          </a>{' '}
          before treating the full $1,467 as spendable income.
        </p>

        <h3>Example 2: Ethereum (ETH) — long-term hold</h3>
        <p>
          Buy 2 ETH at $1,800 ($3,600 total) in early 2023. Sell at $3,500 ($7,000 revenue) in 2025. Gross
          profit: $3,400. Fees at 0.1% ≈ $10.60 combined. Net profit ≈ <strong>$3,389.40</strong>, roughly{' '}
          <strong>+94.2% ROI</strong> over the hold. Longer horizons can qualify for favorable long-term
          capital gains treatment in the US and may reduce effective tax drag—see{' '}
          <a
            href="https://www.investopedia.com/terms/c/cryptocurrency-tax.aspx"
            target="_blank"
            rel="noopener noreferrer"
          >
            how crypto gains are taxed
          </a>{' '}
          for jurisdiction-specific brackets and holding-period rules.
        </p>

        <h3>Example 3: Altcoin (SOL) — volatile asset</h3>
        <p>
          Buy 50 SOL at $95 ($4,750). Price spikes to $180; you sell ($9,000 revenue). Gross gain: $4,250.
          Higher altcoin fees at 0.2% per side ≈ $27.50. Net profit ≈ <strong>$4,222.50</strong>, a{' '}
          <strong>+88.9% return</strong>. Volatile assets amplify both gains and losses—a retracement to
          $120 would have cut profit by more than half. Verify entries against{' '}
          <a href="https://coinmarketcap.com/" target="_blank" rel="noopener noreferrer">
            live crypto prices
          </a>{' '}
          before executing, and size positions so a normal pullback does not force an emotional exit.
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
