import { useEffect, useState } from "react"
import { Card } from "react-bootstrap"
const colors = [{backgroundColor:"#c0392b",value:"red"},{backgroundColor:"#8e44ad",value:"purple"},{backgroundColor:"#3498db",value:'lightBlue'},{backgroundColor:"#48c9b0",value:'navyGreen'},{backgroundColor:"#145a32",value:'darkGreen'},{backgroundColor:"#f1c40f",value:'yellow'},{backgroundColor:"#dc7633",value:'orange'},{backgroundColor:"#d0d3d4",value:"gray"},{backgroundColor:"#212f3c",value:"black"}]

export const Game = (props) => {
    let [arrayOfColors,setArrayOfColors] = useState(colors)
    let [arrayOfSuccesfulColors,setArrayOfSuccesfulColors] = useState([])
    const shuffleArray = ((array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    })(arrayOfColors)
    const selectBackgroundColor = (index) => {
        return {backgroundColor : arrayOfColors[index].backgroundColor}
    }
    const selectValue = (index) => {
        return arrayOfColors[index].value
    }
    useEffect(() => {
     setArrayOfColors(arrayOfColors)
     if(arrayOfSuccesfulColors.length === 9){
         props.setScore(0)
        document.getElementById('you-win-message').style.color = "black"
     } else {
        document.getElementById('you-win-message').style.color = "white"
     }
    },[arrayOfColors,arrayOfSuccesfulColors.length])

    function clickColor(e){
         if(arrayOfSuccesfulColors.indexOf(e.target.id) === -1){
            setArrayOfSuccesfulColors((prevArray)=>prevArray.concat(e.target.id))
            props.onClick()

        } else if(arrayOfSuccesfulColors.indexOf(e.target.id) !== -1){
            if(props.score > props.highscore) props.setHighScore(props.score)
            setArrayOfSuccesfulColors([])
            props.setScore(0)
        }
       
    }
    
    return (
        <div id="game-container" className="container h-75  ">
            <div className="row align-items-start" id="box-container">
                <div className="col">
                    <Card role='button' onClick={clickColor} className="mb-1" id={selectValue(0)}  style={selectBackgroundColor(0)}>
                    </Card>
                    <Card role='button' onClick={clickColor} className="mb-1" id={selectValue(1)} style={selectBackgroundColor(1)}>
                    </Card>
                    <Card role='button' onClick={clickColor} className="mb-1" id={selectValue(2)} style={selectBackgroundColor(2)} >
                    </Card>

                </div>
                <div className="col">
                    <Card role='button' onClick={clickColor} className="mb-1" id={selectValue(3)} style={selectBackgroundColor(3)}>  
                    </Card>
                    <Card role='button' onClick={clickColor} className="mb-1" id={selectValue(4)}  style={selectBackgroundColor(4)}>
                    </Card>
                    <Card role='button' onClick={clickColor} className="mb-1" id={selectValue(5)} style={selectBackgroundColor(5)}>
                    </Card>

                </div>
                <div className="col">
                    <Card role='button' onClick={clickColor} className="mb-1" id={selectValue(6)} style={selectBackgroundColor(6)}>
                    </Card>
                    <Card role='button' onClick={clickColor} className="mb-1" id={selectValue(7)} style={selectBackgroundColor(7)}>
                    </Card>
                    <Card role='button' onClick={clickColor} className="mb-1" id={selectValue(8)} style={selectBackgroundColor(8)}>
                    </Card>

                </div>
              
            </div>
        </div>
    )
}