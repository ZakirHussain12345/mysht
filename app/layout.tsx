import type { Metadata } from 'next';
import { Cabin } from 'next/font/google';
import { Footer } from '@/components/Footer';
import './globals.css';

const cabin = Cabin({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SH Trading | B2B Lighting, Power & Specialty Equipment Distributor',
  description: 'Costa Mesa-based B2B distributor specializing in lighting, power, and specialty equipment from eight trusted brands. Request a quote today.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${cabin.className} bg-white text-text-primary`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
