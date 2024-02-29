import Image from 'next/image'

export default function BgImage() {
    
    return(
<section className='flex w-full flex-col items-center justify-center max-w-[960px] mx-auto'>
      <Image
        style={{ objectFit: 'contain' }}
        width={300}
        height={300}
        sizes='(max-width: 960px) 100vw, 50vw, 33vw'
          src='/mountain_01.svg'
          className="bottom-0 w-[60%] mt-[-200px] sm:mt-[400px] fixed opacity-25"
          alt="NNC mountain"
        />
        </section>
    )
}