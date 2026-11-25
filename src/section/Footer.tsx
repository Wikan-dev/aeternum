import arrow from '../assets/svg/Vector.svg'
import RevealText from '../components/RevealText.tsx'
import ScrollReveal from '../components/ScrollReveal.tsx'

export default function Footer() {
  return (
    <footer className="bg-black min-h-[50vh] w-full p-10 grid grid-cols-3 font-readex overflow-hidden">
      {/* Kolom Kiri */}
      <div className="flex flex-col justify-between">
        <div className="text-white flex flex-col gap-4 text-3xl">
          <ScrollReveal direction="right" delay={0.1}><h1>Contact</h1></ScrollReveal>
          <ScrollReveal direction="right" delay={0.18}><h1>Social</h1></ScrollReveal>
          <ScrollReveal direction="right" delay={0.26}><h1>Github</h1></ScrollReveal>
        </div>
        <ScrollReveal direction="up" delay={0.2}>
          <img
            src={arrow}
            alt="arrow"
            className="w-10 mb-10"
          />
        </ScrollReveal>
      </div>

      {/* Kolom Tengah */}
      <div className="text-white font-pillar text-center flex items-center justify-center">
        <RevealText text="AETERNUM" className="text-[12vw] leading-none" />
      </div>

      {/* Kolom Kanan */}
      <div className="flex flex-col justify-between items-end">
        <div className="text-white flex flex-col gap-4 text-3xl items-end">
          <ScrollReveal direction="left" delay={0.1}><h1>Contact</h1></ScrollReveal>
          <ScrollReveal direction="left" delay={0.18}><h1>Social</h1></ScrollReveal>
          <ScrollReveal direction="left" delay={0.26}><h1>Github</h1></ScrollReveal>
        </div>
        <ScrollReveal direction="up" delay={0.2}>
          <img
            src={arrow}
            alt="arrow"
            className="w-10 mb-10"
          />
        </ScrollReveal>
      </div>
    </footer>
  )
}
