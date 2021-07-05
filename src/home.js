import Quiz from './quiz';
import {useSelector} from 'react-redux';
function Home(){

  let mughees = useSelector(mughees => mughees);  
  console.log(mughees.questions[0].question)
  console.log(mughees.questions[0].answer)
  console.log(mughees.questions[0].correct)
  return(
    <div>
        <Quiz />       
    </div>
    )
}

export default Home;