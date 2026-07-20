'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { BRANDS, PRODUCTS } from '@/lib/data';

const getBrandLogoPath = (brandName: string): string => {
  const slug = brandName.toLowerCase().replace(/&/g, 'and').replace(/\s+/g, '-');
  // Big Chief logo is PNG, others are SVG
  return brandName === 'Big Chief Solar & Battery'
    ? `/logos/${slug}.png`
    : `/logos/${slug}.svg`;
};

export default function BrandsPage() {
  const [hoveredBrand, setHoveredBrand] = useState<string | null>(null);

  // Get product count per brand
  const brandCounts = BRANDS.map((brand) => ({
    name: brand,
    count: PRODUCTS.filter((p) => p.brand === brand).length,
  }));

  return (
    <>
      <Header />

      <main className="max-w-[1240px] mx-auto px-7 py-16 pb-[90px]">
        <div className="mb-2">
          <div className="text-xs font-semibold tracking-widest uppercase text-accent-primary">
            Our Brands
          </div>
        </div>
        <h1 className="text-[clamp(28px,3.6vw,44px)] tracking-tight font-semibold mb-6">
          All Brands
        </h1>
        <p className="text-[17px] text-text-tertiary mb-12 max-w-[640px]">
          We partner with eight trusted manufacturers across lighting, power, solar, security, and medical equipment.
          Click any brand to see their products.
        </p>

        {/* Brands Grid */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
          {brandCounts.map((brand) => (
            <Link
              key={brand.name}
              href={`/brands/${brand.name.toLowerCase().replace(/&/g, 'and').replace(/\s+/g, '-')}`}
              className="block"
            >
              <div
                className="border border-border-light rounded-[20px] px-8 py-10 text-center transition-all duration-200 hover:shadow-card-hover hover:-translate-y-0.75 cursor-pointer h-full flex flex-col items-center justify-center overflow-hidden"
                onMouseEnter={() => setHoveredBrand(brand.name)}
                onMouseLeave={() => setHoveredBrand(null)}
              >
                {/* Logo - shown by default, hidden on hover */}
                <div
                  className={`transition-opacity duration-200 ${
                    hoveredBrand === brand.name ? 'opacity-0' : 'opacity-100'
                  }`}
                >
                  <img
                    src={getBrandLogoPath(brand.name)}
                    alt={brand.name}
                    className="h-[140px] w-[140px] object-contain"
                  />
                </div>

                {/* Info - hidden by default, shown on hover */}
                <div
                  className={`transition-opacity duration-200 absolute text-center ${
                    hoveredBrand === brand.name ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="text-4xl font-bold text-accent-primary mb-3">
                    {brand.count}
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">
                    {brand.name}
                  </h3>
                  <p className="text-sm text-text-muted">
                    {brand.count === 1 ? 'product' : 'products'}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-16 pt-16 border-t border-border-lighter2">
          <h2 className="text-[clamp(24px,3vw,32px)] font-semibold mb-4 text-text-primary">
            Why We Partner with These Brands
          </h2>
          <p className="text-[17px] text-text-tertiary leading-[1.6] max-w-[720px]">
            Each brand we carry was selected for quality, reliability, and alignment with our values.
            By consolidating these brands into a single purchasing relationship, you get better pricing,
            faster delivery, and a single point of contact for all your needs.
          </p>
        </div>
      </main>
    </>
  );
}
