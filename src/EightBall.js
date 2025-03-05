import React, {useState} from "react";
import defaultAnswers from "./answers.json";
import './EightBall.css'



const EightBall = ({answers = defaultAnswers}) =>  {
    const choice = (arr) => arr[Math.floor(Math.random() * arr.length)];

    const [answer, setAnswer] = useState({
        msg: "Think of a question.",
        color: "black"

    });

    function handleClick() {
        setAnswer(choice(answers))
    }

    return (    
        <div className="EightBall">
            <h1>Magic EightBall</h1>
            <div 
                className="EightBall-container"
                style={{backgroundColor:answer.color}}
                onClick={handleClick}>

                <h2 
                    className="EightBall-text"
                    style=
                    {{color:'white'}}>
                    {answer.msg} </h2>
            </div>
        </div>
    )
}

export default EightBall;