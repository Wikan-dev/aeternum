import gambar from '../assets/webp/4525024da3e88af80c42636717f720df_1_4x.webp'
import arrowBlack from '../assets/svg/arrow-cool-down.svg'

export default function HomeSection() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <h1 data-aos="fade-up" data-aos-delay="200" className="pointer-events-none absolute left-1/2 z-0 w-fit -translate-x-1/2 text-center font-pillar text-[1100px] leading-none">
        AETERNUM
      </h1>

      <img src={gambar} data-aos="fade-up" data-aos-delay="300" className="absolute left-1/2 top-1/2 z-10 w-184 -translate-x-1/2 -translate-y-1/2" />

      <div data-aos="fade-up" data-aos-delay="500" className="absolute left-0 right-0 top-220 flex flex-row justify-between px-6 text-4xl">
        <h1 className="font-readex">ambition</h1>
        <h1 className="font-readex">mortality</h1>
        <h1 className="font-readex">existence</h1>
        <h1 className="font-readex">desire</h1>
        <h1 className="font-readex">legacy</h1>
        <h1 className="font-readex">identity</h1>
        <h1 className="font-readex">suffering</h1>
      </div>

      <img
        src={arrowBlack}
        alt=""
        className="absolute bottom-6 left-1/2 z-30 w-10 -translate-x-1/2"
      />
    </div>
  )
}
