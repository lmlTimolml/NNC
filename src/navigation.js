import {
    createLocalizedPathnamesNavigation
  } from 'next-intl/navigation';
   
  export const locales = ['no', 'en'];
  export const localePrefix = 'as-needed';
   
  export const pathnames = {
    '/': '/',
   
    '/agenda': {
      en: '/agenda',
      no: '/program'
    },
   
    '/information': {
      en: '/information',
      no: '/informasjon'
    }
  };
   
  export const {Link, redirect, usePathname, useRouter, getPathname} =
    createLocalizedPathnamesNavigation({locales, localePrefix, pathnames});