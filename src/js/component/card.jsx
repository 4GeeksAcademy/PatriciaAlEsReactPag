import React from "react";
import "../../styles/card.css"


const Card = () => {
    return (

        <div className="carta container col-sm-12 col-md-6 col-lg-3">
            <img className="card-img-top pt-3" src="https://i.pinimg.com/236x/cb/29/99/cb29999a9ca512c52a9edd2268230904.jpg" alt="Card image cap" />
            <div className="card-body">
                <p className="card-text p-4">
                    El cuerpo de los gatos es muy flexible y rápido, está diseñado para la caza, con sus garras, su agilidad y su precisión, en especial nocturna, ya que sus ojos le ayudan a ver en la oscuridad y en solitario. Su cuerpo le permite acechar, saltar, trepar, caer de pie y con precisión y mantenerse a salvo de largas caídas, puede voltearse rápido y caer de pie también desde lugares muy bajos.
                </p>
                <div className="d-flex justify-content-center">
                    <a href="#" className="mb-4 btn btn-light">Michiboton</a>
                </div>
            </div>
        </div>

    );
};

export default Card;
