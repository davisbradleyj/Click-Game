import React from "react";
import "./navbar.css"

function Navbar(props){
    return (
        <div>
            <nav className="navbar fixed-top">
                <h4> {props.status} </h4>
                <h2 className="pl-5"> What Do You Meme? </h2>
                <h5> Score: {props.score} | High Score: {props.highScore} </h5>
            </nav>
        </div>
    )
}

export default Navbar