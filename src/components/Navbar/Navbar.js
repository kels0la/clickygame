import React from "react";
import "./Navbar.css";

const Navbar = props => {
    return (
        <nav className="navbar">

            <div className="brand"><a href="/">Clicky Game</a></div>
            <div className="guess">{props.rightWrong}</div>
            <div className="score">Current Score: {props.counter} / Top Score: {props.topScore}</div>

        </nav>
    )
}
export default Navbar;