import SectionTitle from '../components/SectionTitle.tsx';
import ScrollReveal from '../components/ScrollReveal.tsx';
import gambar from '../assets/webp/image_9_4x.webp'
import gambarMata from '../assets/webp/image_11.webp'

export default function Question() {
  return (
    <div className='min-h-[80vh] pt-10'> 
      <SectionTitle title={'question'} />

      <ScrollReveal delay={0.1} className='mt-5'>
        <img src={gambar} decoding="async" />
      </ScrollReveal>
      <div className='flex flex-row mt-10'>
        <p className='font-readex text-xl tracking-widest min-w-[70%]'>
          A gathering of minds, beliefs, and perspectives in the endless pursuit of knowledge, reflecting humanity's desire to understand the world, question existence, and discover the truth. But can knowledge ever reveal the entirety of human existence?
        </p>
        <ScrollReveal delay={0.2} className='flex-1 min-w-0'>
          <img src={gambarMata} decoding="async" className='h-30 w-full object-cover' />
        </ScrollReveal>
      </div>
    </div>
  )
}
