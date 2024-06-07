import React, { useState } from "react";

//create your first component
const Home = () => {
    const [selectedColor, setSelectedColor] = useState("red");

    const changeColor = () => {
        if (selectedColor === "red") {
            setSelectedColor("yellow");
        } else if (selectedColor === "yellow") {
            setSelectedColor("green");
        } else {
            setSelectedColor("red");
        }
    };

    return (
        <div className="text-center">       
            <div className="traffic-light-container">
                <div className={`light red ${selectedColor === "red" ? "glow" : ""}`}
                    onClick={() => setSelectedColor("red")}>
                    </div>
                <div className={`light yellow ${selectedColor === "yellow" ? "glow" : ""}`}
                    onClick={() => setSelectedColor("yellow")}>
                    </div>
                <div className={`light green ${selectedColor === "green" ? "glow" : ""}`}
                    onClick={() => setSelectedColor("green")}>
                    </div>
            </div>
            <button onClick={changeColor} className="btn btn-warning">Click to Change</button>
        </div>
    );
};

export default Home;