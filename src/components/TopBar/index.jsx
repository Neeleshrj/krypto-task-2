import { FaBitcoin } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";

import "./topbar.css";

export default function TopBar() {
  return (
    <div className="topbar-container">
      <div className="topbar-small">
        <div className="btc-icon-container">
          <FaBitcoin className="icon-btc" />
        </div>
        <div className="topbar-text-container">
          <div className="topbar-chevron-container">
            <p className="coin-name">Bitcoin</p>
            <BsChevronDown className="chevron-icon" />
          </div>
          <p className="sub-text">BTC/USDC</p>
        </div>
      </div>
      <div className="topbar-small topbar-small-infobox">
        <div className="topbar-details">
            <p className="small-header">Last Price</p>
            <p className="small-sub-text">23,963.23 USD</p>
        </div>
      </div>
      <div className="topbar-small topbar-small-infobox">
        <div className="topbar-details">
            <p className="small-header">24h Change</p>
            <p className="small-sub-text">+0.0%</p>
        </div>
      </div>
      <div className="topbar-small topbar-small-infobox">
        <div className="topbar-details">
            <p className="small-header">24h Low</p>
            <p className="small-sub-text">23,000.23 USD</p>
        </div>
      </div>
      <div className="topbar-small topbar-small-infobox">
        <div className="topbar-details">
            <p className="small-header">24h High</p>
            <p className="small-sub-text">24,242.23 USD</p>
        </div>
      </div>
      <div className="topbar-small" style={{flex: 2}}>
        
      </div>
    </div>
  );
}
