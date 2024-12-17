import React from 'react';
import {
  ComponentParams,
  ComponentRendering,
  Field,
  ImageField,
  NextImage as JssImage,
  RichText as JssText,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface TwoColumnProps {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: FeatureCardField;
}

export interface FeatureCardField {
  Name: Field<string>;
  Image: ImageField;
  Description: Field<string>;
}

export const Default = (props: TwoColumnProps): JSX.Element => {
  return (
    <div className="row">
      <div className="card">
        {/* <img
          src="https://springhilles.fcps.edu/sites/default/files/styles/gallery/public/galleries/2022-08/IMG-2217.JPEG?h=d318f057&itok=KGv_nwr-"
          alt="Avatar"
          width="400"
          height="300"
        /> */}
        <JssImage field={props.fields.Image} />
      </div>
      <div className="card">
        <JssText field={props.fields.Description} />
      </div>
    </div>
  );
};
