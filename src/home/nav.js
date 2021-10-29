import React from "react";

import "../assist/css/nav.css";

const NavUI = () => {
    return (
        <nav>
            <div className="icons_section">
                <img className="main_logo" src="https://raw.githubusercontent.com/IronFinance/iron-frontend-v1/master/src/assets/img/IRON-logo.png" alt="logo" />
                <h1 className="heading">Solbitrage</h1>
            </div>

            <div className="option_section">
                <div className="root_section">
                    <p className="options">Doc</p>
                    <p className="options">Twitter</p>
                    <p className="options">Discord</p>
                    <button className="btn_app">Enter App</button>
                </div>


            </div>
        </nav>
    )
}

export default NavUI;