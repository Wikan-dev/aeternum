import { useEffect } from 'react';
import Lenis from 'lenis';
import AOS from 'aos';
import 'lenis/dist/lenis.css';
import 'aos/dist/aos.css';
import HomeSection from './section/HomeSection.tsx';
import Beginning from './section/Beginning.tsx';
import Question from './section/Question.tsx';
import Explanation from './section/Explanation.tsx';

export default function App() {
  useEffect(() => {
    //smooth scroll
    const lenis = new Lenis({
      autoRaf: true,
    });
    //kalo reload biar ke atas
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    AOS.init({
      duration: 800,
      once: false,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return ( 
    <div className='px-20'>
      <HomeSection /> 
      <Beginning /> 
      <Question /> 
      <Explanation /> 
    </div>
  )
}
