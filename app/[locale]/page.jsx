import {useTranslations} from 'next-intl';
import { customColors } from '../../lib/theme';
import Button from '../components/button.jsx';
import Image from 'next/image';

const buttonData = [
  { id: 1, label: 'Se program', link: '/agenda', youtubeid: '', src: '/nnc-logo-color.png' },
  { id: 2, label: 'Les mer', link: '/information', youtubeid: 'aqz-KE-bpKQ', src: '' },
];

export default function Home({params: { locale }}) {

  const t = useTranslations('Home');
  return (
    <main className='flex flex-col items-center max-w-[960px] mx-auto'>
      <div className='z-10 mb-10 text-sm'>
     
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>

      </div>
      <section className='flex flex-col gap-10 sm:flex-row w-full items-center justify-center sm:justify-around'>
      {buttonData.map((button, i) => (
    <Button key={i} label={button.label} link={button.link} youtubeid={button.youtubeid} src={button.src} />
  ))}
      </section>
    </main>
  );
}
