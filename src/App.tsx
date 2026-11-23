import HomeSection from './section/HomeSection.tsx';
import Beginning from './section/Beginning.tsx';
import Question from './section/Question.tsx';
import Explanation from './section/Explanation.tsx';

export default function App() {
  return ( 
    <div className='px-20'>
      <HomeSection /> 
      <Beginning /> 
      <Question /> 
      <Explanation /> 
    </div>
  )
}
