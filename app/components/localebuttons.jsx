'use client';
import Link from 'next/link';
import { CircleFlag } from 'react-circle-flags';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

const LocaleButtons = ({ locale, text }) => {

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()

    const countryCode = {
        no: 'no',
        en: 'uk'
    }

    const domainName = {
        no: 'no',
        en: 'en'
    }
console.log('Current path: ', searchParams);
  return (
    
    <div className='flex justify-end py-5'>
      
      {pathname !== `${"/" + locale}` && pathname !== `${"/"}` && (
    <button className='group/btn items-center mr-auto flex gap-1 text-background' onClick={() => router.back()}> <ChevronLeftIcon className='ml-0 h-6 w-6 text-background duration-300 group-hover/btn:ml-[-3px] ease-in' /><p className='group-hover/btn:ml-[3px] duration-300 ease-in'>{text}</p></button>
  )}
      <div>
      { locale !== 'no' ? (<Link href='/no'><CircleFlag countryCode={countryCode.no} className='h-5 box-border rounded-full hover:scale-90 ease-linear duration-75' /></Link>) : null }
      { locale !== 'en' ? (<Link href='/en'><CircleFlag countryCode={countryCode.en} className='h-5 box-border rounded-full hover:scale-90 ease-linear duration-75' /></Link>) : null }
      </div>
    </div>
    
  );
};

export default LocaleButtons;