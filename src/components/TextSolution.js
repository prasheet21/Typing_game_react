import React, { useRef, useState } from 'react';
import './style/TextSolution.css';

const TextSolution = ({ transfer, setCharacterCount, startTimer , handleOnGameStart }) => {

    let focusInput = useRef();
    const [ gameStarted , setGameStarted ] = useState(false) ;
    const [ inputDisabled , setInputDisabled ] = useState(true) ;

    return (
        <div className='TextSolution'>
            <textarea
            onKeyPress = {(e) => {
                console.log("On backspace pressed called with key : " , e.key) ;
            }}
            disabled={inputDisabled}  ref={focusInput}
                onChange={(e) => {
                    transfer(e.target.value);
                    console.log(e.target.value.length) ;
                    setCharacterCount(e.target.value.length)
                }}

            ></textarea>

            <button disabled={gameStarted} onClick={(e) => {
                handleOnGameStart();
                setGameStarted(prevVal => !prevVal) ;
                setInputDisabled(prevVal => !prevVal) ;
            }}>Start Game</button>
        </div>
    );
}

export default TextSolution;