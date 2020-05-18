import React from "react";
import "./card.css"

function Card (props){
    return (
        <div className="card">
            <img src={props.Meme} onClick={() => props.memeClick(props.id)} />
        </div>
    )
}





export default Card