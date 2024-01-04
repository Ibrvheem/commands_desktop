import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Options } from "@splidejs/splide";
import React, { ReactNode } from "react";
import { centralData } from "../data";
// import "@splidejs/react-splide/css";

interface Slide {
  src: string;
  alt: string;
}
export function generateSlides(length = 6, sig = 0): Slide[] {
  return Array.from({ length }).map((_, index) => {
    index = sig || index;

    const selectedItems = centralData[0]?.gallery.find(
      (item) => item.id === 1 // Update this with the desired id
    );

    const imageSrc = selectedItems?.image1[index] || ""; // Update index as needed
    const imageAlt = selectedItems?.alt || "";

    return {
      src: imageSrc,
      alt: imageAlt,
      id: `slide-${index}`,
    };
  });
}

export class ThumbnailsExample extends React.Component<{}> {
  /**
   * The main Splide component.
   */
  mainRef = React.createRef<Splide>();

  /**
   * The thumbnail Splide component.
   */
  thumbsRef = React.createRef<Splide>();

  /**
   * Set the sync target right after the component is mounted.
   */
  componentDidMount(): void {
    if (this.mainRef.current && this.thumbsRef.current && this.thumbsRef.current.splide) {
      this.mainRef.current.sync(this.thumbsRef.current.splide);
    }
  }

  /**
   * Render slides.
   *
   * @return Slide nodes.
   */
  renderSlides(): ReactNode[] {
    return generateSlides().map((slide) => (
      <SplideSlide key={slide.alt}>
        <img src={slide.src} alt={slide.alt} />
      </SplideSlide>
    ));
  }

  /**
   * Render the component.
   *
   * @return A React node.
   */
  render(): ReactNode {
    const mainOptions: Options = {
      type: "loop",
      perPage: 3,
      // perMove: 1,
      // gap: "1rem",
      pagination: false,
      arrows: false,
      padding: "2rem",
    };

    const thumbsOptions: Options = {
      type: "slide",
      rewind: true,
      gap: ".1em",
      pagination: false,
      fixedWidth: 110,
      fixedHeight: 70,
      cover: true,
      focus: "center",
      isNavigation: true,
      arrows: false,
    };

    return (
      <div
        className="wrapper"
        style={{
          width: "65vw",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Splide options={mainOptions} ref={this.mainRef} aria-labelledby="thumbnail-slider-example">
          {this.renderSlides()}
        </Splide>

        <Splide
          options={thumbsOptions}
          ref={this.thumbsRef}
          aria-label="The carousel with thumbnails. Selecting a thumbnail will change the main carousel"
          style={{
            alignSelf: "center",
            justifySelf: "center",
            marginTop: ".5em",
          }}
        >
          {this.renderSlides()}
        </Splide>
      </div>
    );
  }
}
