import { Card } from "react-bootstrap"

const colors = ["#a93226","#3498db","#a93226","#2ecc71","#f4d03f","#d35400","#d35400","#616a6b","#17202a"]


export const Game = () => {
    return (
        <div id="game-container" className="container h-75 d-flex justify-content-center align-items-center">
            <div className="row align-items-start w-25">
                <div className="col">
                    <Card role='button' className="mb-1" onClick={() => console.log("asd")}>
                        <Card.Body>asd</Card.Body>
                    </Card>
                    <Card role='button' className="mb-1">
                        <Card.Body>asd</Card.Body>
                    </Card>
                    <Card role='button' className="mb-1">
                        <Card.Body>asd</Card.Body>
                    </Card>

                </div>
                <div className="col">
                    <Card role='button' className="mb-1">  
                        <Card.Body>asd</Card.Body>
                    </Card>
                    <Card role='button' className="mb-1">
                        <Card.Body>asd</Card.Body>
                    </Card>
                    <Card role='button' className="mb-1">
                        <Card.Body>asd</Card.Body>
                    </Card>

                </div>
                <div className="col">
                    <Card role='button' className="mb-1">
                        <Card.Body>asd</Card.Body>
                    </Card>
                    <Card role='button' className="mb-1">
                        <Card.Body>asd</Card.Body>
                    </Card>
                    <Card role='button' className="mb-1">
                        <Card.Body>asd</Card.Body>
                    </Card>

                </div>
              
            </div>
        </div>
    )
}