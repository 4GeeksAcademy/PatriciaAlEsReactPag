import React from "react";
import "../../styles/jumbotrom.css"


const Jumbotron = () => {
    return (
        <div className="jumbotrom row">
            <div className="container-fluid">
                <div className="jumbotron p-5">
                    <h1 className="display-4"><strong>Bienvenidos a Michilandia 🐈 </strong></h1>
                    <p className="lead">
                        Durante la historia humana, los gatos han sido tratados de muchas formas de acuerdo a la época en la que viven, como por ejemplo, en el Antiguo Egipto era venerado y considerado como un símbolo religioso. La diosa Bástis era representada como gato. En muchos museos egipcios hay figuras de estos animales y en la Edad Media era quemado en hogueras porque ellos creían que eran asociados con el demonio, los odiaban y les temían porque eran "la mejor compañía de las brujas".
                    </p>
                    <p className="lead">
                        <a className="btn btn-dark btn-lg" href="#" role="button"> Adopta un Miau</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Jumbotron;
