import { motion } from 'motion/react'
import gambar from '../assets/webp/4525024da3e88af80c42636717f720df_1_4x.webp'
import arrowBlack from '../assets/svg/arrow-cool-down.svg'
import RevealText from '../components/RevealText.tsx'

export default function HomeSection() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <RevealText
        text="AETERNUM"
        className="pointer-events-none absolute left-1/2 z-0 w-fit whitespace-nowrap -translate-x-1/2 text-center font-pillar text-[1100px] leading-none"
      />

      <motion.img
        src={gambar}
        decoding="async"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-1/2 top-1/2 z-10 w-184 -translate-x-1/2 -translate-y-1/2 will-change-transform"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-0 right-0 top-220 flex flex-row justify-between px-6 text-4xl will-change-transform"
      >
        <h1 className="font-readex">ambition</h1>
        <h1 className="font-readex">mortality</h1>
        <h1 className="font-readex">existence</h1>
        <h1 className="font-readex">desire</h1>
        <h1 className="font-readex">legacy</h1>
        <h1 className="font-readex">identity</h1>
        <h1 className="font-readex">suffering</h1>
      </motion.div>

      <motion.img
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        src={arrowBlack}
        alt=""
        className="absolute bottom-6 left-1/2 z-30 w-10 -translate-x-1/2 will-change-transform"
      />
    </div>
  )
}
