import "./rightpanel.css";

export default function RightPanel(){
    return(
        <div className="right-bar-container">
            <div className="buy-sell-box">
                <p className="buy-text">Buy</p>
                <p className="buy-text" style={{color: '#FF7968', backgroundColor: "transparent"}}>Sell</p>
            </div>
            <div className="right-container-lower-box">
                <div className="balance-box">
                    <p className="main-header">AVAILABLE BALANCE</p>
                    <p className="sub-headers">0.1407 BTC</p>
                    <p className="sub-headers">12344.45 USD</p>
                </div>
                {/* <div className="box-1">
                    <p>Market</p>
                    <p>|</p>
                </div>
                <div className="box-1">
                    <div>
                    <p>Amount in USDC</p>
                    <p>0</p>
                    </div>
                    <div>
                        <p>USDC</p>
                    </div>
                </div>
                <div className="box-1">
                    <div>
                    <p>Amount in BTC</p>
                    <p>0</p>
                    </div>
                    <div>
                        <p>BTC</p>
                    </div>
                </div>
                <div>
                    <p>Price of BTC = 23,295.53 UDSC</p>
                </div>
                <div className="buy-box">
                    <p>Buy BTC</p>
                </div> */}
                {/* <div>
                    <div>
                        <p>Invested Value</p>
                        <p>2,805.997</p>
                    </div>
                    <div>
                        <div> 
                        <p>Current Value</p>
                        <p>3,369.987</p>
                        </div>
                        <div>
                            <p>Return</p>
                            <p>+18.20%</p>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}