import React, { useRef } from "react";
import "./styles.css";
import Bestp from "./Bestp";

import Slider from "react-slick";
import arr1 from "../../assests/arr1.svg";
import arr2 from "../../assests/arr2.svg";

export default function Pslider({ products, onAddToCart }) {
  const sliderRef = useRef(null);
  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    autoplay: true,
    // rows: 2,
    centerPadding: "60px",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  console.log(products);

  const product = products.map((items) => (
    <Bestp
      id={items?.id}
      name={items?.name}
      url={items?.image?.url}
      onAddToCart={onAddToCart}
    />
  ));
  return (
    <div>
      <h1>Our Best seller</h1>
      {/* <Carousel responsive={responsive}>{product}</Carousel>; */}
      <div className="s_head">
        <div className="s_slider_arrows">
          <div className="arr_left" onClick={() => next()}>
            <img src={arr2}></img>
          </div>
          <div className="arr_right" onClick={() => previous()}>
            <img src={arr1}></img>
          </div>
        </div>
        <a className="link_slider" href="/products">
          See all
        </a>
      </div>
      <Slider ref={sliderRef} {...settings}>
        {product}
      </Slider>
    </div>
  );
}
