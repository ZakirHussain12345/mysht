'use client';

import { useState, useMemo, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Header } from '@/components/Header';
import { ProductCard } from '@/components/ProductCard';
import { BRANDS, CATEGORIES, PRODUCTS, filterProducts } from '@/lib/data';

const ITEMS_PER_PAGE = 24;

function CatalogContent() {
  const searchParams = useSearchParams();
  const initialSearch = searchParams.get('q') || '';
  const initialBrand = searchParams.get('brand') || '';

  const [search, setSearch] = useState(initialSearch);
  const [selectedSubs, setSelectedSubs] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>(
    initialBrand ? [initialBrand] : []
  );
  const [visible, setVisible] = useState(ITEMS_PER_PAGE);

  // Update selectedBrands when URL search params change
  useEffect(() => {
    const brand = searchParams.get('brand') || '';
    setSelectedBrands(brand ? [brand] : []);
  }, [searchParams]);

  const allSubs = useMemo(() => {
    const subs: string[] = [];
    CATEGORIES.forEach((cat) => {
      cat.subs.forEach((sub) => {
        if (!subs.includes(sub)) subs.push(sub);
      });
    });
    return subs;
  }, []);

  const filtered = useMemo(() => {
    return filterProducts(PRODUCTS, search, selectedSubs, selectedBrands);
  }, [search, selectedSubs, selectedBrands]);

  const displayed = filtered.slice(0, visible);
  const hasMore = filtered.length > visible;
  const hasFilters = search || selectedSubs.length > 0 || selectedBrands.length > 0;

  const toggleFilter = (type: 'subs' | 'brands', value: string) => {
    if (type === 'subs') {
      setSelectedSubs((prev) =>
        prev.includes(value) ? prev.filter((x) => x !== value) : [...prev, value]
      );
    } else {
      setSelectedBrands((prev) =>
        prev.includes(value) ? prev.filter((x) => x !== value) : [...prev, value]
      );
    }
    setVisible(ITEMS_PER_PAGE);
  };

  const clearFilters = () => {
    setSearch('');
    setSelectedSubs([]);
    setSelectedBrands([]);
    setVisible(ITEMS_PER_PAGE);
  };

  const chipStyle = (isSelected: boolean) =>
    `px-4 py-2.25 rounded-full text-sm font-medium cursor-pointer transition-all border ${
      isSelected
        ? 'bg-accent-primary text-white border-accent-primary hover:bg-accent-hover'
        : 'bg-white text-text-primary border-border-lighter3 hover:border-accent-primary hover:text-accent-primary'
    }`;

  return (
    <>
      <Header searchValue={search} onSearchChange={setSearch} />

      <main className="max-w-[1240px] mx-auto px-7 py-[clamp(36px,5vw,60px)] pb-[90px]">
        <div className="mb-2">
          <div className="text-xs font-semibold tracking-widest uppercase text-accent-primary">
            Catalog
          </div>
        </div>
        <h1 className="text-[clamp(28px,3.6vw,44px)] tracking-tight font-semibold mb-7">
          All Products
        </h1>

        {/* Search */}
        <div className="relative mb-5.5">
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
              setVisible(ITEMS_PER_PAGE);
            }}
            placeholder="Search by product, brand or category"
            className="w-full h-[52px] border border-border-lighter2 bg-surface-fill rounded-full px-12 text-base text-text-primary outline-none"
          />
        </div>

        {/* Filters */}
        <div className="mb-8">
          <div className="text-xs font-semibold tracking-wider uppercase text-text-muted mb-2.5">
            Sub-category
          </div>
          <div className="flex flex-wrap gap-2">
            {allSubs.map((sub) => (
              <button
                key={sub}
                onClick={() => toggleFilter('subs', sub)}
                className={chipStyle(selectedSubs.includes(sub))}
              >
                {sub}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6.5">
          <div className="text-xs font-semibold tracking-wider uppercase text-text-muted mb-2.5">
            Brand
          </div>
          <div className="flex flex-wrap gap-2">
            {BRANDS.map((brand) => (
              <button
                key={brand}
                onClick={() => toggleFilter('brands', brand)}
                className={chipStyle(selectedBrands.includes(brand))}
              >
                {brand}
              </button>
            ))}
          </div>
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-5 pt-5">
          <div className="text-sm text-text-tertiary">{filtered.length} products</div>
          {hasFilters && (
            <button
              onClick={clearFilters}
              className="bg-none border-none text-accent-primary text-sm font-medium cursor-pointer hover:underline"
            >
              Clear all filters
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
              Try removing a filter or broadening your search.
            </div>
            <button
              onClick={clearFilters}
              className="bg-accent-primary text-white border-none px-6 py-3 rounded-full text-base font-medium cursor-pointer hover:bg-accent-hover"
            >
              Clear all filters
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
                  onClick={() => setVisible((v) => v + ITEMS_PER_PAGE)}
                  className="bg-white border border-border-light text-text-primary px-12 py-3.5 rounded-full text-base font-medium cursor-pointer hover:bg-surface-fill transition-colors"
                >
                  Load more
                </button>
              </div>
            )}
          </>
        )}
      </main>
    </>
  );
}

export default function CatalogPage() {
  return (
    <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
      <CatalogContent />
    </Suspense>
  );
}
