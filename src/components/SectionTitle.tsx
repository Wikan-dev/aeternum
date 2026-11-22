interface SectioniTitleProps {
  title: string;
}

export default function SectionTitle({ title }:SectioniTitleProps) {
  return (
    <div className='w-full flex flex-row justify-between'>
      <h1 className='font-readex text-xl tracking-[10px]'>{title}</h1>
      <h1 className='font-readex text-xl tracking-[10px]'>{title}</h1>
    </div>
  )
}
