import React from "react";
import ReactDOM from "react-dom/client";

// // Include Bootstrap styles
// import 'bootstrap/dist/css/bootstrap.min.css';

// Import your own components
import Jumbotrom from "./jumbotrom.jsx";
import Navbar from "./navbar.jsx";
import Card from "./card.jsx";

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <Jumbotrom />
                
                <div className="d-flex flex-wrap  justify-content-center">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>

    )
}

export default Home