import React from "react";

import '../assist/css/community.css'

const CommunityUI = () => {
    return (

        <div style={{ width: "100vw" }}>

            <h1>Communiy</h1>

            <div style={{ display: "flex", justifyContent: 'center' }}>

                <div className="root_container_comm">

                    <div className="item_conainer_comm">
                        <div className="logo_sec">
                            <img src="https://iron.finance/static/community-discord-42ddbfa4310a6823b7d1912d4ea350e7.png" alt="logo" />
                        </div>

                        <div className="item_content">
                            <p style={{ fontSize: "6vh", marginBottom: '-2vh', fontWeight: "bold" }}>11K+</p>
                            <p>Discord Member</p>
                        </div>
                    </div>


                    <div className="item_conainer_comm">
                        <div className="logo_sec">
                            <img src="https://iron.finance/static/community-twitter-a35aee326210afaa2fc6b7554a02530f.png" alt="logo" />
                        </div>

                        <div className="item_content">
                            <p style={{ fontSize: "6vh", marginBottom: '-2vh', fontWeight: "bold" }}>31K+</p>
                            <p>Twitter Followers</p>
                        </div>
                    </div>


                    <div className="item_conainer_comm">
                        <div className="logo_sec">
                            <img src="data:image/png;base64,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" alt="logo" />
                        </div>

                        <div className="item_content">
                            <p style={{ fontSize: "6vh", marginBottom: '-2vh', fontWeight: "bold" }}>12K+</p>
                            <p>Holders</p>
                        </div>
                    </div>


                </div>

            </div>

        </div>




    )
}

export default CommunityUI;