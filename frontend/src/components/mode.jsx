import { useState } from "react";

function Mode() {
    const [showPopup, setShowPopup] = useState(false);
    const [popupData, setPopupData] = useState({
        title: "",
        message: "",
        mode: "", 
    });
    const [lettersOption, setLettersOption] = useState("random");

    const handleSinglePlayer = (e) => {
        e.preventDefault();
        setPopupData({
            title: "Single Player",
            message: "You selected Single Player mode.",
            mode: "single",
        });
        setShowPopup(true);
    };

    const handleMultiplayer = (e) => {
        e.preventDefault();
        setPopupData({
            title: "Multiplayer",
            message: "You selected Multiplayer mode.",
            mode: "multiplayer",
        });
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <>
            <div className="container py-4 d-flex flex-column justify-content-center align-items-center min-vh-100">
                <h2 className="mb-4 text-center">Choose Game Mode</h2>
                <div className="row justify-content-center g-4 w-100">
                    <div className="col-md-4">
                        <button
                            type="button"
                            className="card border-0 shadow-lg w-100 h-100 text-decoration-none text-dark p-0"
                            onClick={handleSinglePlayer}
                        >
                            <div className="card-body text-center py-5">
                                <h3 className="card-title fw-semibold">Single Player</h3>
                                <p className="card-text text-muted mt-2">Play alone and test your skills</p>
                            </div>
                        </button>
                    </div>

                    <div className="col-md-4">
                        <button
                            type="button"
                            className="card border-0 shadow-lg w-100 h-100 text-decoration-none text-dark p-0"
                            onClick={handleMultiplayer}
                        >
                            <div className="card-body text-center py-5">
                                <h3 className="card-title fw-semibold">Multiplayer</h3>
                                <p className="card-text text-muted mt-2">Challenge others in a live match</p>
                            </div>
                        </button>
                    </div>
                </div>

                {showPopup && (
                    <div
                        className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50"
                        style={{ zIndex: 1050 }}
                    >
                        <div className="card shadow-lg" style={{ width: "100%", maxWidth: "525px" }}>
                            <div className="card-body">
                                <div className="position-relative mb-3">
                                    <h5 className="card-title card-text text-center w-100 mb-0">{popupData.title}</h5>
                                    <button
                                        type="button"
                                        className="btn-close position-absolute top-0 end-0 m-2"
                                        onClick={closePopup}
                                        aria-label="Close"
                                    ></button>
                                </div>

                                <p className="card-text">{popupData.message}</p>

                                <div className="d-flex flex-column gap-3">
                                    {popupData.mode === "multiplayer" && (
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
                                    )}

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

                                    <div className="row align-items-center">
                                        <label className="col-4 col-form-label">Letters</label>
                                        <div className="col-8">
                                            <div className="d-flex flex-column gap-2">
                                                <div className="form-check d-flex align-items-center gap-3">
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

                                                <div className="form-check d-flex align-items-center gap-3">
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