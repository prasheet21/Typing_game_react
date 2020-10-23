import React, {useEffect, useState} from 'react' ;
import './style/TextFollowed.css' ;


const TextFollowed = ({text, solText }) => {
   
    console.log("Starting new TextFollowed") ;
    return (
        <div className='TextFollowed'>
            {
                text.split('').map((data , index) => {
                    let color = '' ;
                    if(solText[index] === undefined)
                        color = 'yellow' ;
                    else if (data === solText[index])
                        color = 'green' ;
                    else {
                        color = 'red' ;
                    }                    
                    return <span style={{color : color}}>{data}</span>     
                })
         
            }
        </div>
    ) ;
}

export default TextFollowed ;
