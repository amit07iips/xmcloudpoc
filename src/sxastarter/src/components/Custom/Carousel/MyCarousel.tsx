import React from 'react';
import Slider from 'react-slick';
import {
  Field,
  withDatasourceCheck,
  ImageField,
  NextImage as JssImage,
} from '@sitecore-jss/sitecore-jss-nextjs';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ComponentProps } from 'lib/component-props';

type MediaCarouselProps = ComponentProps & {
  fields: {
    SliderList: Array<{
      fields: {
        Path: Field<ImageField>;
      };
      type: 'image' | 'video';
      src: ImageField | Field<string>;
      alt?: Field<string>;
    }>;
  };
};

const MyCarousel = ({ fields }: MediaCarouselProps): JSX.Element => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  console.log(fields.SliderList);

  return (
    <div className="mediaCarousel">
      <Slider {...settings}>
        {fields.SliderList.map((item, index) => (
          <div key={index}>
            <JssImage field={item.fields.Path.value as ImageField} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default withDatasourceCheck()<MediaCarouselProps>(MyCarousel);
