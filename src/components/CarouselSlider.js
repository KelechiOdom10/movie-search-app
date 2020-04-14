import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

function CarouselSlider(props) {
	return (
		<div>
			<h1 style={{ textAlign: "left" }}>Upcoming Movies in the UK...</h1>
			<Carousel
				slidesPerPage={5}
				slidesPerScroll={4}
				animationSpeed={1500}
				autoPlay={3000}
				stopAutoPlayOnHover
				clickToChange
				infinite
				addArrowClickHandler
				arrows
				breakpoints={{
					1000: {
						// these props will be applied when screen width is less than 1000px
						slidesPerPage: 4,
						clickToChange: false,
						centered: false,
						arrows: true,
						infinite: true,
					},
					850: {
						// these props will be applied when screen width is less than 850px
						slidesPerPage: 3,
						clickToChange: false,
						centered: false,
						arrows: true,
						infinite: true,
					},
					650: {
						// these props will be applied when screen width is less than 650px
						slidesPerPage: 2,
						clickToChange: false,
						centered: false,
						arrows: true,
						infinite: true,
					},
					500: {
						slidesPerPage: 1,
						slidesPerScroll: 1,
						clickToChange: false,
						centered: false,
						animationSpeed: 2000,
						infinite: true,
					},
				}}
			>
				{props.images}
			</Carousel>
		</div>
	);
}

export default CarouselSlider;
