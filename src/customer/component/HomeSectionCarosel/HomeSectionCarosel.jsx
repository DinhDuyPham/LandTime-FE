import React, { useState, useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const HomeSectionCarousel = ({ data, sectionName }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null); // Tạo ref cho AliceCarousel
  
  const totalItems = data.length;
  const maxIndex = totalItems - 6; // Số lượng item hiển thị tối đa là 6
  
  const slidePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex((prevIndex) => prevIndex - 1);
      carouselRef.current.slideTo(activeIndex - 1); // Sử dụng slideTo để điều khiển carousel
    }
  };

  const slideNext = () => {
    if (activeIndex < maxIndex) {
      setActiveIndex((prevIndex) => prevIndex + 1);
      carouselRef.current.slideTo(activeIndex + 1); // Sử dụng slideTo để điều khiển carousel
    }
  };

  const items = data.slice(0, 20).map((item) => (
    <HomeSectionCard key={item.id} product={item} />
  ));

  return (
    <div>
      <h2 className="text-2xl font-extrabold text-gray-800 py-5">
        {sectionName}
      </h2>
      <div className="relative">
        <div className="py-4 pl-5 border">
          <AliceCarousel
            ref={carouselRef} // Gán ref vào AliceCarousel
            items={items}
            disableButtonsControls
            disableDotsControls
            responsive={{
              0: { items: 1 },
              300: { items: 2 },
              720: { items: 3 },
              1024: { items: 5 },
              1200: { items: 6 },
            }}
            animationDuration={400}
            infinite={false}
          />
          {activeIndex < maxIndex && (
            <Button
              onClick={slideNext}
              variant="contained"
              className="z-50 bg-white"
              sx={{
                position: "absolute",
                top: "8rem",
                right: "0rem",
                transform: "translateX(50%) rotate(90deg)",
                bgcolor: "white",
              }}
              aria-label="next"
            >
              <KeyboardArrowLeftIcon
                sx={{ transform: "rotate(90deg)", color: "black" }}
              />
            </Button>
          )}
          {activeIndex > 0 && (
            <Button
              onClick={slidePrev}
              variant="contained"
              className="z-50 bg-white"
              sx={{
                position: "absolute",
                top: "8rem",
                left: "0rem",
                transform: "translateX(-50%) rotate(-90deg)",
                bgcolor: "white",
              }}
              aria-label="prev"
            >
              <KeyboardArrowLeftIcon
                sx={{ transform: "rotate(90deg)", color: "black" }}
              />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
