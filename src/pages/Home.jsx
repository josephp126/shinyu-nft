import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import symbol from "../assets/symbol.png";
import cat from "../assets/leopard_home.png";
import about from "../assets/leopard_about.gif";
import { Link, animateScroll as scroll } from "react-scroll";
export default function Home() {
  const [nav, setNav] = useState("home");
  const scrollTop = () => {
    scroll.scrollToTop();
  };
  const setValue = (val) => {
    setNav(val);
  };
  return (
    <>
      <div id="home">
        <div className="header">
          <div>
            <img
              alt="symbol"
              src={symbol}
              onClick={() => {
                scrollTop();
                setValue("home");
              }}
            />
          </div>
          <div>
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={nav == "home" ? "active1 point" : "point"}
              onClick={() => setValue("home")}
            >
              Home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={nav == "about" ? "active1 point" : "point"}
              onClick={() => setValue("about")}
            >
              About
            </Link>
            <Link to="white">Whitepaper</Link>
            <Link to="token">Tokenomics</Link>
            <Link to="nft">NFTs</Link>
            <Link to="road">RoadMap</Link>
          </div>
          <div>
            <button className="wallet_btn">Connect</button>
          </div>
        </div>
        <div className="body" id="body">
          <div>
            <img alt="symbol" src={cat} />
          </div>
          <div>
            IN THE <br /> JUNGLE
          </div>
        </div>
        <div id="wallet_connect">
          <button>Connect</button>
        </div>
        <div className="about" id="about">
          <div>
            ABOUT <br /> JUNGLE CATS <br />
            <div className="about_content">
              This is jungle cats.This is jungle cats. <br />
              This is jungle cats.This is jungle cats. <br />
              This is jungle cats.This is jungle cats. <br />
              This is jungle cats.This is jungle cats. <br />
              This is jungle cats.This is jungle cats. <br />
              This is jungle cats.This is jungle cats. <br />
            </div>
          </div>
          <div>
            <img alt="symbol" src={about} />
          </div>
        </div>
      </div>
    </>
  );
}
