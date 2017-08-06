import * as React from 'react'
import Link from 'gatsby-link'
import SkinnableComponent from 'react-polymorph/lib/components/SkinnableComponent';
import InputSkin from 'react-polymorph/lib/skins/simple/InputSkin';

export default () => (
  <div>
    <h1>Signup</h1>

    <SkinnableComponent skin={<InputSkin />} />

    <Link to="/">Home</Link>
  </div>
);
