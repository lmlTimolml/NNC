import { Inter } from 'next/font/google';
import BgImage from '../components/bgimage';
import LocaleButtons from '../components/localebuttons';
import { useTranslations } from 'next-intl';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Nordic Neurology Congress 2024',
  description: 'A fictional conference.'
};
export default function RootLayout({ children, params: { locale } }) {
  
  const t = useTranslations('NavFoot');

  return (
    <html lang={locale} className='pb-10 sm:px-10'>
      <body
        className={`${inter.className} max-w-[960px] mx-auto h-screen flex flex-col from-dark bg-gradient-to-t to-foreground bg-fixed px-10 antialiased `}>
        <LocaleButtons locale={locale} text={t('text')} />
        {children}
        <BgImage />
        <small className='mt-auto py-14 text-center'>{t('copyright')}</small>
      </body>
    </html>
  );
}
