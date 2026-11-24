import arrow from '../assets/svg/Vector.svg'

export default function Footer() {
  return (
    <footer className="bg-black min-h-[50vh] w-screen relative left-1/2 -translate-x-1/2 p-10 grid grid-cols-3 font-readex overflow-hidden">
      {/* Kolom Kiri */}
      <div className="flex flex-col justify-between">
        <div className="text-white flex flex-col gap-4 text-3xl">
          <h1>Contact</h1>  
          <h1>Social</h1>  
          <h1>Github</h1>  
        </div>
        <img src={arrow} alt="arrow" className="w-10 mb-10" />
      </div>

      {/* Kolom Tengah */}
      <div className="text-white font-pillar text-center flex items-center justify-center">
        <h1 className="text-[12vw] leading-none">AETERNUM</h1>
      </div>

      {/* Kolom Kanan */}
      <div className="flex flex-col justify-between items-end">
        <div className="text-white flex flex-col gap-4 text-3xl items-end">
          <h1>Contact</h1>  
          <h1>Social</h1>  
          <h1>Github</h1>  
        </div>
        <img src={arrow} alt="arrow" className="w-10 mb-10" />
      </div>
    </footer>
  )
}
