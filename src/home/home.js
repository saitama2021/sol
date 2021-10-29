import React from "react";
import NavUI from "./nav";
import MainUI from "./main";
import ProtocolUI from "./protocol";


import '../assist/css/home.css'
import CommunityUI from "./community";
import PartnerUI from "./OurPartners";

const HomeUI = () => {
    return (
        <div style={{ width: "100vw", height: "auto", overflowX: "hidden" }}>
            <NavUI />
            <MainUI />
            <ProtocolUI />
            <CommunityUI />
            <PartnerUI />
        </div>
    )
}

export default HomeUI;