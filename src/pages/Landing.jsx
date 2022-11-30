import React, { useEffect } from "react";
import "../styles/Landing.css";
import landingVideo from "../assets/welcome_video.mp4";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/home");
    }, 5000);
  }, []);
  return (
    <div className="App">
      <div id="fullwidth-video">
        <div className="fullwidth-video-bg">
          <video
            id="bgvideop"
            poster=""
            autoPlay="autoplay"
            loop="loop"
            muted
            preload="auto"
          >
            <source
              src={landingVideo}
              type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
            />
          </video>
        </div>
      </div>
    </div>
  );
}
