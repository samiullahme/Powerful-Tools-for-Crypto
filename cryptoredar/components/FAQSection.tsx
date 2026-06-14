'use client';
import { useState } from 'react';
import { FAQ } from '@/lib/tools-registry';
import { toolSurfaceCard } from '@/lib/ui-classes';

interface FAQSectionProps {
  faqs: FAQ[];
  toolName: string;
}

export default function FAQSection({ faqs, toolName }: FAQSectionProps) {
  const [open, setOpen] = useState<number | null>(0);

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <section
      className={toolSurfaceCard}
      aria-label={`FAQ for ${toolName}`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <span className="text-[11px] font-bold text-[#FF9500] uppercase tracking-[0.14em] block mb-2">FAQ</span>
      <h2 className="text-xl md:text-2xl font-bold text-[#0F172A] tracking-[-0.025em] mb-7">
        Frequently Asked Questions
      </h2>

      <div className="flex flex-col gap-2" role="list">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className={`border rounded-xl overflow-hidden transition-colors duration-200 ${open === i ? 'border-[#FF9500]/20 bg-white/55' : 'border-white/80 bg-white/35'
              }`}
            role="listitem"
          >
            <button
              className="flex items-center justify-between w-full px-5 py-4 text-left text-sm font-semibold text-[#0F172A] hover:bg-[#FF9500]/5 transition-colors duration-200"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
              id={`faq-q-${i}`}
              aria-controls={`faq-a-${i}`}
            >
              {faq.question}
              <span
                aria-hidden="true"
                className={`text-slate-400 text-xs transition-transform duration-200 shrink-0 ml-4 ${open === i ? 'rotate-180' : ''
                  }`}
              >
                ▼
              </span>
            </button>

            {/* Animated answer panel */}
            <div
              id={`faq-a-${i}`}
              role="region"
              aria-labelledby={`faq-q-${i}`}
              className={`overflow-hidden transition-all duration-300 ${open === i ? 'max-h-[400px]' : 'max-h-0'
                }`}
            >
              <div className="px-5 pb-5 text-sm text-slate-500 leading-6">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
