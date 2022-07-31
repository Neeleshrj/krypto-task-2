import "./home.css";

//components
import TopBar from "../components/TopBar";
import SideBar from "../components/SideBar";
import Chart from "../components/Chart";
import OrderBook from "../components/OrderBook";
import RightPanel from "../components/RightPanel";

export default function Home() {
  return (
    <div className="home-container">
      <div className="left">
        <SideBar />
      </div>
      <div className="center">
        <div className="mid-top">
          <TopBar />
        </div>
        <div className="mid-lower">
          <div className="mid-left">
            <div className="mid-left-top">
              <Chart
                symbol="NASDAQ:AAPL"
                locale="fr"
                autosize
                theme="Dark"
              />
            </div>
            <div className="mid-left-bottom">

            </div>
          </div>
          <div className="mid-center">
            <OrderBook />
          </div>
          <div className="mid-right">
            <RightPanel />
          </div>
        </div>
      </div>
    </div>
  );
}
