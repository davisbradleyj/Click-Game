import React from "react";
import "./navbar.css"

function Navbar(){
    return (
        <div>
            <nav className="navbar fixed-top">
                <h4> {props.status} </h4>
                <h3> What Do You Meme? </h3>
                <h4> Your Score: {props.score} | High Score: {props.highScore} </h4>
            </nav>
        </div>
    )
}

export default Navbar