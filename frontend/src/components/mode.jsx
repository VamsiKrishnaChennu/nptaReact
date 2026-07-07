import { useState } from "react";

function Mode() {
    const [showPopup, setShowPopup] = useState(false);
    const [popupData, setPopupData] = useState({
        title: "",
        message: "",
    });
    const [lettersOption, setLettersOption] = useState("random");

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
        console.log("Multiplayer mode selected");
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <>
            <div className="container py-4">
                <h2>Choose Game Mode</h2>
                <div className="d-flex justify-content-center gap-2 mt-3">
                    <button type="button" className="btn btn-primary" onClick={handleSinglePlayer}>
                        Start Single Player
                    </button>
                    <button type="button" className="btn btn-primary" onClick={handleMultiplayer}>
                        Start Multiplayer
                    </button>
                </div>

                {showPopup && (
                    <div
                        className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50"
                        style={{ zIndex: 1050 }}
                    >
                        <div className="card shadow-lg" style={{ width: "100%", maxWidth: "420px" }}>
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h5 className="card-title card-text mb-0">{popupData.title}</h5>
                                    <button type="button" className="btn-close" onClick={closePopup}></button>
                                </div>

                                <p className="card-text">{popupData.message}</p>

                                <div className="d-flex flex-column gap-3">
                                    <div className="row align-items-center">
                                        <label className="col-4 col-form-label">Players count</label>
                                        <div className="col-8">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter players count"
                                            />
                                        </div>
                                    </div>

                                    <div className="row align-items-center">
                                        <label className="col-4 col-form-label">Rounds count</label>
                                        <div className="col-8">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter rounds count"
                                            />
                                        </div>
                                    </div>

                                    <div className="row align-items-start">
                                        <label className="col-4 col-form-label">Letters</label>
                                        <div className="col-8">
                                            <div className="d-flex flex-column gap-2">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="lettersOption"
                                                        id="lettersRandom"
                                                        value="random"
                                                        checked={lettersOption === "random"}
                                                        onChange={() => setLettersOption("random")}
                                                    />
                                                    <label className="form-check-label" htmlFor="lettersRandom">
                                                        Random
                                                    </label>
                                                </div>

                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="lettersOption"
                                                        id="lettersSelective"
                                                        value="selective"
                                                        checked={lettersOption === "selective"}
                                                        onChange={() => setLettersOption("selective")}
                                                    />
                                                    <label className="form-check-label" htmlFor="lettersSelective">
                                                        Selective
                                                    </label>
                                                </div>

                                                {lettersOption === "selective" && (
                                                    <div>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Enter letters separated by comma"
                                                        />
                                                        <small className="text-muted">Eg: A, B, C</small>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-end gap-2 mt-4">
                                    <button className="btn btn-secondary" onClick={closePopup}>
                                        Cancel
                                    </button>
                                    <button className="btn btn-primary">Start</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Mode; 