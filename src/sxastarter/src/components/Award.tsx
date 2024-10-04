import React from 'react';
import {
  ComponentParams,
  Field,
  ImageField,
  NextImage as JssImage,
  Text as JSSText,
} from '@sitecore-jss/sitecore-jss-nextjs';

export interface AwardFields {
  Heading: Field<string>;
  Description: Field<string>;
  Image: ImageField;
}

export interface AwardProps {
  params: ComponentParams;
  fields: AwardFields;
}

export const Default = (props: AwardProps): JSX.Element => {
  const modifyImageProps = {
    ...props.fields.Image,
    editable: props?.fields?.Image?.editable
      ?.replace(`width="${props?.fields?.Image?.value?.width}"`, 'width="100%"')
      .replace(`height="${props?.fields?.Image?.value?.height}"`, 'height="100%"'),
  };

  return (
    <div className="slick-slide slick-current slick-active">
      <figure className="figure contentAside eqHeight">
        <JssImage field={modifyImageProps}></JssImage>
        <figcaption className="figure-caption">
          <h2 className="figureTitle">
            <JSSText field={props.fields.Heading} />
          </h2>
          <p>
            <JSSText field={props.fields.Description} />
          </p>
        </figcaption>
      </figure>
    </div>
  );
};
