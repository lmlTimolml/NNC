import {useTranslations} from 'next-intl';
import { customColors } from '../../lib/theme';
import Button from '../components/button.jsx';
import Image from 'next/image';


export default function Home({params: { locale }}) {
  
  const t = useTranslations('Home');
  const keys = ['Buttons'];
  const buttons = ['btn01', 'btn02'];

  const getButtonData = (btnKey) => {
    return buttons?.map((btn, index) => ({
        id: index + 1,
        text: t(`${btnKey}.${btn}.text`),
        link: t(`${btnKey}.${btn}.link`),
        youtubeid: t(`${btnKey}.${btn}.youtubeid`),
        src: t(`${btnKey}.${btn}.src`),
    }));
};

// Extract event data for each day
const buttonData = keys?.map((btnKey, index) => ({
    id: index + 1,
    btnInfo: getButtonData(btnKey)
}));

  return (
    <main className='flex flex-col items-center max-w-[960px] mx-auto'>
      <div className='z-10 mb-10 text-sm'>
     
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>

      </div>
      <section className='flex flex-col gap-10 sm:flex-row sm:justify-between'>
      {buttonData.map((button, i) => (
    <Button key={i} btnInfo={button.btnInfo} />
  ))}
      </section>
    </main>
  );
}
