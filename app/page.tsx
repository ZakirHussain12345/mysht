'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { BRANDS } from '@/lib/data';

const slides = [
  {
    title: '15 kWh, 15-year warranty.',
    subtitle: 'Grade-A LFP. 6,000+ cycles. Expandable to 16 units.',
    eyebrow: 'Z1Power',
    bg: '#1d1d1f',
    imageMobile: '/slider-images/slide-1-mobile.jpg',
    imageTablet: '/slider-images/slide-1-tablet.jpg',
    imageDesktop: '/slider-images/slide-1-desktop.jpg',
    buttons: [
      { text: 'Shop Z1Power', href: '/catalog?brand=Z1Power', primary: true },
    ],
  },
  {
    title: 'Eyes on site.',
    subtitle: 'Dual-panel solar, telescopic mast, your cameras. A kit, built to your brand.',
    eyebrow: 'Z1Power',
    bg: '#1a2537',
    imageMobile: '/slider-images/slide-2-mobile.jpg',
    imageTablet: '/slider-images/slide-2-tablet.jpg',
    imageDesktop: '/slider-images/slide-2-desktop.jpg',
    buttons: [
      { text: 'Shop trailers', href: '/category/security-sign-trailers', primary: true },
    ],
  },
  {
    title: 'Plug in. Get back to work.',
    subtitle: 'Commercial AC charging. No manual, no training.',
    eyebrow: 'EV Bolt',
    bg: '#26262b',
    imageMobile: '/slider-images/slide-3-mobile.jpg',
    imageTablet: '/slider-images/slide-3-tablet.jpg',
    imageDesktop: '/slider-images/slide-3-desktop.jpg',
    buttons: [
      { text: 'Shop EV Bolt', href: '/catalog?brand=EV%20Bolt', primary: true },
    ],
  },
];

const valueProps = [
  {
    title: `Bulk-tier pricing`,
    body: `Combined volume across brands unlocks pricing you won't hit ordering direct.`,
  },
  {
    title: `One shipment`,
    body: `We consolidate freight so your dock receives a single, coordinated delivery.`,
  },
  {
    title: `Consolidated billing`,
    body: `One invoice covering every brand on the order.`,
  },
  {
    title: `One point of contact`,
    body: `A dedicated rep who knows your specs, projects and delivery windows.`,
  },
];

const getBrandLogoPath = (brandName: string): string => {
  const slug = brandName.toLowerCase().replace(/&/g, 'and').replace(/\s+/g, '-');
  // Big Chief logo is PNG, others are SVG
  return brandName === 'Big Chief Solar & Battery'
    ? `/logos/${slug}.png`
    : `/logos/${slug}.svg`;
};

