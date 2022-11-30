import React from "react";
import "../styles/Home.css";
import symbol from "../assets/symbol.png";
export default function Home() {
  return (
    <>
      <div id="home">
        <div>
          <ul>
            <li>
              <img alt="symbol" src={symbol} />
            </li>
            <li>Home</li>
            <li>About</li>
            <li>NFT</li>
            <li>RoadMap</li>
          </ul>
        </div>

        <div id="wallet_connect">
          <button>connect wallet</button>
        </div>
      </div>
    </>
  );
}
