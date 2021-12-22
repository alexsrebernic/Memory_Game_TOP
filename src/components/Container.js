import { Score } from "./components-container/Score"
import { Game } from "./components-container/Game"
export const Container = () => {
    return(
        <div  id="container">
            <Score/>
            <Game/>
        </div>
    )
}