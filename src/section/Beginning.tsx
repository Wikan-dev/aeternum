import gambar1 from '../assets/webp/image_4_4x.webp'
import gambar2 from '../assets/webp/image_5_4x.webp'
import gambar3 from '../assets/webp/image_6_4x.webp'
import { useState } from 'react'
import SectionTitle from '../components/SectionTitle.tsx'

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

export default function Beginning() {
  const [isHover, setIsHover] = useState<GambarItem>(gambarList[0]);

  return (
    <div className='min-h-screen pt-10'> 
      <SectionTitle title={'beginning'} />
      <div className='flex flex-row justify-between gap-20 mt-10'>
        {gambarList.map((list, i) => (
          <div key={i} onMouseEnter={() => setIsHover(list)} className='cursor-default relative hover:scale-103 transition-all duration-300 hover:drop-shadow-2xl/50 drop-shadow-black'>
            <h1 className="absolute text-white opacity-0 hover:opacity-100 h-full bg-red-500 transition-all duration-300 bottom-0 mix-blend-exclusion drop-shadow-2xl/50 pt-[90%] w-full text-center drop-shadow-white text-[200px] font-pillar -translate-x-1/2 left-1/2 ">{list.name}</h1>
            <img src={list.image} className='' />  
          </div>
        ))}
      </div>
      <div className='flex items-start transiton-all duration-300 flex-row gap-10 mt-10 tracking-widest'>
        <h1 className='font-pillar text-9xl'>{isHover.name}</h1>
        <p className='text-2xl w-[70%] mt-1'>{isHover.para}</p>
      </div>
    </div>
  )
}
