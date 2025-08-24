import React, { useEffect, useRef, useState } from "react";

const slides = [
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
          text-4xl sm:text-4xl md:text-4xl lg:text-7xl
          mx-auto
        "
      >
        <span className="relative text-[#9BC936]">India’s</span>{" "}
        Leading Import and Export Conglomerate.
      </span>
    ),
    row: 1,
  },
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
          text-4xl sm:text-4xl md:text-4xl lg:text-7xl
          relative mt-10
        "
      >
        Your Trusted Partner in Import & Export of Filler Masterbatch.
      </span>
    ),
  },
  {
    image: "/images/banner3.jpg",
    imageSM: "/images/banner3-sm.jpg",
    title: (
      <span
        className="
          block 
          text-[#fff]
          font-semibold 
          text-center 
          leading-snug
          w-[70vw] sm:w-[90vw] md:w-[85vw] lg:w-[50vw]
          text-4xl sm:text-4xl md:text-4xl lg:text-7xl
          mx-auto
        "
        style={{
          textShadow:
            "1px 1px 0 #9ac93680, -1px 1px 0 #9ac93680, 1px -1px 0 #9ac93680, -1px -1px 0 #9ac93680",
        }}
      >
        Delivering High-Quality Calcium Carbonate to Global Markets.
      </span>
    ),
  },
  {
    image: "/images/banner4.jpg",
    imageSM: "/images/banner4-sm.jpg",
    title: (
      <span
        className="
          block
          text-center 
          text-[#9BC936]
          font-semibold 
          leading-snug
          w-[70vw] sm:w-[90vw] md:w-[85vw] lg:w-[50vw]
          text-4xl sm:text-4xl md:text-4xl lg:text-7xl
          mx-auto
          -mt-36
        "
        // style={{
        //   textShadow:
        //     "1px 1px 0 #fff, -1px 1px 0 #fff, 1px -1px 0 #fff, -1px -1px 0 #fff",
        // }}
      >
        India's Leading importer of Triply circles and distributor of triply utensils.
      </span>
    ),
  },
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
            text-4xl sm:text-4xl md:text-4xl lg:text-7xl
            mx-auto
            text-white
            z-10
          "
        >
          Connecting{" "}
          <span className="relative text-[#9BC936] drop-shadow-md">Global</span>{" "}
          markets through trusted import and export solutions.
        </span>
      </div>
    ),
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loadedImages, setLoadedImages] = useState({});
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

  // Preload images & track loaded state
  useEffect(() => {
    slides.forEach(({ image }) => {
      const img = new Image();
      img.src = image;
      img.onload = () =>
        setLoadedImages((prev) => ({ ...prev, [image]: true }));
    });
  }, []);

  useEffect(() => {
    startSlider();
    return () => clearInterval(intervalRef.current);
  }, []);

  const { image, title, row, imageSM } = slides[currentSlide];
  const isImageLoaded = loadedImages[image];

  return (
    <section
      className="relative w-full bg-cover bg-center transition-opacity duration-1000 ease-in-out"
      style={{ backgroundImage: `url('${image}')`, height: "calc(100vh - 81px)" }}
    >
      <picture>
        {imageSM && <source srcSet={imageSM} media="(max-width: 640px)" />}
        <img
          src={image}
          alt="Slide background"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
            isImageLoaded ? "opacity-100" : "opacity-0"
          }`}
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
        {/* Show Title Only When Image is Loaded */}
        {isImageLoaded && (
          <h1
            className={`
              font-extrabold drop-shadow-lg uppercase
              transition-opacity duration-700 ease-in-out
              ${row === 1 ? "mx-auto" : ""}
            `}
          >
            {title}
          </h1>
        )}

        {/* Slide Dots */}
        <div className="absolute bottom-8 flex justify-center w-full space-x-3">
          {slides.map((_, index) => (
            <span
              key={index}
              onClick={() => {
                setCurrentSlide(index);
                resetSlider();
              }}
              className={`h-3 w-3 rounded-full cursor-pointer transform transition-all duration-300 ${
                index === currentSlide
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
