'use client';
import { CircleFlag } from 'react-circle-flags';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { useRouter, usePathname } from '../../src/navigation';
import { useParams } from 'next/navigation';

const LocaleButtons = ({ locale, text }) => {

  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

    const countryCode = {
        no: 'no',
        en: 'uk'
    }

  return (
    
    <div className='flex justify-end py-5'>
      
      {pathname !== `${"/" + locale}` && pathname !== `${"/"}` && (
    <button id='previousPage' className='group/btn items-center mr-auto flex gap-1 text-background' onClick={() => router.back()}> <ChevronLeftIcon className='ml-0 h-6 w-6 text-background duration-300 group-hover/btn:ml-[-3px] ease-in' /><p className='group-hover/btn:ml-[3px] duration-300 ease-in'>{text}</p></button>
    )}
    
      <div>
      { locale !== 'no' ? (<button id='langNorwegian' onClick={() => router.replace({pathname, params},{locale: 'no'})}><CircleFlag countryCode={countryCode.no} className='h-5 box-border rounded-full hover:scale-90 ease-linear duration-75' /></button>) : null }
      { locale !== 'en' ? (<button id='langEnglish' onClick={() => router.replace({pathname, params},{locale: 'en'})}><CircleFlag countryCode={countryCode.en} className='h-5 box-border rounded-full hover:scale-90 ease-linear duration-75' /></button>) : null }
      </div>
    </div>
    
  );
};

export default LocaleButtons;