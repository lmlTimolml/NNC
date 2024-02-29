'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { customColors } from '../../lib/theme';

import { useState } from 'react';
export default function Nav() {
  
    const [nav, setNav] = useState(false);
    const handleNav = () => {
      setNav(!nav);
    };
  
    const colors = customColors();
    
    return (
      <nav className='fixed left-0 top-0 w-full mb-10 z-10'
      > <div className='max-w-[960px] mx-auto pt-4'>
      {/* <Localebuttons  /> */}
        <div className='inner-nav'>
          <div className='w-[170px] h-auto relative flex flex-shrink-0 z-20'>
          {/*   <Link href='/'>
            <Image
            style={{ objectFit: 'contain' }}
            width={width}
            height={height}
            sizes='(max-width: 960px) 100vw, 50vw, 33vw'
            src=''
            alt={alt}
            className='w-full max-h-[480px]'
          />
            </Link> */}
          </div>
          <ul className='hidden md:flex ml-auto'>
            
              <li className='ml-4'>
                <Link href='/'
                  className='btn-navlink group/btn'
                >
                  <p className='group-hover/btn:underline'>Program</p>
                </Link>
              </li>
          </ul>
  
          {/* Mobile button */}
          <div
            onClick={handleNav}
            className='flex ml-auto self-center min-[740px]:hidden z-10'
          >
            {nav ? (
              <XMarkIcon className='h-10 w-10' />
            ) : (
              <Bars3Icon className='h-10 w-10' />
            )}
          </div>
  
          {/* Mobile Menu*/}
  
          <nav className={`absolute top-24 ${
              nav ? 'left-0' : 'left-full'
            } right-0 bottom-0 flex justify-end w-full h-screen min-[740px]:hidden text-center ease-in duration-300`}
          >
            <ul className='text-xl flex flex-col items-end gap-1 mr-5'>
   
                  <Link href='/'
                    className='btn-navlink group/btn'
                  >
                    <p className='group-hover/btn:underline'>Program</p>
                  </Link>
   
            </ul>
          </nav>
        </div>
        </div>
      </nav>
    );
  }
   