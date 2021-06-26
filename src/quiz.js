import {useState} from 'react';


function Quiz(){
    const [count , setCount] = useState(0)
    const [ans , setAns] = useState('')
    const [score , setScore] = useState(0)
    const[result , setResult] = useState(false)
    const [next ,setNext] = useState(false)
   let questions = [{
      question:'How many basics of islam?',
      answer:['2','4','3','5'],
      correct:  '5'
    },
    {
      question:'Nabi Kareem (Peace be upon him) perform his first hajj at the age of?',
      answer:['60','53','50','63'],
      correct:  '63'
    },
    {
      question:'The naration of Housefly is in surah?',
      answer:['noor','fatiha','ankaboot','mulk'],
      correct:  'ankaboot'
    }
  ]
    return(
        <div>
             {!result?<div className='container  rounded shadow bg-primary py-4 animat'>
        <div className='col-md-12 text-center py-3'><h1 className='text-light'>Quiz App</h1></div>
          <div className='col-md-12 pb-5 text-center text-light'>
            <h3>{questions[count].question}</h3>
            <div className='container'>
            {questions[count].answer.map((e,i)=>{
              return <div className='col-md-10 m-auto py-2'key={i}>
              <button className='p-2 w-100 border shadow rounded bg-light' onClick={()=>{ 
                setAns(e)
                setNext(true)
                }} >{e}</button>
          </div>
            })}
            </div>
            {next?<div className='container'>
              <div className='col-md-10 m-auto'>
              <button className='btn btn-success shadow w-100 py-3 mt-5' onClick={()=> {
                if(ans == questions[count].correct){
                  setScore(score+1)
                  console.log(score)
                  setCount(count+1)
                  setNext(false)
               }else{
                 console.log(score)
                setCount(count+1)
                setNext(false)
               }
               if(count === questions.length-1  ){
                  setResult(true)
               }
              }}>Next</button>
              </div>
            </div>:null}
        </div>
      </div>:null}
              {result?<div className='container animat justify-content-center rounded shadow bg-success'>
                <div className='row d-flex justify-content-center'>
                <div className='col-md-12  text-center btn-dark text-light border mb-4 rounded shadow py-2'><h2>Result</h2></div>
                  <div className='col-md-10  text-center bg-light border my-3 rounded shadow py-2'><h2>Score:{score}</h2></div>
                  <div className='col-md-10  text-center bg-light border my-3 rounded shadow py-2'><h2>Percentage:{(score/questions.length)*100}%</h2></div>
                  <div className='col-md-10  text-center bg-light border my-4 rounded shadow py-2'><h2>Status:{(score/questions.length)*100<60?'Fail':'Pass'}</h2></div>
                  <button className='p-2 w-100 border shadow rounded bg-secondary text-light ' onClick={()=> {
                    setResult(false);
                    setCount(0);
                    setScore(0)
                  }} >Go to Quizz</button>
                </div>
              </div>:null}
        </div>
    )
}

export default Quiz;