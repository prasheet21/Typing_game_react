import React, { useEffect, useState } from 'react';
import './App.css';
import Typical from 'react-typical';
import TextSolution from './components/TextSolution';
import TextFollowed from './components/TextFollowed';
import TopPanel from './components/TopPanel';
const randomParagraph = require('random-paragraph');

const App = () => {

  
  const [some, setSome] = useState(undefined);
  const [text, setText] = useState(randomParagraph({ sentences: 2 }));
  let [time, setTime] = useState(60);
  const [characterCount, setCharacterCount] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [solVal, setSolVal] = useState('');
  const transferToTextFollowed = (value) => {
    setSolVal(value);
    let mistakesCount = 0;
    text.split('').forEach((data, index) => { 
      if (value[index] === undefined)
        ;
      else if (data === value[index])
        ;
      else {
        mistakesCount++;
      }
    });
    setMistakes(mistakesCount);
  }

  const startTimer = () => {
    let s = setInterval(() => {
      time = time - 1;
      setTime(time);
      console.log(time);
      if (time === 0) {
        clearInterval(some);
      }
    }, 1000);
    setSome(s);
  }

  // const setMistakesCount = (color) => {
  //   console.log(color)

  // }

  const handleOnGameStart = () => {
    startTimer();
  }

  useEffect(() => {
    if (time === 0) {
      //Redirect to the result page
      console.log("Game completed");
    }
  })

  return (
    <div className='typingTest'>
      <h2 className='heading'>
        Typing Test (Game)
      </h2>
      <div className='typing-panel'>

        <TopPanel total={text.length - text.split(' ').length} mistakes={mistakes} cpm={characterCount} time={time} />
        <TextFollowed text={text} solText={solVal}/>
        <TextSolution transfer={(e) => transferToTextFollowed(e)} handleOnGameStart={(e) => handleOnGameStart(e)} setCharacterCount={(e) => setCharacterCount(e)} />
        <div className='restart-game'>
          <button onClick={(e) => {
            setText(randomParagraph({ sentences: 2 }));
            clearInterval(some)
            setTime(60);
            setCharacterCount(0)
          }}>Restart</button>
        </div>
      </div>


    </div>
  );
}

export default App;