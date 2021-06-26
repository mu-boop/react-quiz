import Quiz from './quiz';
import {useSelector} from 'react-redux';
import {useState } from 'react';
function Home(){

  let mughees = useSelector(mughees => mughees);  
  console.log(mughees)
  return(
    <div>
        <Quiz />       
    </div>
    )
}

export default Home;