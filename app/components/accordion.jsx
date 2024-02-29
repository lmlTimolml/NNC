'use client'
import { ChevronUpIcon } from '@heroicons/react/24/solid';
import { useState } from 'react'

export default function Accordion({label, events}) {

  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="z-10 w-full border-t first-of-type:border-t-0 border-secondary bg-foreground/90">
      
        <button
          className="flex items-center justify-between w-full p-5 bg-secondary/70"
          onClick={(e) => { e.preventDefault(); setAccordionOpen(!accordionOpen); }}
          aria-expanded={accordionOpen}
          aria-controls={`accordion-title-${label}`}
        >
          <h2 className='font-medium text-foreground text-left mr-4'>{label}</h2>
          <div className='p-1 rounded-full bg-foreground'>
          <ChevronUpIcon className={`z-10 h-6 w-6 transform origin-center text-secondary transition duration-200 ease-out ${accordionOpen && '!rotate-180'}`} />
          </div> 
        </button>
        { events?.map((ev,i) => (
      <div key={i}
      id={`accordion-text-${ev.header}`}
        role="region"
        aria-labelledby={`accordion-title-day`}
        className={`grid px-5 odd:bg-secondary/5 text-sm text-background overflow-hidden transition-all duration-300 ease-in-out ${accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden flex flex-col">
          <div className='flex flex-col sm:flex-row sm:gap-5 items-baseline'>
          { ev.time ? (
          <h3 className="py-3">
            {ev.time}
          </h3>) : null }
          { ev.header ? (<h4 className="pb-3">
            {ev.header}
          </h4>) : null }
          </div>
          <div>
          { ev.event ? (
            <p className="pb-5">
            {ev.event}
          </p>
          ) : null }
          </div>
        </div>
      </div>
        ))}
    </div>
  )
}