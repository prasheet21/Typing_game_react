import React, {useState} from 'react' ;
import './style/TextFollowed.css' ;


const TextFollowed = ({text , solText , setMistakesCount}) => {
   
    console.log("Starting new TextFollowed") ;
    let color = '' ;
    return (
        <div className='TextFollowed'>
            {
                text.split('').map((data , index) => {
                    if(solText[index] === undefined)
                        color = 'yellow' ;
                    else if (data === solText[index])
                        color = 'green' ;
                    else{
                        color = 'red' ;
                        setMistakesCount() ;
                    }
                    
                    return <span style={{color : color}}>{data}</span>     
                })
         
            }
        </div>
    ) ;
}

export default TextFollowed ;
