import {useTranslations} from 'next-intl';
import Button from '../components/button.jsx';
import Image from 'next/image';


export default function Home({params: { locale }}) {
  
  const t = useTranslations('Home');
  const keys = ['Buttons'];
  const buttons = ['btn01', 'btn02'];

  const getButtonData = (btnKey, i) => {
    return buttons?.map((btn, index) => ({
        id: index + 1,
        text: t(`${btnKey}.${btn}.text`),
        link: t(`${btnKey}.${btn}.link`),
        youtubeid: t(`${btnKey}.${btn}.youtubeid`),
        src: t(`${btnKey}.${btn}.src`),
        alt: t(`${btnKey}.${btn}.alt`),
        copyImg: t(`${btnKey}.${btn}.copyImg`),
    }));
};

const buttonData = keys?.map((btnKey, index) => ({
    id: index + 1,
    btnInfo: getButtonData(btnKey)
}));

  return (
    <main className='flex flex-col items-center max-w-[960px] mx-auto'>
      <div className='z-10 items-center justify-between text-sm flex flex-col sm:flex-row gap-6'>
     <Image 
     style={{ objectFit: 'contain' }}
     height={200}
     width={200}
     src='/nnc-logo-color.png'
     alt='nnc-logo'
     className='grow-0 aspect-auto h-36 w-auto sm:h-40'
     />
      <h1 className='flex-grow whitespace-pre text-center'>{t('title')}</h1>

      </div>
      <section className='flex flex-col sm:h-[400px] items-center gap-10 my-10 sm:flex-row'>
      {buttonData.map((button, i) => (
    <Button key={i} btnInfo={button.btnInfo} />
  ))}
      </section>
    </main>
  );
}
