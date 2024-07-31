import React from "react";
import "../../styles/card.css";

const Card = ({ image, text, buttonText, link }) => {
    return (
        <div className="carta container col-sm-12 col-md-6 col-lg-3">
            <img className="card-img-top pt-3" src={image} alt="imagen de gato" />
            <div className="card-body">
                <p className="card-text p-4">
                    {text}
                </p>
                <div className="d-flex justify-content-center">
                    <a href={link} className="mb-4 btn btn-light">
                        {buttonText}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Card;
