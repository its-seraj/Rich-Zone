import React, { useEffect, useRef, useState } from "react";

const slides = [
  // ✅ Banner 1 (responsive, centered)
  {
    image: "/images/banner1.webp",
    imageSM: "/images/banner1-sm.webp",
    title: (
      <span
        className="
          block 
          text-center 
          font-semibold 
          leading-snug
          w-[90vw] sm:w-[90vw] md:w-[85vw] lg:w-[70vw]
          text-5xl sm:text-5xl md:text-4xl lg:text-7xl
          mx-auto
          drop-shadow-xl
          drop-shadow-black
        "
      >
        <span className="relative text-[#9BC936]">India’s</span>{" "}
        Leading Import and Export Conglomerate.
      </span>
    ),
    row: 1,
  },

  // ✅ Banner 2 (left aligned, text shifted upward a little bit)
  {
    image: "/images/banner2.jpg",
    imageSM: "/images/banner2-sm.jpg",
    title: (
      <span
        className="
        block
        text-left
        font-semibold 
        text-[#fff]
        leading-snug
        pl-4 md:pl-8
        w-[90vw] sm:w-[90vw] md:w-[85vw] lg:w-[50vw]
        text-5xl sm:text-5xl md:text-4xl lg:text-7xl
        relative 
        -mt-54
        drop-shadow-xl
          drop-shadow-black
        // top-[-22px]

      "
      >
        <span className="relative text-[#9BC936]">India’s</span>{" "}
        Your Trusted Partner in Import, Export & Filler Masterbatch.
      </span>
    ),
  },

  // ✅ Banner 3 (right aligned, responsive)
  {
    image: "/images/banner3.jpg",
    imageSM: "/images/banner3-sm.jpg",
    title: (
      <span
        className="
          block 
          text-right 
          text-[#9BC936] 
          font-semibold 
          leading-snug
          mr-4 md:mr-12
          w-[90vw] sm:w-[90vw] md:w-[85vw] lg:w-[50vw]
        text-5xl sm:text-5xl md:text-4xl lg:text-7xl
          ml-auto
          drop-shadow-xl
          drop-shadow-black
        "
      >

        Delivering High-Quality Calcium Carbonate to Global Markets.
      </span>
    ),
  },

  // ✅ Banner 4 (unchanged)
  {
    image: "/images/banner4.jpg",
    imageSM: "/images/banner4-sm.jpg",
    title: (
      <span
        style={{
          textAlign: "right",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          float: "right",
          marginRight: "8vw",
          textShadow: "0 0 1px 10px black",
        }}
      >
        {/* Keep as-is */}
      </span>
    ),
  },
    // ✅ Banner 5 (right aligned, responsive like banner 3)
  {
  image: "/images/banner5.jpg",
  imageSM: "/images/banner5-sm.webp",
  title: (
    <div className="relative w-full flex justify-center -mt-24">
      <span
        className="
          relative
          block 
          text-center 
          font-semibold 
          leading-snug
          w-[90vw] sm:w-[90vw] md:w-[85vw] lg:w-[70vw]
          text-5xl sm:text-5xl md:text-4xl lg:text-7xl
          mx-auto
          text-white
          z-10
          drop-shadow-xl
          drop-shadow-black
        "
      >
        Connecting{" "}
        <span className="relative text-[#9BC936] drop-shadow-md">Global</span> markets through trusted import and export solutions.
      </span>
    </div>
  ),
}

];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef(null);

  const startSlider = () => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
  };

  const resetSlider = () => {
    clearInterval(intervalRef.current);
    startSlider();
  };

  useEffect(() => {
    startSlider();
    return () => clearInterval(intervalRef.current);
  }, []);

  const { image, title, row, imageSM } = slides[currentSlide];

  return (
    <section
      className="relative w-full bg-cover bg-center transition-opacity duration-1000 ease-in-out"
      style={{ backgroundImage: `url('${image}')`, height: "calc(100vh - 81px)" }}
    >
      <picture>
        {/* Show imageSM if screen ≤ 640px (mobile) */}
        {imageSM && <source srcSet={imageSM} media="(max-width: 640px)" />}
        <img
          src={image}
          alt="Slide background"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </picture>
      {/* Gradient Overlay */}
      <div
        className={`
          absolute inset-0 
          bg-gradient-to-r 
          flex flex-col justify-center px-4 
          text-white text-center 
          ${row === 1 ? "items-center" : ""}
        `}
      >
        <h1
          className={`
            font-extrabold drop-shadow-lg uppercase
            ${row === 1 ? "mx-auto" : ""}
          `}
        >
          {title}
        </h1>

        {/* Slide Dots */}
        <div className="absolute bottom-8 flex justify-center w-full space-x-3">
          {slides.map((_, index) => (
            <span
              key={index}
              onClick={() => {
                setCurrentSlide(index);
                resetSlider();
              }}
              className={`h-3 w-3 rounded-full cursor-pointer transform transition-all duration-300 ${index === currentSlide
                ? "scale-125 bg-[#9BC936] shadow-lg"
                : "bg-[#9BC936] hover:bg-[#9BC936]"
                }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
