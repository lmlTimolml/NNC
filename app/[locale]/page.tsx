import {useTranslations} from 'next-intl';

type Props = {
  params: {
    locale: string
  }
};


export default function Home({params: {locale}}: Props) {

  const t = useTranslations('Home');
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div>{t('title')}</div>
    </main>
  );
}
