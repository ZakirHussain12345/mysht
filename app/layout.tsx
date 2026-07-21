import type { Metadata } from 'next';
import { Cabin } from 'next/font/google';
import { Footer } from '@/components/Footer';
import './globals.css';

const cabin = Cabin({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SH Trading',
  description: 'B2B supplier of solar, battery storage, EV charging, and commercial lighting.',
  icons: {
    icon: "/favicon.png",
  },
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
