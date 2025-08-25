import React from "react";
import Marquee from "react-fast-marquee";

const Gsap = ({ textArr, dir }) => {

  return (
    <div className="overflow-hidden w-full">
      <Marquee pauseOnHover={true} speed={100} gradient={true} gradientWidth={20} direction={dir === 1 ? "right" : "left"}>
        <div
          className="flex whitespace-nowrap font-bold uppercase"
          style={{
            fontSize: "clamp(1rem, 5vw, 8rem)",
            color:
              dir === 1
                ? "rgb(17, 63, 103)"
                : dir === 2
                ? "rgb(255, 204, 0)"
                : "#9BC936",
          }}
        >
          {textArr.map((item, index) => (
            <span key={index} className="mr-10">
              {item}&nbsp;&nbsp;&nbsp;
            </span>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Gsap;
