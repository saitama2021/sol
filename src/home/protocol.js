import React from "react";
import '../assist/css/protocol.css';

const ProtocolUI = () => {
    return (

        <div style={{ width: "100vw", margin: 0, padding: 0 }}>
            <h1 >All-in-One DeFi Proocol</h1>

            <div className="root_card_container">

                <div className="card_conainer">
                    <div style={{ width: "100%", height: "auto", textAlign: 'center' }}>
                        <div style={{ width: "100%", height: "48vh" }}>
                            <img src='https://iron.finance/static/b0f7dc2e09f6401de7261ac5c319deff/07a17/protocol-swap.webp' alt="logo" />
                            <h4>Multi-chain Stableswap</h4>
                            <p>An automated market maker (AMM) protocol designed for swapping stable assets at ultra-low fees and near-zero slippage.</p>
                        </div>
                        <button className="card_btn">Use Stableswap</button>
                    </div>
                </div>

                <div className="card_conainer">
                    <div style={{ width: "100%", height: "auto", textAlign: 'center' }}>
                        <div style={{ width: "100%", height: "48vh" }}>
                            <img src='https://iron.finance/static/a255e9751f9ef9201a501a024cca5570/25ad3/protocol-liquidity.webp' alt="logo" />
                            <h4>Liquidity Protocol</h4>
                            <p>Isolated lending markets and elastic interest rates in a robust lending and borrowing money market for blue-chip assets with liquidity incentives.</p>
                        </div>
                        <button className="card_btn">Use Ironland</button>
                    </div>

                </div>


                <div className="card_conainer">
                    <div style={{ width: "100%", height: "auto", textAlign: 'center' }}>
                        <div style={{ width: "100%", height: "48vh" }}>
                            <img src='https://iron.finance/static/785e18b8006ea01af12d7baaadcf4ce4/c4070/protocol-farm.webp' alt="logo" />
                            <h4>Yield Farming</h4>
                            <p>A gas-efficient ecosystem for gaining extra yield and using dApps</p>
                        </div>
                        <button className="card_btn">Go To Farma</button>
                    </div>

                </div>

                <div className="card_conainer">
                    <div style={{ width: "100%", height: "auto", textAlign: 'center' }}>
                        <div style={{ width: "100%", height: "48vh" }}>
                            <img src='https://iron.finance/static/9826a73c8c8c7e98cc397e0904d0ab89/e524c/protocol-blue-ice.webp' alt="logo" />
                            <h4>Blue ICE</h4>
                            <p>Stake to get governance rights and earn fees from all chains in one single place.</p>

                        </div>

                        <button className="card_btn">Go To Governance</button>
                    </div>

                </div>
            </div>

        </div>


    )
}

export default ProtocolUI;