export default function Home() {
  const [slide, setSlide] = useState(0);
  const [searchValue, setSearchValue] = useState('');
  const [isMounted, setIsMounted] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleResize = () => {
      setIsTablet(window.innerWidth >= 768);
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getSlideImage = (s: typeof slides[0]) => {
    if (!isMounted) return s.imageDesktop;
    if (isDesktop) return s.imageDesktop;
    if (isTablet) return s.imageTablet;
    return s.imageMobile;
  };

  const nextSlide = () => setSlide((slide + 1) % slides.length);
  const prevSlide = () => setSlide((slide + slides.length - 1) % slides.length);

  // Auto-rotate slides every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header searchValue={searchValue} onSearchChange={setSearchValue} />

      <main>
        {/* Hero Slider */}
        <section className="relative overflow-hidden bg-dark-primary">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{
              transform: `translateX(-${slide * 100}%)`,
            }}
          >
            {slides.map((s, idx) => (
              <div
                key={idx}
                className="flex-[0_0_100%] h-[clamp(480px,68vh,660px)] relative bg-dark-primary flex items-center bg-cover bg-center"
                style={{
                  backgroundColor: s.bg,
                  backgroundImage: `url('${getSlideImage(s)}')`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 pointer-events-none" />
                <div className="max-w-[1240px] w-full mx-auto px-7">
                  <div className="relative text-left text-white max-w-[760px]">
                  <div className="text-xs font-semibold tracking-widest uppercase text-white/80 mb-5 drop-shadow-lg">
                    {s.eyebrow}
                  </div>
                  <h1 className="text-hero leading-tight font-semibold tracking-tight mb-4.5 drop-shadow-2xl">
                    {s.title}
                  </h1>
                  <p className="text-[clamp(16px,1.6vw,20px)] leading-tight text-white/90 mb-8 max-w-[520px] drop-shadow-lg">
                    {s.subtitle}
                  </p>
                  <div className="flex gap-3.5 flex-wrap">
                    {s.buttons.map((btn, i) => (
                      <Link
                        key={i}
                        href={btn.href}
                        className={`px-5 py-2.5 rounded-full text-base font-medium transition-all inline-flex items-center ${
                          btn.primary
                            ? 'bg-accent-primary text-white hover:bg-accent-hover hover:text-white'
                            : btn.text
                            ? 'bg-none text-white border-none gap-1.5 hover:gap-2'
                            : 'bg-white/12 text-white border border-white/35 backdrop-blur hover:bg-accent-primary/25'
                        }`}
                      >
                        {btn.text && (
                          <>
                            {btn.text}
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path d="M5 12h14M13 6l6 6-6 6" />
                            </svg>
                          </>
                        )}
                        {!btn.text && btn.text}
                      </Link>
                    ))}
                  </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/14 border border-white/30 text-white flex items-center justify-center cursor-pointer transition-all hover:bg-white/28"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 6l-6 6 6 6" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/14 border border-white/30 text-white flex items-center justify-center cursor-pointer transition-all hover:bg-white/28"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>

          {/* Dot Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setSlide(idx)}
                className="rounded-full border-none cursor-pointer transition-all"
                style={{
                  width: idx === slide ? '28px' : '10px',
                  height: '10px',
                  backgroundColor: idx === slide ? 'white' : 'rgba(255, 255, 255, 0.4)',
                }}
              />
            ))}
          </div>
        </section>

        {/* Brand Carousel */}
        <section className="bg-surface-fill border-b border-border-light">
          <div className="max-w-[1240px] mx-auto px-7 py-16">
            <div className="text-xs font-semibold tracking-widest uppercase text-text-muted text-center mb-6">
              Brands We Carry
            </div>
            <div className="brands-ticker">
              <div className="brands-carousel">
                {[...BRANDS, ...BRANDS].map((brand, idx) => (
                  <Link
                    key={`${brand}-${idx}`}
                    href={`/catalog?brand=${encodeURIComponent(brand)}`}
                    className="flex-[0_0_auto] h-[140px] min-w-[140px] bg-white border border-border-light rounded-2xl flex items-center justify-center cursor-pointer transition-colors hover:border-accent-primary"
                  >
                    <img
                      src={getBrandLogoPath(brand)}
                      alt={brand}
                      className="h-[100px] w-[100px] object-contain"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About Block */}
        <section className="max-w-[1240px] mx-auto px-7 py-16">
          <div className="text-center">
            <div className="text-xs font-semibold tracking-widest uppercase text-accent-primary mb-7">
              Why buy through SH Trading
            </div>
            <h2 className="text-[clamp(26px,3.6vw,42px)] leading-tight tracking-tight font-semibold mb-6">
              One purchase order for nine brands, not nine relationships to manage.
            </h2>
            <p className="text-[clamp(17px,1.7vw,21px)] leading-[1.5] text-text-tertiary mx-auto mb-12 max-w-[720px]">
              Buying direct means juggling separate minimums, freight accounts and invoices for every manufacturer. We consolidate it: bulk-tier pricing, one shipment, one bill.
            </p>
            <Link
              href="/about"
              className="text-accent-primary text-[17px] font-medium cursor-pointer inline-flex items-center gap-[7px] hover:gap-[9px] transition-all"
            >
              More about SH Trading
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>

            {/* Value Props Grid */}
            <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 mt-14">
              {valueProps.map((prop) => (
                <div key={prop.title} className="bg-surface-fill rounded-[18px] px-6 py-6 text-left">
                  <div className="text-lg font-semibold mb-2">{prop.title}</div>
                  <div className="text-base leading-[1.45] text-text-tertiary">{prop.body}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-dark-primary text-white">
          <div className="max-w-[1240px] mx-auto px-7 py-16">
            <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-12">
              <div>
                <h2 className="text-[clamp(28px,3.4vw,40px)] leading-tight tracking-tight font-semibold mb-6">
                  Ready to price your next order?
                </h2>
                <p className="text-[17px] leading-[1.5] text-white/70 mb-8 max-w-[420px]">
                  Send us the specs and quantities. We&apos;ll come back with tiered pricing and
                  availability across every brand.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-accent-primary text-white px-5 py-2.5 rounded-full text-base font-medium hover:bg-accent-hover hover:text-white transition-colors"
                >
                  Request a Quote
                </Link>
              </div>

            </div>
          </div>
        </section>
      </main>
    </>
  );
}
