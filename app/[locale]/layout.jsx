import { Inter } from 'next/font/google';
import Image from 'next/image'
import Nav from '../components/navigation';
import '../globals.css';
/* import { useTranslations } from 'next-intl'; */

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Nordic Neurology Congress 2024',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
  params: { locale }
}) {
  /* const t = useTranslations('Nav'); */
  return (
    <html lang={locale} className='sm:px-10 pb-10'>
      <body className={`${inter.className} bg-fixed antialiased bg-gradient-to-t from-dark to-foreground p-5 `}>{children}
      <section className='flex w-full flex-col items-center justify-center max-w-[960px] mx-auto'>
      <Image
        style={{ objectFit: 'contain' }}
        width={300}
        height={300}
        sizes='(max-width: 960px) 100vw, 50vw, 33vw'
          src='/mountain_01.svg'
          className="bottom-0 w-[60%] mt-[-200px] fixed opacity-25"
          alt="NNC mountain"
        />
        </section>
        </body>
    </html>
  );
}