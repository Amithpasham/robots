import React from "react";

const Card = ({id,name,email,popup,b}) => {
    
    return(
        <button onClick={popup} style={{padding: 0, border: 0, background: "transparent", cursor: "pointer"}}>
            <div className="tc bg-light-green dib br3 pa3 ma2 shadow-2 grow">
                <img src={`https://robohash.org/${id}?200x200`} alt="robotsImage" id={b}/>
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
        </button>
    );
}

export default Card;