'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Header } from '@/components/Header';
import { ProductCard } from '@/components/ProductCard';
import { BRANDS, PRODUCTS, filterProducts } from '@/lib/data';

export default function BrandPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [search, setSearch] = useState('');
  const [selectedSubs, setSelectedSubs] = useState<string[]>([]);
  const [visible, setVisible] = useState(24);

  // Decode brand name from slug
  const brandName = BRANDS.find(
    (b) => b.toLowerCase().replace(/&/g, 'and').replace(/\s+/g, '-') === slug
  );

  const brandProducts = brandName ? PRODUCTS.filter((p) => p.brand === brandName) : [];

  const allSubs = useMemo(() => {
    const subs = new Set<string>();
    brandProducts.forEach((p) => subs.add(p.sub));
    return Array.from(subs).sort();
  }, [brandProducts]);

  const filtered = useMemo(() => {
    return filterProducts(
      brandProducts,
      search,
      selectedSubs,
      [],
      undefined
    );
  }, [search, selectedSubs, brandProducts]);

  const displayed = filtered.slice(0, visible);
  const hasMore = filtered.length > visible;
  const hasFilters = search || selectedSubs.length > 0;

  const toggleFilter = (value: string) => {
    setSelectedSubs((prev) =>
      prev.includes(value) ? prev.filter((x) => x !== value) : [...prev, value]
    );
    setVisible(24);
  };

  const clearFilters = () => {
    setSearch('');
    setSelectedSubs([]);
    setVisible(24);
  };

  const chipStyle = (isSelected: boolean) =>
    `px-4 py-2.25 rounded-full text-sm font-medium cursor-pointer transition-all border ${
      isSelected
        ? 'bg-accent-primary text-white border-accent-primary hover:bg-accent-hover'
        : 'bg-white text-text-primary border-border-lighter3 hover:border-accent-primary hover:text-accent-primary'
    }`;

  if (!brandName) {
    return (
      <>
        <Header />
        <main className="max-w-[1240px] mx-auto px-7 py-20 text-center">
          <h1 className="text-2xl font-semibold">Brand not found</h1>
        </main>
      </>
    );
  }

  return (
    <>
      <Header searchValue={search} onSearchChange={setSearch} />

      <main className="max-w-[1240px] mx-auto px-7 py-[clamp(36px,5vw,60px)] pb-[90px]">
        <div className="mb-2">
          <Link
            href="/brands"
            className="text-xs font-semibold tracking-widest uppercase text-accent-primary hover:underline"
          >
            ← Back to Brands
          </Link>
        </div>
        <h1 className="text-[clamp(28px,3.8vw,46px)] tracking-tight font-semibold mb-5">
          {brandName}
        </h1>
        <p className="text-[17px] text-text-tertiary mb-7.5 max-w-[640px]">
          Browse all {brandProducts.length} products from {brandName}. We stock their complete line and provide
          consolidated pricing and shipping.
        </p>

        {/* Search */}
        <div className="relative mb-8 mt-8">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 flex">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#86868b" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-3.5-3.5" />
            </svg>
          </span>
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setVisible(24);
            }}
            placeholder={`Search ${brandName} products`}
            className="w-full h-[52px] border border-border-lighter2 bg-surface-fill rounded-full px-12 text-base text-text-primary outline-none"
          />
        </div>

        {/* Filters */}
        {allSubs.length > 0 && (
          <div className="mb-6.5">
            <div className="text-xs font-semibold tracking-wider uppercase text-text-muted mb-2.5">
              Category
            </div>
            <div className="flex flex-wrap gap-2">
              {allSubs.map((sub) => (
                <button
                  key={sub}
                  onClick={() => toggleFilter(sub)}
                  className={chipStyle(selectedSubs.includes(sub))}
                >
                  {sub}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results Header */}
        <div className="flex items-center justify-between mb-5 pt-5">
          <div className="text-sm text-text-tertiary">{filtered.length} products</div>
          {hasFilters && (
            <button
              onClick={clearFilters}
              className="bg-none border-none text-accent-primary text-sm font-medium cursor-pointer hover:underline"
            >
              Clear filters
            </button>
          )}
        </div>

        {/* Empty State */}
        {filtered.length === 0 ? (
          <div className="text-center px-6 py-20 border border-border-lighter2 rounded-[20px] bg-surface-soft">
            <div className="w-14 h-14 rounded-full bg-surface-fill flex items-center justify-center mx-auto mb-5">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#86868b" strokeWidth="1.8">
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.5-3.5" />
              </svg>
            </div>
            <div className="text-[20px] font-semibold mb-2">No products match these filters</div>
            <div className="text-base text-text-tertiary mb-6">
              Try clearing your search or filters.
            </div>
            <button
              onClick={clearFilters}
              className="bg-accent-primary text-white border-none px-6 py-3 rounded-full text-base font-medium cursor-pointer hover:bg-accent-hover"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <>
            {/* Product Grid */}
            <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-7">
              {displayed.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Load More */}
            {hasMore && (
              <div className="text-center mt-11">
                <button
                  onClick={() => setVisible((v) => v + 24)}
                  className="bg-white border border-border-light text-text-primary px-12 py-3.5 rounded-full text-base font-medium cursor-pointer hover:bg-surface-fill transition-colors"
                >
                  Load more
                </button>
              </div>
            )}
          </>
        )}

        {/* Back to Brands */}
        <div className="text-center mt-12">
          <Link
            href="/brands"
            className="text-accent-primary font-medium hover:underline inline-flex items-center gap-2"
          >
            ← Back to all brands
          </Link>
        </div>
      </main>
    </>
  );
}
