import React from 'react';
import { ComponentParams, TextField } from '@sitecore-jss/sitecore-jss-nextjs';
type FieldsDataItemLogo = {
  src?: string;
};
type LogoLink = {
  url?: string;
};

type FieldsDataItem = {
  logo?: FieldsDataItemLogo;
  link?: LogoLink;
};

type FieldsDataLayoutItemFirstlevelResultsFieldsUrl = {
  path: string;
};

type FieldsDataLayoutItemFirstlevelResultsFields = {
  navigationTitle?: TextField;
  url?: FieldsDataLayoutItemFirstlevelResultsFieldsUrl;
};

type FieldsDataLayoutItemFirstlevel = {
  results?: FieldsDataLayoutItemFirstlevelResultsFields[];
};

type FieldsDataLayoutItem = {
  firstlevel?: FieldsDataLayoutItemFirstlevel;
};

type FieldsDataLayout = {
  item?: FieldsDataLayoutItem;
};

type FieldsData = {
  item?: FieldsDataItem;
  layout?: FieldsDataLayout;
};

type Fields = {
  data?: FieldsData;
};

interface HeaderNavProps {
  params: ComponentParams;
  fields?: Fields;
}

export const Default = (props: HeaderNavProps): JSX.Element => {
  console.log(props.fields);
  return (
    <nav className="navbar navbar-expand-lg align-items-end">
      <div className="container">
        <div className="logo-content d-flex align-items-center">
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icon-bar"></span>
            <span className="sr-only">Menu</span>
          </button>
          <a className="navbar-brand" href="#">
            <img src={props.fields?.data?.item?.logo?.src} alt="image"></img>
          </a>
        </div>
        <div className="" id="navbarNavDropdown">
          <ul className="navigation">
            {props.fields?.data?.layout?.item?.firstlevel?.results?.map((item, index) => (
              <li className="menu-item" key={index}>
                <a href={item.url?.path}>{item.navigationTitle?.value}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
