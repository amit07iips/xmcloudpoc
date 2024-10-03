import React from 'react';
import { ComponentParams, ComponentRendering} from '@sitecore-jss/sitecore-jss-nextjs';
import { AwardFields, Default as Award, AwardProps } from './Award';

export interface AwardTeaserField{
  Awards:Array<Award>;
}

export interface Award{
  fields: AwardFields;
}

interface AwardTeaserProps {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: AwardTeaserField;
}

export const Default = (props: AwardTeaserProps): JSX.Element => {
   return (
    <div className="layoutWrap achivements fullWidthMob">
      <div className="awardsWrap">
          <h2 className="animatable fadeInLeft delay750">Award</h2>
          <div className="slide4Col slick-initialized slick-slider">

                  { props.fields.Awards.map((award,idx)=>{
                    const awardProps: AwardProps = {
                      params: props.params,
                      fields: award.fields,
                    };
                    return <Award key={idx} {...awardProps}></Award>
                  })}

            </div>
            </div>
            </div>
  );
};
