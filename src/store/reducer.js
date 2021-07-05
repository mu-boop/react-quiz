const INITIAL_DATA = {
    name:'mughees',
    questions : [{
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

}

let reducer = (state = INITIAL_DATA , action)=>{
    console.log(action)
    return state
}

export default reducer;