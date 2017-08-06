import * as React from 'react';
import Helmet from 'react-helmet';

interface LayoutProps {
  children: () => any,
}

export default (props: LayoutProps) => (
  <div>
    <Helmet title="Josoor Q & A" />
    <div>
      {props.children()}
    </div>
  </div>
);
