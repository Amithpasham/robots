
import React from "react";
import "./Pop.css"

const Popup = ({popup, imgsrc, details}) => {
    return(
        <div className="popup-back">
            <div className="popup-container">
                <div className="popup-close" onClick={popup}>x</div>
                <div className="popup-content">
                    <img className="image" src={imgsrc}/>
                    <div className="details">
                        <p>Name: {details.name}</p>
                        <p>Email: {details.email}</p>
                        <p>Company: {details.company.name}</p>
                        <p>User name: {details.username}</p>
                        <p>Phone: {details.phone}</p>
                        <p>Website: {details.website}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Popup;