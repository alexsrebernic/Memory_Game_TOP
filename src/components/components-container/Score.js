export const Score = (props) => {
    return(
        <div className="mt-5" id="score-container">
            <div className="text-center" id="current-score">
                Current score : {props.score}
            </div>
            <div className="text-center" id="best-score-container">
                Best score : {props.highscore}
            </div>
        </div>
    )
}