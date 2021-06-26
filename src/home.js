import Quiz from './quiz';
import {useSelector} from 'react-redux';
import {useState , useEffect} from 'react';
function Home(){

    const [quiz , setQuiz] = useState()
   fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => {
    setQuiz(json)
  });

  console.log(quiz[0].title)
  let mughees = useSelector(mughees => mughees);  
  console.log(mughees)
  return(
    <div>
        <Quiz />       
    </div>
    )
}

export default Home;