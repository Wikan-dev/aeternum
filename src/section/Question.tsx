import SectionTitle from '../components/SectionTitle.tsx';
import gambar from '../assets/webp/image_9_4x.webp'
import gambarMata from '../assets/webp/image_11.webp'

export default function Question() {
  return (
    <div className='min-h-screen pt-10'> 
      <SectionTitle title={'question'} />

      <img src={gambar} className='mt-5' data-aos='fade-up' data-aos-delay="200" />
      <div className='flex flex-row mt-10'>
        <p className='font-readex text-xl tracking-widest min-w-[70%]'>
          A gathering of minds, beliefs, and perspectives in the endless pursuit of knowledge, reflecting humanity's desire to understand the world, question existence, and discover the truth. But can knowledge ever reveal the entirety of human existence?
        </p>
        <img src={gambarMata} data-aos="fade-up" data-aos-delay='400' className='h-30 w-full object-cover' />
      </div>
    </div>
  )
}
