import arrow from '../assets/svg/Vector.svg'
import RevealText from '../components/RevealText.tsx'

export default function Footer() {
  return (
    <footer className="bg-black min-h-[50vh] w-full p-10 grid grid-cols-3 font-readex overflow-hidden">
      {/* Kolom Kiri */}
      <div className="flex flex-col justify-between">
        <div className="text-white flex flex-col gap-4 text-3xl">
          <h1 data-aos='fade-right' data-aos-delay='400'>Contact</h1>  
          <h1 data-aos='fade-right' data-aos-delay='400'>Social</h1>  
          <h1 data-aos='fade-right' data-aos-delay='400'>Github</h1>  
        </div>
        <img
          src={arrow}
          alt="arrow"
          data-aos="fade-up"
          data-aos-delay="400"
          className="w-10 mb-10"
        />
      </div>

      {/* Kolom Tengah */}
      <div className="text-white font-pillar text-center flex items-center justify-center">
        <RevealText text="AETERNUM" className="text-[12vw] leading-none" />
      </div>

      {/* Kolom Kanan */}
      <div className="flex flex-col justify-between items-end">
        <div data-aos='fade-left' className="text-white flex flex-col gap-4 text-3xl items-end">
          <h1 data-aos-delay='200' data-aos='fade-left'>Contact</h1>  
          <h1 data-aos-delay='300' data-aos='fade-left'>Social</h1>  
          <h1 data-aos='fade-left' data-aos-delay='400'>Github</h1>  
        </div>
        <img
          src={arrow}
          alt="arrow"
          data-aos="fade-up"
          data-aos-delay="400"
          className="w-10 mb-10"
        />
      </div>
    </footer>
  )
}
