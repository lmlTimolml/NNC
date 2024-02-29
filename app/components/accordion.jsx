'use client'
import { ChevronUpIcon } from '@heroicons/react/24/solid';
import { useState } from 'react'

export default function Accordion({label, entries}) {

  const [accordionOpen, setAccordionOpen] = useState(false);
console.log('Accordion: ', entries);
  return (
    <div className="z-10 p-5 w-full border-t first-of-type:border-t-0 border-secondary bg-foreground/50">
      
        <button
          className="flex items-center justify-between w-full py-2"
          onClick={(e) => { e.preventDefault(); setAccordionOpen(!accordionOpen); }}
          aria-expanded={accordionOpen}
          aria-controls={`accordion-text-open`}
        >
          <h2 className='font-medium text-left mr-4'>{label}</h2>
          <div className='p-1 rounded-full bg-secondary'>
          <ChevronUpIcon className={`z-10 h-6 w-6 transform origin-center transition duration-200 ease-out ${accordionOpen && '!rotate-180'}`} />
          </div> 
        </button>
        {entries.map((event, i) => (
      <div
        id={`accordion-text-agenda`}
        role="region"
        aria-labelledby={`accordion-title-day`}
        className={`grid text-sm text-background overflow-hidden transition-all duration-300 ease-in-out ${accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <h3 className="pb-3">
            {time}
          </h3>
          <p className="pb-3">
            {event}
          </p>
        </div>
      </div>
        ))};
    </div>
  )
}