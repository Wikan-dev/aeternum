import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import HomeSection from './section/HomeSection.tsx';
import Beginning from './section/Beginning.tsx';
import Question from './section/Question.tsx';
import Explanation from './section/Explanation.tsx';
import Footer from './section/Footer.tsx';

export default function App() {
  useEffect(() => {
    //smooth scroll
    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.08,
      smoothWheel: true,
    });
    //kalo reload biar ke atas
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <div className='px-20 overflow-x-clip'>
        <HomeSection /> 
        <Beginning /> 
        <Question /> 
        <Explanation /> 
      </div>
      <Footer />
    </>
  )
}
