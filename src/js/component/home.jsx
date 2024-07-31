import React from "react";


// // Include Bootstrap styles
// import 'bootstrap/dist/css/bootstrap.min.css';

// Import your own components
import Jumbotrom from "./jumbotrom.jsx";
import Navbar, { Navbar2 } from "./navbar.jsx";

import Card from "./card.jsx";

const Home = () => {
    return (
        <div className="fondo bg-light">
            <Navbar />
            <div className="container">
                <Jumbotrom />
                <div className="row d-flex justify-content-between">
                    <Card
                        image="https://i.pinimg.com/236x/cb/29/99/cb29999a9ca512c52a9edd2268230904.jpg"
                        text="Al igual que sus parientes salvajes, los gatos domésticos son cazadores natos, capaces de acechar a sus presas y abalanzarse sobre ellas con sus garras y dientes. Son particularmente eficaces de noche, cuando sus ojos reflectantes les dotan de una visión mucho más nítida que la de sus víctimas. También poseen un oído muy agudo. Al igual que todos los felinos, son ágiles y rápidos y sus largas colas les ayudan a tener un extraordinario sentido del equilibrio.."
                        buttonText="Michiboton"
                        link="#"
                        
                    />
                    <Card
                        image="https://i.pinimg.com/236x/e1/80/37/e18037bd65a0d58717a34f7abb5c3c19.jpg"
                        text="Los gatos son amor. Son animales bellos, juguetones y cariñosos, por lo cual hemos generado una intensa relación afectiva con ellos, llegando a  ignorar sus efectos negativos como depredadores de otras especies.  Los domesticamos en la zona del Medio Oriente hace unos nueve mil años con el fin de que nos ayudaran a eliminar a los roedores y otros animales molestos que se metían a nuestras casas y graneros, de este modo el proceso de domesticación no disminuyó sus capacidades como cazadores. "
                        buttonText="Michiboton"
                        link="#"
                    />
                    <Card
                        image="https://i.pinimg.com/236x/51/f5/e1/51f5e1b7a0472835b98b383f495dd805.jpg"
                        text="El cuerpo de los gatos es muy flexible y rápido, está diseñado para la caza, con sus garras, su agilidad y su precisión, en especial nocturna, ya que sus ojos le ayudan a ver en la oscuridad y en solitario. Su cuerpo le permite acechar, saltar, trepar, caer de pie y con precisión y mantenerse a salvo de largas caídas, puede voltearse rápido y caer de pie también desde lugares muy bajos. De forma similar a su ancestro silvestre, y a otros felinos, los gatos domésticos están físicamente adaptados para atrapar presas."
                        buttonText="Michiboton"
                        link="#"
                    />
                    <Card
                        image="https://i.pinimg.com/236x/1e/82/68/1e82682165e431e79c5c389d44a53304.jpg"
                        text="La domesticación es un proceso donde modificamos a especies de animales o plantas para que tengan características que nos interesan. En el caso del gato, este proceso se llevó a cabo en Egipto y el Medio Oriente. Lo que nos interesaba era volver a los gatos más amistosos y menos agresivos con nosotros, sin que perdieran sus habilidades de cazador, por lo que es el animal doméstico al que le hemos alterado menos su morfología y conducta. El ancestro silvestre del gato doméstico es el silvestre africano. "
                        buttonText="Michiboton"
                        link="#"
                    />

                </div>
            </div>
            <Navbar2 />
        </div>

    )
}

export default Home