'use client';

import Link from 'next/link';
import { Header } from '@/components/Header';

const stats = [
  { num: '7+', label: 'Years in business' },
  { num: '2', label: 'Distribution warehouses' },
  { num: '9', label: 'Brands under one account' },
  { num: '24 hr', label: 'Typical quote turnaround' },
];

const trustCards = [
  {
    title: 'Warehousing & inventory',
    body: 'Warehouses across the country keep fast-moving SKUs in stock and staged for combined shipments.',
  },
  {
    title: 'Logistics & freight',
    body: 'We consolidate multi-brand orders onto single deliveries and coordinate LTL, will-call and jobsite drops.',
  },
  {
    title: 'Warranty handling',
    body: 'One team manages claims and RMAs across every manufacturer. You never chase a brand yourself.',
  },
  {
    title: 'Dedicated support',
    body: 'A named account rep who learns your projects, specs and delivery windows.',
  },
];

const values = [
  {
    title: `Say what's true`,
    body: `No spec we can't source, no claim we can't back. If we don't know, we say so.`,
  },
  {
    title: 'Spec what fits',
    body: 'Nine brands means we recommend the right product, not the only one we carry.',
  },
  {
    title: 'We build, not just resell',
    body: 'Z1Power is ours. We know these products because we make them.',
  },
  {
    title: 'Clean energy is the thread',
    body: 'We started in solar and batteries in 2019. It still runs through everything we carry.',
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="max-w-[1240px] mx-auto px-7 py-16">
          <div className="mb-2">
            <div className="text-xs font-semibold tracking-widest uppercase text-accent-primary">
              About SH Trading
            </div>
          </div>
          <h1 className="text-[clamp(28px,3.6vw,44px)] tracking-tight font-semibold mb-6">
            A distributor built to make specifying simpler.
          </h1>
          <p className="text-[17px] leading-[1.5] text-text-tertiary max-w-[720px]">
            Since 2019, contractors, facilities teams and integrators have relied on SH Trading to source lighting, power and specialty equipment from multiple manufacturers under one account, with the pricing leverage and logistics of a single, coordinated order.
          </p>
        </section>

        {/* Stats Section */}
        <section className="max-w-[1240px] mx-auto px-7 py-16">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-0.5 bg-border-light rounded-[20px] overflow-hidden">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-white px-6.5 py-8 text-center"
              >
                <div className="text-[clamp(30px,3.4vw,42px)] font-semibold tracking-tight text-accent-primary">
                  {stat.num}
                </div>
                <div className="text-sm text-text-tertiary mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Trust Cards Section */}
        <section className="max-w-[1240px] mx-auto px-7 py-16">
          <div className="grid grid-cols-2 gap-6">
            {trustCards.map((card, i) => (
              <div
                key={i}
                className="border border-border-light rounded-[20px] px-7 py-10"
              >
                <h3 className="text-[19px] font-semibold mb-2.5 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-base leading-[1.55] text-text-tertiary">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Values Section */}
        <section className="max-w-[1240px] mx-auto px-7 py-16 pb-[90px]">
          <div className="mb-6">
            <div className="text-xs font-semibold tracking-widest uppercase text-accent-primary mb-2">
              Our Values
            </div>
            <h2 className="text-[clamp(28px,3.6vw,44px)] tracking-tight font-semibold mb-6">
              What we stand for
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-6 mb-12">
            {values.map((value, i) => (
              <div
                key={i}
                className="border border-border-light rounded-[20px] px-7 py-10"
              >
                <h3 className="text-[19px] font-semibold mb-2.5 tracking-tight">
                  {value.title}
                </h3>
                <p className="text-base leading-[1.55] text-text-tertiary">
                  {value.body}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="/contact"
              className="inline-block bg-accent-primary text-white px-5 py-3 rounded-full text-base font-medium hover:bg-accent-hover transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
