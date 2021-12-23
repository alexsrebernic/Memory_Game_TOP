import { Score } from "./components-container/Score"
import { Game } from "./components-container/Game"
import { useState } from "react"
export const Container = () => {
    let [score,setScore] = useState(0)
    let [highscore,setHighScore] = useState(0)
    const updateScore = () => {
        setScore(prevScore => prevScore + 1)
    }
    return(
        <div  id="container">
            <Score score={score} highscore={highscore}/>
            <Game onClick={updateScore} setScore={setScore} setHighScore={setHighScore} highscore={highscore} score={score}/>
            <h3 id="you-win-message" className="text-center">You Win!</h3>

        </div>
    )
}