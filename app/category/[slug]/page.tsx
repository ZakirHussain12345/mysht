'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Header } from '@/components/Header';
import { ProductCard } from '@/components/ProductCard';
import { CATEGORIES, PRODUCTS, filterProducts, groupProductsBySub, getCategoryDescription } from '@/lib/data';
import { useParams } from 'next/navigation';

const ITEMS_PER_PAGE = 200;

export default function CategoryPage() {
  const params = useParams();
  const slug = params.slug as string;
  const searchParams = useSearchParams();
  const initialBrand = searchParams.get('brand') || '';

  const [search, setSearch] = useState('');
  const [selectedSubs, setSelectedSubs] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>(
    initialBrand ? [initialBrand] : []
  );
  const [visible, setVisible] = useState(ITEMS_PER_PAGE);

  // Decode category name from slug
  const categoryName = CATEGORIES.find(
    (c) => c.name.toLowerCase().replace(/&/g, 'and').replace(/\s+/g, '-') === slug
  )?.name;

  const category = categoryName ? CATEGORIES.find((c) => c.name === categoryName) : null;
  const categoryProducts = categoryName ? PRODUCTS.filter((p) => p.category === categoryName) : [];

  const brandsInCategory = useMemo(() => {
    return Array.from(new Set(categoryProducts.map((p) => p.brand))).sort();
  }, [categoryProducts]);

  const hasFilters = search || selectedSubs.length > 0 || selectedBrands.length > 0;

  const filtered = useMemo(() => {
    return categoryName ? filterProducts(categoryProducts, search, selectedSubs, selectedBrands, categoryName) : [];
  }, [search, selectedSubs, selectedBrands, categoryProducts, categoryName]);

  const grouped = useMemo(() => {
    return categoryName ? groupProductsBySub(categoryProducts, categoryName) : [];
  }, [categoryProducts, categoryName]);

  if (!categoryName || !category) {
    return (
      <>
        <Header />
        <main className="max-w-[1240px] mx-auto px-7 py-20 text-center">
          <h1 className="text-2xl font-semibold">Category not found</h1>
        </main>
      </>
    );
  }

  const displayed = filtered.slice(0, visible);

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

      <main className="max-w-[1240px] mx-auto px-7 py-16 pb-[90px]">
        <div className="mb-2">
          <div className="text-xs font-semibold tracking-widest uppercase text-accent-primary">
            Category
          </div>
        </div>
        <h1 className="text-[clamp(28px,3.8vw,46px)] tracking-tight font-semibold mb-6">
          {categoryName}
        </h1>
        <p className="text-[17px] text-text-tertiary mb-7.5 max-w-[640px]">
          {getCategoryDescription(categoryName)}
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
              setVisible(ITEMS_PER_PAGE);
            }}
            placeholder={`Search within ${categoryName}`}
            className="w-full h-[52px] border border-border-lighter2 bg-surface-fill rounded-full px-12 text-base text-text-primary outline-none"
          />
        </div>

        {/* Filters */}
        <div className="mb-8">
          <div className="text-xs font-semibold tracking-wider uppercase text-text-muted mb-2.5">
            Sub-category
          </div>
          <div className="flex flex-wrap gap-2">
            {category.subs.map((sub) => (
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
            {brandsInCategory.map((brand) => (
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

        {/* Clear Filters */}
        <div className="flex items-center justify-end mb-2 min-h-5">
          {hasFilters && (
            <button
              onClick={clearFilters}
              className="bg-none border-none text-accent-primary text-sm font-medium cursor-pointer hover:underline"
            >
              Clear all filters
            </button>
          )}
        </div>

        {/* Grouped View (no filters) */}
        {!hasFilters && (
          <>
            {grouped.map((group) => (
              <div key={group.sub} className="mt-11">
                <div className="flex items-baseline gap-3 border-b border-border-lighter2 pb-3.5 mb-6">
                  <h2 className="text-[22px] font-semibold tracking-tight">{group.sub}</h2>
                  <span className="text-sm text-text-muted">{group.count}</span>
                </div>
                <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6">
                  {group.items.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            ))}
          </>
        )}

        {/* Filtered View */}
        {hasFilters && (
          <>
            {filtered.length === 0 ? (
              <div className="text-center px-6 py-20 border border-border-lighter2 rounded-[20px] bg-surface-soft mt-5">
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
              <div className="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-6 mt-5">
                {displayed.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </>
        )}

        {/* View All Products Button */}
        <div className="text-center mt-11">
          <Link
            href="/catalog"
            className="bg-white border border-border-light text-text-primary px-5 py-2.5 rounded-full text-base font-medium hover:bg-surface-fill transition-colors inline-block"
          >
            View all products
          </Link>
        </div>
      </main>
    </>
  );
}
