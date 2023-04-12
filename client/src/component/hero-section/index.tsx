import React from "react";
import HeroSectionImage from "../../assets/HeroSectionImage.png";

type Props = {};

interface StyleTypes {
  position: string;
  width: string;
  height: string;
  backgroundSize: string;
  backgroundPosition: string;
  backgroundImage: string;
}

const Style: StyleTypes = {
  position: "relative",
  width: "100%",
  height: "50vh",
  backgroundSize: "cover",
  backgroundPosition: "center center",
  backgroundImage: `url(${HeroSectionImage})`,
};

const HeroSection = (props: Props) => {
  return (
    <section className="hero-section" style={Style as React.CSSProperties}>
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <button
          style={{
            backgroundColor: "white",
            paddingTop: "25px",
            paddingBottom: "25px",
            fontSize: "20px",
            border: 0,
            width: "200px",
            borderRadius: "50px",
          }}
        >
          Learn More
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
