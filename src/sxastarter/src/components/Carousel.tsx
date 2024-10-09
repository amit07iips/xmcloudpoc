import React from 'react';
import {
  ComponentParams,
  ImageField,
  NextImage as JssImage,
} from '@sitecore-jss/sitecore-jss-nextjs';
import Slider from 'react-slick';

export interface CarouselListFields {
  SliderList: Array<CarouselCard>;
}

export interface CarouselCard {
  fields: {
    Path: ImageField;
  };
}

interface CarouselProps {
  params: ComponentParams;
  fields: CarouselListFields;
  setting: {
    dots: true;
    speed: 500;
    slidesToShow: 2;
    slidesToScroll: 2;
    infinite: true;
    autoplay: true;
    autoplaySpeed: 1000;
  };
}

export const Default = (props: CarouselProps): JSX.Element => {
  return (
    <div className="container">
      {
        <Slider {...props.setting}>
          {props.fields.SliderList.map((carousel, idx) => {
            return (
              <div className="img-body" key={idx}>
                <JssImage field={carousel.fields.Path} />
              </div>
            );
          })}
        </Slider>
      }
    </div>
  );
};
