import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import "../styles/home.css";

function Home() {
    const navigate = useNavigate();
    const [showLogin, setShowLogin] = useState(false);
    const [showLoginText, setShowLoginText] = useState(false);
    const [activeForm, setActiveForm] = useState("login");

    const openLoginPopup = () => {
        setActiveForm("login");
        setShowLogin(true);
    };

    const closeLoginPopup = () => {
        setShowLogin(false);
        setActiveForm("login");
    };

    return (
        <div className="home-page">
            <div className="container py-4 position-relative home-shell">
                {/* User Icon at Top Right */}
                <div className="d-flex justify-content-end">
                    <button
                        type="button"
                        className="btn btn-outline-secondary d-flex align-items-center gap-2 home-user-button"
                        onClick={openLoginPopup}
                        onMouseEnter={() => setShowLoginText(true)}
                        onMouseLeave={() => setShowLoginText(false)}
                        aria-label="Open login"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                        </svg>
                        <span className="home-login-text">{showLoginText ? "Login" : ""}</span>
                    </button>
                </div>

                {/* NPTA Title */}
                <div className="text-center mt-2 pt-3">
                    <h1 className="display-2 fw-bold home-title">NPTA</h1>

                    {/* Dashboard and Game Cards */}
                    <div className="row justify-content-center mt-5 g-4">
                        <div className="col-md-4">
                            <button
                                type="button"
                                className="card border-0 w-100 h-100 text-decoration-none text-dark p-0 home-card-btn"
                                onClick={() => navigate("/mode")}
                            >
                                <div className="card-body py-5">
                                    <h3 className="card-title fw-semibold home-card-title">Dashboard</h3>
                                    <p className="card-text mt-2 home-card-text">Go to game dashboard</p>
                                </div>
                            </button>
                        </div>

                        <div className="col-md-4">
                            <button
                                type="button"
                                className="card border-0 w-100 h-100 text-decoration-none text-dark p-0 home-card-btn"
                                onClick={() => navigate("/mode")}
                            >
                                <div className="card-body py-5">
                                    <h3 className="card-title fw-semibold home-card-title">Game</h3>
                                    <p className="card-text mt-2 home-card-text">Start playing now</p>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Login Popup */}
            {showLogin && (
                <div
                    className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center home-overlay"
                    style={{ zIndex: 1050 }}
                >
                    <div className="card home-popup-card" style={{ width: "100%", maxWidth: "420px" }}>
                        <div className="card-body p-4">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="card-title mb-0">{activeForm === "signup" ? "REGISTER" : "LOGIN"}</h4>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={closeLoginPopup}
                                    aria-label="Close"
                                ></button>
                            </div>

                            <p className="card-text text-muted mb-4">
                                {activeForm === "signup" ? "Create a new account" : "Please log in to continue:"}
                            </p>

                            {activeForm === "signup" ? <Signup /> : <Login compact onSwitchToSignup={() => setActiveForm("signup")} />}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Home;
