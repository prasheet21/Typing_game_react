import React, { useEffect, useState } from 'react' ;
import './App.css' ;
import Typical from 'react-typical' ;
import TextSolution from './components/TextSolution'; 
import TextFollowed from './components/TextFollowed';
import TopPanel from './components/TopPanel' ;
const randomParagraph = require('random-paragraph')  ;

const App = () => {

  let some ;

  const [text , setText] = useState(randomParagraph({ sentences : 2 })) ;
  let [time , setTime] = useState(60) ;
  const [characterCount , setCharacterCount] = useState(0) ;
  const [ mistakes , setMistakes ] = useState(0) ;
  const [solVal , setSolVal] = useState('') ;
  const transferToTextFollowed = (solValue) => {
      setSolVal(solValue) ;
  }

  const startTimer = () => {
    some = setInterval(() => {
      time = time - 1 ; 
      setTime(time) ;
      console.log(time) ;
      if (time == 0){
        clearInterval(some) ;
      }
    },1000) ;

  }

  // const setMistakesCount = (color) => {
  //   console.log(color)
    
  // }

  const handleOnGameStart = () => {
    startTimer() ;
  }

  useEffect(() => {
    if (time == 0){
      //Redirect to the result page
      console.log("Game completed") ;
    }
  })
  
  return (
    <div className='typingTest'>
      <h2 className='heading'>
        Typing Test (Game)
      </h2>
      <div className='typing-panel'>
        
        <TopPanel total = {text.length - text.split(' ').length} mistakes = {mistakes} cpm={characterCount} time={time}/>
        <TextFollowed text={text} solText={solVal} setMistakesCount = {() => {setMistakes(prevVal => prevVal + 1)}} />
        <TextSolution transfer={transferToTextFollowed} handleOnGameStart = {handleOnGameStart} setCharacterCount = {setCharacterCount} />
        <div className='restart-game'>
        <button onClick={(e) => {
          setText(randomParagraph({ sentences : 2 })); 
          clearInterval(some)
          setTime(60) ;
          setCharacterCount(0)
        }}>Restart</button>
      </div>
      </div>
      
 
    </div>
  ) ;
}

export default App ;