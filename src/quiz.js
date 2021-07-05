import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import quiz from '../src/images/Background (5).png'


function Quiz(){
    const [count , setCount] = useState(0)
    const [ans , setAns] = useState('')
    const [score , setScore] = useState(0)
    const[result , setResult] = useState(false)
    const [next ,setNext] = useState(false)
    const [click , setClick] = useState()
    let mughees = useSelector(mughees => mughees);  
    console.log(score);
        mughees.score = score;
    mughees.clickAns = ans;
    console.log(mughees)
    return(
        <div>
          {/* <img src={quiz} className='quizimg' /> */}
             {!result?<div className='container  rounded shadow py-4 animat'>
        <div className='col-md-12 text-center py-3'><h1 className=''>Quiz App</h1></div>
          <div className='col-md-12 pb-5 text-center '>
            <h3>{mughees.questions[count].question}</h3>
            <div className='container'>
            {mughees.questions[count].answer.map((e,i)=>{
              return <div className='col-md-10 m-auto py-2'key={i}>
              <button className='p-1 w-100 border shadow rounded bg-light' onClick={()=>{ 
                setAns(e)
                setNext(true)
                }} >{e}</button>
          </div>
            })}
            </div>
            {next?<div className='container'>
              <div className='col-md-10 m-auto'>
              <button className='btn btn-dark shadow w-100 p-1 mt-3' onClick={()=> {
                let a = [];
                if(mughees.clickAns == mughees.questions[count].correct){
                  setScore(score+1)
                  setCount(count+1)
                  setNext(false)
               }else{
                setCount(count+1)
                setNext(false)
                a.push(ans)
                console.log(a)
               }
               if(count === mughees.questions.length-1){
                  setResult(true)
               }
              }}>Next</button>
              </div>
            </div>:null}
        </div>
      </div>:null}
              {result?<div className='container animat justify-content-center rounded shadow'>
                <div className='row d-flex justify-content-center'>
                <div className='col-md-12  text-center border mb-4 rounded shadow py-2'><h2>Quiz Result</h2></div>
                  <div className='col-md-10  text-center bg-light border my-3 rounded shadow py-2'><h2>Score:{mughees.score}</h2></div>
                  <div className='col-md-10  text-center bg-light border my-3 rounded shadow py-2'><h2>Percentage:{(mughees.score/mughees.questions.length)*100}%</h2></div>
                  <div className='col-md-10  text-center bg-light border my-4 rounded shadow py-2'><h2>Status:{(mughees.score/mughees.questions.length)*100<60?'Fail':'Pass'}</h2></div>
                  <button className='p-2 w-100 border shadow btn' onClick={()=> {
                    setResult(false);
                    setCount(0);
                    setScore(0)
                  }} >Go to Quizz</button>
                </div>
              </div>:null}
              {/* <div>{mughees.questions.map((v,i)=>{
                return(
                  <div>
                    <table className='w-100'>
                      <tr>
                        <td className='col-md-8'>{v.question}</td>
                        <td className='col-md-4'>{v.correct}</td>
                        <td>{mughees.clickAns}</td>
                      </tr>
                    </table>
                  </div>
                )
              })}</div> */}
        </div>
    )
}

export default Quiz;