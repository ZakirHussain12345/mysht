import Image from 'next/image';
import { Product } from '@/lib/types';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <a
      href={product.externalURL}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white border border-border-light rounded-3xl overflow-hidden cursor-pointer transition-all duration-200 hover:shadow-card-hover hover:-translate-y-0.75"
    >
      <div className="bg-surface-fill aspect-video flex items-center justify-center relative overflow-hidden">
        {product.image ? (
          <Image
            src={`/images/products/${product.image}`}
            alt={product.name}
            fill
            className="object-cover"
          />
        ) : (
          <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#c7c7cc" strokeWidth="1.4">
            <rect x="3" y="3" width="18" height="18" rx="2.5" />
            <circle cx="8.5" cy="8.5" r="1.6" />
            <path d="M21 15l-5-5L5 21" />
          </svg>
        )}
      </div>
      <div className="p-4">
        <div className="text-xs font-semibold tracking-wide uppercase text-accent-primary">
          {product.brand}
        </div>
        <div className="text-base/1.3 font-semibold mt-[7px] mb-1.25 text-text-primary">
          {product.name}
        </div>
        <div className="text-sm text-text-muted">{product.sub}</div>
      </div>
    </a>
  );
}
