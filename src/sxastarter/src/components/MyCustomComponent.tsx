import {
  Text,
  RichText,
  Field,
  ImageField,
  withDatasourceCheck,
  NextImage as JssImage,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type MyCustomComponentProps = ComponentProps & {
  fields: {
    Title: Field<string>;
    Description: Field<string>;
    Image: ImageField;
    IsTopComponent: Field<boolean>;
  };
};

/**
 * A custom component, with a title, description, image, and a boolean flag.
 */
const MyCustomComponent = ({ fields }: MyCustomComponentProps): JSX.Element => (
  <div className={`myCustomComponent ${fields.IsTopComponent.value ? 'topComponent' : ''}`}>
    <Text tag="h2" className="contentTitle" field={fields.Title} />
    <RichText className="contentDescription" field={fields.Description} />
    <JssImage field={fields.Image} className="contentImage" />
  </div>
);

export default withDatasourceCheck()<MyCustomComponentProps>(MyCustomComponent);
