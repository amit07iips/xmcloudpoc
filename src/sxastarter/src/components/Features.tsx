import React, { useState } from 'react';
import {
  ComponentParams,
  ComponentRendering,
  Field,
  ImageField,
  RichText,
  Text as JSSText,
} from '@sitecore-jss/sitecore-jss-nextjs';

export interface FeatureFields {
  Heading: Field<string>;
  Features: Array<FeatureCard>;
}

export interface FeatureCard {
  fields: FeatureCardField;
}

export interface FeatureCardField {
  Name: Field<string>;
  Image: ImageField;
  Description: Field<string>;
}

interface FeaturesProps {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: FeatureFields;
}

export const Default = (props: FeaturesProps): JSX.Element => {
  // const id = props.params.RenderingIdentifier;
  const [activeTab, setActiveTab] = useState('tab-0');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  console.log(props);
  return (
    <section className="our-product" id="our-product-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 pl-0">
                  <div className="section-title">
                    <RichText field={props.fields.Heading} />
                  </div>
                </div>
              </div>
            </div>
            <div className="tabs-sm our-product-image-tabs">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <ul className="nav nav-pills js-pillstab" role="tablist">
                      {props.fields.Features.map((card, idx) => {
                        return (
                          <li className="nav-item" key={idx}>
                            <a
                              className={`nav-link ${activeTab === 'tab-' + idx ? 'active' : ''}`}
                              data-toggle="pill"
                              href={'#tab-' + idx}
                              role="tab"
                              aria-selected="true"
                              aria-controls="home"
                              onClick={() => handleTabChange('tab-' + idx)}
                            >
                              {card.fields.Name.value}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="tab-content js-tabcontent driver-bg" id="pills-tabContent">
                {props.fields.Features.map((card, idx) => {
                  return (
                    <div
                      className={`tab-pane fade ${activeTab === 'tab-' + idx ? 'show active' : ''}`}
                      id={'tab-' + idx}
                      role="tabpanel"
                      key={idx}
                    >
                      <div className="our-product-text">
                        <div className="dura-max-bg deluxe-bg ">
                          <div className="container">
                            <div className="row no-gutters">
                              <div className="d-flex product-text">
                                <div className="product-left">
                                  <RichText field={card.fields.Description} />
                                </div>
                                <div className="product-right">
                                  <img
                                    src={card.fields.Image.value?.src}
                                    className=" d-none d-md-block"
                                    alt="king-deluxe-web"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
