import { useTranslations } from 'next-intl';
import Accordion from '../../components/accordion.jsx';

export default function Agenda({params: { locale }}) {
    const t = useTranslations('Agenda');
    const keys = ['day01', 'day02']

    const entryData = keys.map((key, index) => ({
        id: index + 1,
        label: t(`${key}.label`),
        entries: t(`${key}.entries`, { returnObjects: true }) || []
    }));
    
    return (
        <main className='flex flex-col items-center max-w-[960px] mx-auto'>
            <h1 className='mb-10'>{t('title')}</h1>
            <section className='w-full sm:w-1/2 mx-auto border rounded-md flex flex-col items-center justify-between mb-10 duration-300 ease-linear'>
            {entryData.map((acc, i) => (
    <Accordion key={i} label={acc.label} entries={acc.entries} />
  ))}
            
            </section>
        </main>
    );
}