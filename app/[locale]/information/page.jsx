import { useTranslations } from 'next-intl';

export default function Information({ params: { locale } }) {
const t = useTranslations('Information');

    return (
        <main className='flex flex-col max-w-[960px] mx-auto'>
            <h1 className='mb-10'>{t('title')}</h1>
      
    <div className='drop-shadow-dark border border-secondary mb-10 z-10 flex w-full h-full'>
        
          <iframe
            height={540}
            width={960}
            src={`https://www.youtube.com/embed/${t('youtubeid')}?rel=0`}
            title='YouTube video'
            allowFullScreen
            className='aspect-video w-full h-auto'
          />
 
        </div>
        <p>{t('description')}</p>
        </main>
    );
}