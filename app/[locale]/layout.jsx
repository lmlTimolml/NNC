import { Inter } from 'next/font/google';
import BgImage from '../components/bgimage';
import LocaleButtons from '../components/localebuttons';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Nordic Neurology Congress 2024',
  description: 'Generated by create next app'
};

export default function RootLayout({ children, params: { locale } }) {
  
  return (
    <html lang={locale} className='pb-10 sm:px-10'>
      <body
        className={`${inter.className} max-w-[960px] mx-auto from-dark bg-gradient-to-t to-foreground bg-fixed px-10 antialiased `}>
        <LocaleButtons locale={locale} />
        {children}
        <BgImage />
      </body>
    </html>
  );
}
