import React from 'react';
import {
  ComponentParams,
  ImageField,
  NextImage as JssImage,
} from '@sitecore-jss/sitecore-jss-nextjs';
import Slider from 'react-slick';

export interface CarouselListFields {
  items: Array<CarouselCard>;
}

export interface CarouselCard {
  fields: {
    Path: ImageField;
  };
}

interface CarouselProps {
  params: ComponentParams;
  fields: CarouselListFields;
}

export const Default = (props: CarouselProps): JSX.Element => {
  const setting = {
    dots: true, // Show dots below the slider
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
  };
  return (
    <>
      <section className="hero-wrapper">
        {props.fields.items.length > 0 ? (
          <Slider {...setting}>
            {props.fields.items.map((carousel, idx) => (
              <div key={idx} className="slider-item">
                <div className="slide-main">
                  <div className="slide-img">
                    <picture>
                      <source
                        media="(min-width: 1024px)"
                        srcSet={carousel.fields.Path.value?.src}
                        type="image/webp"
                      />
                      <JssImage field={carousel.fields.Path} sizes="(max-width: 991px)" />
                    </picture>
                  </div>
                  <div className="slide__content-thankyou">
                    <div className="headings">
                      <a className="btn primary-gradient-btn btn-lg">Book Now</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <p>Loading banners...</p>
        )}
      </section>
    </>
  );
};
