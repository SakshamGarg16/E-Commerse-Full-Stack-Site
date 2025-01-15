import React, { useRef, useState } from "react";
import MainCard from "../MainCard/MainCard";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const MainCardCarosel = ({data,SectionName}) => {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    720: { items: 3 },
    1024: { items: 4.5 },
  };

  const items = data.map((item) => <MainCard product={item} />);

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  };

  const handleSlideChanged = (e) => {
    setActiveIndex(e.item); // Update the active index when the slide changes
  };

  return (
    <div className="px-4 lg:px-8 border">
        <h2 className="font-extrabold test-2xl text-gray-700 py-2">{SectionName}</h2>
      <div className="relative p-5 border">
        {/* Carousel */}
        <AliceCarousel
          ref={carouselRef}
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChanged={handleSlideChanged} // Callback for slide changes
        />

        {/* Backward Button */}
        {activeIndex > 0 && (
          <button
            className="absolute z-10 top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            aria-label="previous"
            onClick={handlePrev}
            
          >
            <KeyboardArrowLeftIcon />
          </button>
        )}

        {/* Forward Button */}
        {activeIndex < items.length - 4 && (
          <button
            className="absolute z-10 top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            aria-label="next"
            onClick={handleNext}
          >
            <KeyboardArrowRightIcon  />
          </button>
        )}
      </div>
    </div>
  );
};

export default MainCardCarosel;
