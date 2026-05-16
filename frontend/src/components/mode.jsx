import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Mode() {
    const navigate = useNavigate();
    const [showPopup, setShowPopup] = useState(false);
    const [popupData, setPopupData] = useState({
        title: "",
        message: "",
    });

    const handleSinglePlayer = (e) => {
        e.preventDefault();
        setPopupData({
            title: "Single Player",
            message: "You selected Single Player mode.",
        });
    };

    const handleMultiplayer = (e) => {
        e.preventDefault();
         setPopupData({
            title: "Multiplayer",
            message: "You selected Multiplayer mode.",
        });
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <>
            <div>
                <h2>Choose Game Mode</h2>
                <button className="btn btn-primary" onClick={handleSinglePlayer}>
                    Start Single Player
                </button>
                <button className="btn btn-primary" onClick={handleMultiplayer}>
                    Start Multiplayer
                </button>
            </div>
        </>
    );
}

export default Mode; 