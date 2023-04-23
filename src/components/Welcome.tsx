import Image from 'next/image'

import BANNER from '@/assets/welcome_img.png'

export default function Welcome() {
  return (
    <section className='welcome'>
        <Image src={BANNER} alt='Banner' priority />
        <h1 className='w-max text-xl sm:text-2xl md:text-3xl center-absolute text-primary'>Search & Track Animes 😊</h1>
    </section>
  )
}
