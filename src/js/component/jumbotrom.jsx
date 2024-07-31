import React from "react";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Jumbotron = () => {
    return (
        <>
            <div className="container bg-light">
                <div className="jumbotron p-5">
                    <h1 className="display-4">A Warm Welcome</h1>
                    <p className="lead">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed quae asperiores reprehenderit impedit fugiat hic placeat reiciendis rem itaque fuga excepturi harum quibusdam suscipit maxime a quod, sit veniam laborum.
                    </p>
                    <p className="lead">
                        <a className="btn btn-primary btn-lg" href="#" role="button"> Call action </a>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Jumbotron;

