import gambar1 from '../assets/webp/image_4_4x.webp'
import gambar2 from '../assets/webp/image_5_4x.webp'
import gambar3 from '../assets/webp/image_6_4x.webp'
import { useState } from 'react'
import SectionTitle from '../components/SectionTitle.tsx'
import ScrollReveal from '../components/ScrollReveal.tsx'

interface GambarItem {
  name: string;
  image: string;
  para: string;
}

const gambarList: GambarItem[] = [
  {
    name: "AMBITION",
    image: gambar1,
    para: 'The awareness of oneself and the surrounding world. It defines how humans perceive, experience, and understand reality.'
  },
  {
    name: "MORTALITY",
    image: gambar2,
    para: "The fundamental state of existence. It explores what it means to be alive and to occupy a place in the world."
  },
  {
    name: "IDENTITY",
    image: gambar3,
    para: "The collection of experiences, beliefs, values, and characteristics that define who we are. It explores how individuals shape their sense of self through personal history, social influences, and the choices they make.",
  },
]
//TODO: benerin animasi di halaman
//TODO: hilangin sidebar
//TODO: benerin aos atau coba gsap
export default function Beginning() {
  const [isHover, setIsHover] = useState<GambarItem>(gambarList[0]);

  return (
    <div className='min-h-screen pt-10'> 
      <SectionTitle title={'beginning'} />
      <div className='flex flex-row justify-between gap-20 mt-10'>
        {gambarList.map((list, i) => (
         <ScrollReveal key={list.name} delay={i * 0.1}>
           <div onMouseEnter={() => setIsHover(list)} className='cursor-default relative hover:scale-[1.03] transition-transform duration-300 ease-out hover:shadow-2xl will-change-transform'>
             <h1 className="absolute text-white opacity-0 hover:opacity-100 h-full bg-red-500 transition-opacity duration-300 bottom-0 mix-blend-exclusion pt-[90%] w-full text-center text-[200px] font-pillar -translate-x-1/2 left-1/2 ">{list.name}</h1>
             <img src={list.image} decoding="async" />
           </div>
         </ScrollReveal>
        ))}
      </div>
      <div className='flex items-start transition-all duration-300 flex-row gap-10 mt-10 tracking-widest'>
        <h1 className='font-pillar text-9xl'>{isHover.name}</h1>
        <p className='text-2xl w-[70%] mt-1'>{isHover.para}</p>
      </div>
    </div>
  )
}
