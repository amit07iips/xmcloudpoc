import React from 'react';
import { ComponentParams, TextField } from '@sitecore-jss/sitecore-jss-nextjs';
type FieldsDataItemLogo = {
  src?: string;
};

type FieldsDataItem = {
  logo?: FieldsDataItemLogo;
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
    <nav className="navbar navbar-fixed-top">
      <div className="layoutWrap">
        <div className="navbar-header">
          <a className="navbar-brand" href="">
            <img src={props.fields?.data?.item?.logo?.src} />
          </a>
        </div>

        <div className="collapse navbar-collapse js-navbar-collapse">
          <ul className="nav navbar-nav">
            {props.fields?.data?.layout?.item?.firstlevel?.results?.map((pageItem, idx) => {
              return (
                <li key={idx}>
                  <a href={pageItem.url?.path}>{pageItem.navigationTitle?.value}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
