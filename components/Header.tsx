'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { BRANDS, CATEGORIES } from '@/lib/data';

const getCategorySlug = (categoryName: string): string => {
  return categoryName.toLowerCase().replace(/&/g, 'and').replace(/\s+/g, '-');
};

const getBrandSlug = (brandName: string): string => {
  return brandName.toLowerCase().replace(/&/g, 'and').replace(/\s+/g, '-');
};

interface HeaderProps {
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  onSearchEnter?: () => void;
}

export function Header({ searchValue = '', onSearchChange, onSearchEnter }: HeaderProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<{ products: boolean; brands: boolean }>({
    products: false,
    brands: false,
  });
  const [desktopDropdown, setDesktopDropdown] = useState<'products' | 'brands' | null>(null);

  const handleSearch = () => {
    if (searchValue.trim()) {
      router.push(`/catalog?q=${encodeURIComponent(searchValue)}`);
      setMobileMenuOpen(false);
    }
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
      onSearchEnter?.();
    }
  };

  return (
    <>
      {/* Desktop Nav */}
      <header className="hidden md:block sticky top-0 z-50 bg-white border-b border-border-light">
        <div className="max-w-[1240px] mx-auto px-[22px] h-[66px] flex items-center gap-[14px]">
          {/* Logo */}
          <Link href="/" className="flex items-center cursor-pointer flex-shrink-0">
            <img src="/logo.svg" alt="SH Trading" height={28} width={120} style={{ maxHeight: '28px' }} />
          </Link>

          {/* Search */}
          <div className="relative flex-1 flex-shrink-0 min-w-0 max-w-[230px]">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 flex text-text-muted">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.5-3.5" />
              </svg>
            </span>
            <input
              type="text"
              value={searchValue}
              onChange={(e) => onSearchChange?.(e.target.value)}
              onKeyDown={handleSearchKeyDown}
              placeholder="Search products"
              className="w-full h-[38px] border border-border-lighter2 bg-surface-fill rounded-full px-9 text-sm text-text-primary outline-none"
            />
          </div>

          {/* Nav Links */}
          <nav className="flex items-center gap-0.5 ml-auto flex-shrink-0">
            <Link href="/" className={pathname === '/' ? 'px-3 py-2 text-sm rounded-lg font-medium transition-colors text-accent-primary' : 'px-3 py-2 text-sm rounded-lg font-medium transition-colors text-black hover:text-accent-hover2'}>
              Home
            </Link>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDesktopDropdown('products')}
              onMouseLeave={() => setDesktopDropdown(null)}
            >
              <Link href="/catalog" className={pathname === '/catalog' || pathname.startsWith('/category/') ? 'px-3 py-2 text-sm rounded-lg font-medium transition-colors text-accent-primary inline-block' : 'px-3 py-2 text-sm rounded-lg font-medium transition-colors text-black hover:text-accent-hover2 inline-block'}>
                Products
              </Link>
              {desktopDropdown === 'products' && (
                <div className="absolute top-full left-0 bg-white border border-border-light rounded-lg shadow-dropdown p-2 min-w-[200px] z-50 pt-3">
                  {CATEGORIES.map((cat) => (
                    <Link
                      key={cat.name}
                      href={`/category/${getCategorySlug(cat.name)}`}
                      className="block px-3 py-2.5 text-sm text-text-secondary hover:text-accent-primary hover:bg-surface-fill rounded-md transition-colors"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Brands Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDesktopDropdown('brands')}
              onMouseLeave={() => setDesktopDropdown(null)}
            >
              <Link href="/brands" className={pathname === '/brands' || pathname.startsWith('/brands/') ? 'px-3 py-2 text-sm rounded-lg font-medium transition-colors text-accent-primary inline-block' : 'px-3 py-2 text-sm rounded-lg font-medium transition-colors text-black hover:text-accent-hover2 inline-block'}>
                Brands
              </Link>
              {desktopDropdown === 'brands' && (
                <div className="absolute top-full left-0 bg-white border border-border-light rounded-lg shadow-dropdown p-2 min-w-[200px] z-50 pt-3">
                  {BRANDS.map((brand) => (
                    <Link
                      key={brand}
                      href={`/brands/${getBrandSlug(brand)}`}
                      className="block px-3 py-2.5 text-sm text-text-secondary hover:text-accent-primary hover:bg-surface-fill rounded-md transition-colors"
                    >
                      {brand}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about" className={pathname === '/about' ? 'px-3 py-2 text-sm rounded-lg font-medium transition-colors text-accent-primary' : 'px-3 py-2 text-sm rounded-lg font-medium transition-colors text-black hover:text-accent-hover2'}>
              About Us
            </Link>
            <Link href="/contact" className={pathname === '/contact' ? 'px-3 py-2 text-sm rounded-lg font-medium transition-colors text-accent-primary' : 'px-3 py-2 text-sm rounded-lg font-medium transition-colors text-black hover:text-accent-hover2'}>
              Contact Us
            </Link>
          </nav>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="flex-shrink-0 bg-accent-primary text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-accent-hover hover:text-white transition-colors"
          >
            Request a Quote
          </Link>
        </div>
      </header>

      {/* Mobile Nav */}
      <header className="md:hidden sticky top-0 z-50 bg-white border-b border-border-light">
        <div className="px-[18px] h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center cursor-pointer">
            <img src="/logo.svg" alt="SH Trading" height={24} width={100} style={{ maxHeight: '24px' }} />
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="bg-none border-none cursor-pointer p-2 flex"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1d1d1f" strokeWidth="1.8">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 transition-opacity"
          style={{ opacity: mobileMenuOpen ? 1 : 0, pointerEvents: mobileMenuOpen ? 'auto' : 'none' }}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className="md:hidden fixed top-0 right-0 bottom-0 w-[82%] max-w-[340px] bg-white z-40 shadow-mobile-panel transition-transform overflow-y-auto"
        style={{
          transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          transitionDuration: '0.32s',
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <div className="flex items-center justify-between p-4 border-b border-border-lighter2">
          <span className="text-base font-semibold">Menu</span>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="bg-none border-none cursor-pointer p-1.5 flex"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1d1d1f" strokeWidth="1.8">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <div className="px-4.5 py-7">
          {/* Search */}
          <div className="relative mb-3">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 flex">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#86868b" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.5-3.5" />
              </svg>
            </span>
            <input
              type="text"
              value={searchValue}
              onChange={(e) => onSearchChange?.(e.target.value)}
              onKeyDown={handleSearchKeyDown}
              placeholder="Search products"
              className="w-full h-11 border border-border-lighter2 bg-surface-fill rounded-3xl px-9 text-sm outline-none"
            />
          </div>

          {/* Home */}
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-left bg-none border-none p-3.5 text-lg font-medium text-text-primary cursor-pointer border-b border-surface-fill"
          >
            Home
          </Link>

          {/* Products Accordion */}
          <button
            onClick={() =>
              setMobileAccordion({ ...mobileAccordion, products: !mobileAccordion.products })
            }
            className="w-full flex items-center justify-between bg-none border-none p-3.5 text-lg font-medium text-text-primary cursor-pointer border-b border-surface-fill"
          >
            Products
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#86868b"
              strokeWidth="2.2"
              style={{
                transform: mobileAccordion.products ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.2s',
              }}
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
          {mobileAccordion.products && (
            <div className="flex flex-col px-2 py-2.5">
              {CATEGORIES.map((cat) => (
                <Link
                  key={cat.name}
                  href={`/category/${cat.name.toLowerCase().replace(/&/g, 'and').replace(/\s+/g, '-')}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-left bg-none border-none p-3 text-sm text-text-secondary cursor-pointer"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          )}

          {/* Brands Accordion */}
          <button
            onClick={() =>
              setMobileAccordion({ ...mobileAccordion, brands: !mobileAccordion.brands })
            }
            className="w-full flex items-center justify-between bg-none border-none p-3.5 text-lg font-medium text-text-primary cursor-pointer border-b border-surface-fill"
          >
            Brands
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#86868b"
              strokeWidth="2.2"
              style={{
                transform: mobileAccordion.brands ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.2s',
              }}
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
          {mobileAccordion.brands && (
            <div className="flex flex-col px-2 py-2.5">
              {BRANDS.map((brand) => (
                <Link
                  key={brand}
                  href={`/brands/${getBrandSlug(brand)}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-left bg-none border-none p-3 text-sm text-text-secondary cursor-pointer"
                >
                  {brand}
                </Link>
              ))}
            </div>
          )}

          {/* About */}
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-left bg-none border-none p-3.5 text-lg font-medium text-text-primary cursor-pointer border-b border-surface-fill"
          >
            About Us
          </Link>

          {/* Contact */}
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-left bg-none border-none p-3.5 text-lg font-medium text-text-primary cursor-pointer border-b border-surface-fill"
          >
            Contact Us
          </Link>

          {/* CTA */}
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4.5 block w-full bg-accent-primary text-white px-3.75 py-4 rounded-3xl text-base font-medium text-center"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </>
  );
}
