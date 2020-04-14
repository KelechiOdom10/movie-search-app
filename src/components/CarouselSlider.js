import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

function CarouselSlider(props) {
	<Carousel
		slidesPerPage={5}
		slidesPerScroll={4}
		animationSpeed={1500}
		autoPlay={3000}
		stopAutoPlayOnHover
		clickToChange
		infinite
		addArrowClickHandler
	>
		{props.images}
	</Carousel>;
}

export default CarouselSlider;
