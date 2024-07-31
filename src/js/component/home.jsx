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
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
            <Navbar2 />
        </div>

    )
}

export default Home