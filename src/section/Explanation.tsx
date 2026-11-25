import SectionTitle from '../components/SectionTitle.tsx';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

const ExplanationList = [
  {
    title: 'Identity',
    para: 'Identity is the collection of experiences, beliefs, values, and characteristics that shape who we are. It represents the relationship between our past, present, and the person we aspire to become. Every experience, decision, and interaction contributes to the formation of our individual identity, creating a sense of self that distinguishes us from others. However, identity is never entirely fixed. It evolves through time, shaped by personal experiences, social expectations, and the environments we inhabit. Sometimes, the person we believe ourselves to be differs from the person others perceive. If our identity continues to change throughout our lives, is there ever a permanent version of ourselves?'
  },
  {
    title: 'Suffering',
    para: 'Identity is the collection of experiences, beliefs, values, and characteristics that shape who we are. It represents the relationship between our past, present, and the person we aspire to become. Every experience, decision, and interaction contributes to the formation of our individual identity, creating a sense of self that distinguishes us from others. However, identity is never entirely fixed. It evolves through time, shaped by personal experiences, social expectations, and the environments we inhabit. Sometimes, the person we believe ourselves to be differs from the person others perceive. If our identity continues to change throughout our lives, is there ever a permanent version of ourselves?'
  },
  {
    title: 'Legacy',
    para: 'Identity is the collection of experiences, beliefs, values, and characteristics that shape who we are. It represents the relationship between our past, present, and the person we aspire to become. Every experience, decision, and interaction contributes to the formation of our individual identity, creating a sense of self that distinguishes us from others. However, identity is never entirely fixed. It evolves through time, shaped by personal experiences, social expectations, and the environments we inhabit. Sometimes, the person we believe ourselves to be differs from the person others perceive. If our identity continues to change throughout our lives, is there ever a permanent version of ourselves?'
  },
  {
    title: 'Ambition',
    para: 'Identity is the collection of experiences, beliefs, values, and characteristics that shape who we are. It represents the relationship between our past, present, and the person we aspire to become. Every experience, decision, and interaction contributes to the formation of our individual identity, creating a sense of self that distinguishes us from others. However, identity is never entirely fixed. It evolves through time, shaped by personal experiences, social expectations, and the environments we inhabit. Sometimes, the person we believe ourselves to be differs from the person others perceive. If our identity continues to change throughout our lives, is there ever a permanent version of ourselves?'
  },
  {
    title: 'Morality',
    para: 'Identity is the collection of experiences, beliefs, values, and characteristics that shape who we are. It represents the relationship between our past, present, and the person we aspire to become. Every experience, decision, and interaction contributes to the formation of our individual identity, creating a sense of self that distinguishes us from others. However, identity is never entirely fixed. It evolves through time, shaped by personal experiences, social expectations, and the environments we inhabit. Sometimes, the person we believe ourselves to be differs from the person others perceive. If our identity continues to change throughout our lives, is there ever a permanent version of ourselves?'
  },
]

export default function Explanation() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const activeIndex = hoveredIndex ?? 0;

  return (
    <div className='min-h-[80vh] pt-10'> <SectionTitle title='explanation' />

      <div className='grid grid-cols-2 gap-10 mt-10'>
        <div className='flex flex-col gap-10'>
          {ExplanationList.map((item, i) => (
            <div
              key={item.title}
              onMouseEnter={() => setHoveredIndex(i)}
              className='relative border-b-2 p-4 items-center w-full flex flex-row mix-blend-exclusion justify-between cursor-default'
            >
              {hoveredIndex === i && (
                <motion.div
                  layoutId='hover-outline'
                  transition={{ type: 'spring', stiffness: 900, damping: 50 }}
                  className='absolute inset-0 bg-black border-black pointer-events-none'
                />
              )}
              <h1 className={`font-readex font-extrabold text-4xl relative z-10 ${hoveredIndex === i ? 'text-white' : 'text-black'}`}>{item.title}</h1>
              <div className={`w-5 h-5 rounded-full relative z-10 ${hoveredIndex === i ? 'bg-white' : 'bg-black'}`} />
            </div>
          ))}
        </div>

        <div className='min-h-80'>
          <AnimatePresence mode='wait'>
            <motion.p
              key={activeIndex}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className='font-readex text-xl tracking-widest'
            >
              {ExplanationList[activeIndex].para}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
