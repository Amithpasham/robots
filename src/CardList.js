import React from "react";
import Card from "./Card";

const CardList = ({robots, popup}) => {
    return(
        <div>
            {robots.map((robot,i) => <Card id={robot.id} name={robot.name} email={robot.email} key={i} popup={popup} b={i}/>)}
        </div>
    );
}

export default CardList;