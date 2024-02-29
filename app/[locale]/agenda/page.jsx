import { useTranslations } from 'next-intl';
import Accordion from '../../components/accordion.jsx';

export default function Agenda({ params: { locale } }) {
    const t = useTranslations('Agenda');
    const keys = ['day01', 'day02']; // All day keys
    const events = ['entry01', 'entry02', 'entry03', 'entry04', 'entry05', 'entry06', 'entry07', 'entry08', 'entry09'];

    // Function to extract event data for each day
    const getEventDataForDay = (dayKey) => {
        return events?.map((event, index) => ({
            id: index + 1,
            time: t(`${dayKey}.${event}.time`),
            header: t(`${dayKey}.${event}.header`),
            event: t(`${dayKey}.${event}.event`),
        }));
    };

    // Extract event data for each day
    const eventData = keys?.map((dayKey, index) => ({
        id: index + 1,
        label: t(`${dayKey}.label`),
        events: getEventDataForDay(dayKey)
    }));

    return (
        <main className='flex flex-col max-w-[960px] mx-auto'>
            <h1 className='mb-10'>{t('title')}</h1>
            <section className='w-full mx-auto border rounded-md flex flex-col items-center justify-between mb-10 duration-300 ease-linear'>
                {eventData.map((dayData, i) => (
                    <Accordion key={i} label={dayData.label} events={dayData.events} />
                ))}
            </section>
        </main>
    );
}
