import { useEffect, useState } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";

import "./orderbook.css";

export default function OrderBook() {
  const [socketUrl, setSocketUrl] = useState(
    "wss://api-betatestnet.brine.finance/liveorderbookwire"
  );
  const [messageHistory, setMessageHistory] = useState([]);
  const [bids, setBids] = useState(null);

  const { lastMessage, readyState } = useWebSocket(socketUrl);

  useEffect(() => {
    if (lastMessage !== null) {
      setMessageHistory((prev) => prev.concat(lastMessage));
      if(lastMessage.data !== "Connection established with Krypto")
        setBids(JSON.parse(lastMessage.data));
    }
  }, [lastMessage, setMessageHistory]);

  //   const handleClickChangeSocketUrl = useCallback(
  //     () => setSocketUrl("wss://demos.kaazing.com/echo"),
  //     []
  //   );

  const connectionStatus = {
    [ReadyState.CONNECTING]: "Connecting",
    [ReadyState.OPEN]: "Open",
    [ReadyState.CLOSING]: "Closing",
    [ReadyState.CLOSED]: "Closed",
    [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  }[readyState];

  return (
    <div className="order-book-container">
      <div className="order-book-header-container" style={{borderBottom: "1px solid #808191"}}>
        <p className="order-book-header-text circled">ORDER BOOK</p>
        <p className="order-book-header-text circled" style={{backgroundColor: "transparent"}}>TRADES</p>
      </div>
      <div className="order-book-header-container">
        <p className="order-book-subheader-text">AMOUNT(BTC)</p>
        <p className="order-book-subheader-text" style={{textAlign: "right"}}>PRICE(USDC)</p>
      </div>
      <div>
        {bids !== null ? (
          bids.btcusdt.asks.slice(0,9).map((i) => (
            <div className="value-dump">
              <p className="value-text asks">{i[1]}</p>
              <p className="value-text price">{i[0]}</p>
            </div>
          ))
        ) : (
          <p>No data</p>
        )}
      </div>
      <div className="coin-value">
        <p className="coin-value-text">23,935.32 USD</p>
      </div>
      <div>
      {bids !== null ? (
          bids.btcusdt.bids.slice(0,9).map((i) => (
            <div className="value-dump">
              <p className="value-text bids">{i[1]}</p>
              <p className="value-text price">{i[0]}</p>
            </div>
          ))
        ) : (
          <p>No data</p>
        )}
      </div>
    </div>
  );
}
