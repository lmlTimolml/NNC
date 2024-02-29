import Link from 'next/link';
import Image from 'next/image';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

export default function Button({ label, link, youtubeid, src }) {
  return (
    <div className='drop-shadow-dark sm:w-1/2 max-w-[360px] z-10 flex w-full h-full flex-col duration-150 sm:hover:mt-[-5px]'>
      <Link
        href={link}
        className='group/btn sm:max-w-1/2 hover:drop-shadow-glow h-full w-full items-center justify-center rounded-b border border-secondary bg-tertiary duration-300 ease-out'>
        {youtubeid && (
          <iframe
            height={540}
            width={960}
            src={`https://www.youtube.com/embed/${youtubeid}?rel=0`}
            title='YouTube video'
            allowFullScreen
            className='aspect-video w-full h-auto duration-150 ease-linear grayscale-[70%]'
          />
        )}
        {src && (
          <Image
            style={{ objectFit: 'contain' }}
            height={540}
            width={960}
            src={src}
            title='nnc-logo'
            className='aspect-video bg-foreground duration-150 ease-linear'
          />
        )}
        <button className='flex w-full items-center justify-center py-5'>
          <p className='text-center group-hover/btn:ml-2'>{label}</p>
          <ChevronRightIcon className='ml-0 h-6 w-6 text-background opacity-0 duration-300 group-hover/btn:ml-4 group-hover/btn:opacity-100' />
        </button>
      </Link>
    </div>
  );
}
