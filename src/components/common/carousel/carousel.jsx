import React from "react";
import Carousel from "react-bootstrap/Carousel";

const CarouselComponent = ({
  classAll = "",
  classSub = "",
  theme = "dark",
  timeNextSlide = 10000,
  isBorder = false,
  content = [
    {
      img: "https://cafefcdn.com/thumb_w/640/203337114487263232/2022/12/7/photo1670409187245-16704091874871004255991.jpg",
      title: "First slide label",
      subTitle: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      img: "https://cafefcdn.com/thumb_w/640/203337114487263232/2022/12/7/photo1670409187245-16704091874871004255991.jpg",
      title: "Second slide label",
      subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      img: "https://cafefcdn.com/thumb_w/640/203337114487263232/2022/12/7/photo1670409187245-16704091874871004255991.jpg",
      title: "Third slide label",
      subTitle:
        "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
    },
  ],
}) => {
  classAll = isBorder ? classAll + " border border-primary " : classAll;
  return (
    <Carousel className={`${classAll}`} data-bs-theme={theme}>
      {content.map((slide, index) => (
        <Carousel.Item
          key={index}
          interval={timeNextSlide}
          className={classSub}
        >
          {slide.img && (
            <img
              className="d-block w-100 rounded-sm h-[60vh]"
              src={slide.img}
              alt={`Slide ${index + 1}`}
            />
          )}
          {slide.title && (
            <Carousel.Caption>
              <h3>{slide.title}</h3>
              {slide.subTitle && <p>{slide.subTitle}</p>}
            </Carousel.Caption>
          )}
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
