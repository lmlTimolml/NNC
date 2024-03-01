import Link from 'next/link';
import Image from 'next/image';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

export default function Button({ btnInfo }) {
  return (
    <>
      {btnInfo?.map((btn, i) => (
        <div className='drop-shadow-dark z-10 flex w-full flex-col duration-150 ease-linear sm:w-1/2 sm:max-w-[400px] sm:first:mb-auto sm:last:mt-auto sm:first:hover:mt-[-5px] sm:last:hover:mb-[5px]'>
          <Link
            key={i}
            href={`${btn.link}`}
            className='group/btn sm:max-w-1/2 hover:drop-shadow-glow sm:second:self-center w-full rounded-b border border-secondary/70 bg-secondary/70 duration-300 ease-out overflow-hidden'>
            {btn.youtubeid && (
              <iframe
                btnInfo={btnInfo}
                height={540}
                width={960}
                src={`https://www.youtube.com/embed/${btn.youtubeid}?rel=0`}
                title='YouTube video'
                allowFullScreen
                className='aspect-video h-auto w-full grayscale-[70%] duration-150 ease-linear hover:grayscale-0'
              />
            )}
            {btn.src && (
              <Image
                style={{ objectFit: 'cover' }}
                height={540}
                width={960}
                src={`/${btn.src}`}
                alt={`${btn.alt}`}
                title='btn-img'
                priority
                className='aspect-video bg-foreground grayscale-[70%] duration-150 ease-linear group-hover/btn:grayscale-0'
              />
            )}
            {btn.copyImg && (
              <div className='aspect-video w-full text-center flex items-center justify-center bg-foreground'>
                <p className='font-bold text-lg text-background duration-[2000ms] ease-out group-hover/btn:grayscale-0 group-hover/btn:scale-[4.0] group-hover/btn:blur-[2px] group-hover/btn:skew-y-[-8deg]'>{btn.copyImg}</p>
              </div>
            )}
            <button className='flex w-full items-center justify-center py-5'>
              <p className='text-center text-foreground group-hover/btn:ml-2'>
                {btn.text}
              </p>
              <ChevronRightIcon className='ml-0 h-6 w-6 text-foreground opacity-0 duration-300 group-hover/btn:ml-4 group-hover/btn:opacity-100' />
            </button>
          </Link>
        </div>
      ))}
    </>
  );
}
