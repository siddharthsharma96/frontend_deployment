import { useOutletContext } from "react-router-dom";
import "./../Style/carousel.css";
import Card from "./Card";
import { useRef } from "react";
const Carousel = () => {
  const { restaurantData } = useOutletContext();
  const slides = useRef(null);

  const handleNextClick = () => {
    if (slides.current) {
      const slide = slides.current.querySelector(".carousel__slide");
      if (slide) {
        const slideWidth = slide.offsetWidth;
        slides.current.scrollBy({ left: slideWidth, behaviour: "smooth" });
      }
    }
  };

  const handlePrevClick = () => {
    if (slides.current) {
      const slide = slides.current.querySelector(".carousel__slide");
      if (slide) {
        const slideWidth = slide.offsetWidth;
        slides.current.scrollBy({ left: -slideWidth, behaviour: "smooth" });
      }
    }
  };
  return (
    <div className="carousel">
      <div className="carousel__container">
        <h2>Top restaurant chains in Noida</h2>
        <div className="">
          <button onClick={handleNextClick} className="carousel__arrow">
            <img src="/images/left.png" alt="hj"></img>
          </button>
          <button onClick={handlePrevClick} className="carousel__arrow">
            <img src="/images/right.png" alt="hj"></img>
          </button>
        </div>
      </div>
      <section className="carousel__slider">
        <ul className="carousel__slides" ref={slides}>
          {restaurantData.map((res) => {
            return (
              <li className="carousel__slide">
                <Card res={res} show={false}></Card>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default Carousel;
