'use client';

import Link from 'next/link';
import { BRANDS, CATEGORIES } from '@/lib/data';

export function Footer() {
  return (
    <footer className="bg-surface-fill border-t border-border-light">
      <div className="max-w-[1240px] mx-auto px-7 py-16 grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
        {/* Brand Column */}
        <div className="min-w-[220px]">
          <div className="flex items-center gap-2.25 mb-4">
            <img src="/logo.svg" alt="SH Trading" height={22} width={90} />
          </div>
          <p className="text-sm leading-[1.55] text-text-tertiary mb-6 max-w-[280px]">
            Since 2019, contractors, facilities teams and integrators have relied on SH Trading to source lighting, power and specialty equipment from multiple manufacturers under one account.
          </p>

          <div className="grid gap-3.5 mb-6 text-xs">
            <div>
              <div className="text-text-muted uppercase tracking-widest font-semibold mb-1.5">Address</div>
              <div className="text-text-secondary">1518 Paloma Street<br />Los Angeles, CA 90021</div>
            </div>
            <div>
              <div className="text-text-muted uppercase tracking-widest font-semibold mb-1.5">Contact</div>
              <div className="text-text-secondary">(949) 386-9749<br />syed@shtllc.org</div>
            </div>
          </div>

          <div className="flex gap-2.5">
            <a
              href="https://www.facebook.com/shtradingllc?ref=1"
              className="w-9 h-9 rounded-full bg-white border border-border-lighter2 flex items-center justify-center hover:border-accent-primary transition-colors"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="#4a4a4f">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/sh-trading-llc/about/"
              className="w-9 h-9 rounded-full bg-white border border-border-lighter2 flex items-center justify-center hover:border-accent-primary transition-colors"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="#4a4a4f">
                <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.75-1.95C20.4 8.75 21 11 21 14.1V21h-4v-6c0-1.43-.03-3.27-2-3.27-2 0-2.3 1.56-2.3 3.17V21H9z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Brands Column */}
        <div className="hidden md:block">
          <div className="text-xs font-semibold tracking-widest uppercase text-text-muted mb-4">
            Brands
          </div>
          <div className="grid gap-3">
            {BRANDS.map((brand) => (
              <Link
                key={brand}
                href={`/brands/${brand.toLowerCase().replace(/&/g, 'and').replace(/\s+/g, '-')}`}
                className="text-sm text-text-secondary hover:text-accent-primary transition-colors"
              >
                {brand}
              </Link>
            ))}
          </div>
        </div>

        {/* Products Column */}
        <div className="hidden md:block">
          <div className="text-xs font-semibold tracking-widest uppercase text-text-muted mb-4">
            Products
          </div>
          <div className="grid gap-3">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.name}
                href={`/category/${cat.name.toLowerCase().replace(/&/g, 'and').replace(/\s+/g, '-')}`}
                className="text-sm text-text-secondary hover:text-accent-primary transition-colors"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Company Column */}
        <div className="hidden md:block">
          <div className="text-xs font-semibold tracking-widest uppercase text-text-muted mb-4">
            Company
          </div>
          <div className="grid gap-3">
            <Link href="/about" className="text-sm text-text-secondary hover:text-accent-primary transition-colors">
              About Us
            </Link>
            <Link href="/catalog" className="text-sm text-text-secondary hover:text-accent-primary transition-colors">
              Product Catalog
            </Link>
            <Link href="/contact" className="text-sm text-text-secondary hover:text-accent-primary transition-colors">
              Contact Us
            </Link>
            <Link href="/contact" className="text-sm text-text-secondary hover:text-accent-primary transition-colors">
              Request a Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1240px] mx-auto px-7 py-5.5 border-t border-border-lighter2 flex flex-wrap gap-3 justify-between text-xs text-text-muted">
        <span>© 2026 SH Trading, LLC. Los Angeles, California.</span>
      </div>
    </footer>
  );
}
