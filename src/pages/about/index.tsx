import Image from 'next/image'

import IMG from '@/assets/ilustration.svg'
import { STACK } from '../../config/stack'
import Metatags from '@/components/Metatags'

export default function About() {
  return (
    <section className='scaleUp wrapper top'>
        <Metatags title='AnimeApp - About' description="Nice to meet you! I'm Lucas" />
        <div className='rounded shadow-sm bg-contrast p-4 grid grid-cols-1 sm:grid-cols-2 items-center gap-4 mb-8'>
            <Image src={IMG} alt='Ilustration' />
            <div className='text-primary'>
                <h2 className='mb-2 text-amber-600'>Lucas Fernandes Lima</h2>
                <p className='mb-4'>Nice to meet you! <strong>I'm Lucas, 21 years.</strong> I'm from Curitiba, Brazil, I've been working with <strong>development since 2020</strong>, since then <strong>I'm always learning and practicing</strong> whenever I can. I deal with mainly front-end, down below are some of the techs I work with:</p>

                <div className='grid grid-cols-2 items-center justify-items-center gap-4 mb-4 sm:grid-cols-6'>
                  {STACK.map(tech => <Image src={tech.src} alt={tech.alt} width={48} key={tech.alt} />)}
                </div>
                
                <p>The API which I'm using for data fetching comes from <a href="https://github.com/AniList/ApiV2-GraphQL-Docs" className='underline font-medium' target='_blank'>Anilist</a> This application is a simple project made for my portfolio 😊. It was made with <strong>NextJS</strong>, <strong>Tailwindcss</strong> and <strong>Apollo(GraphQL).</strong> I hope you guys enjoy it!</p>
            </div>
        </div>
    </section>
  )
}
