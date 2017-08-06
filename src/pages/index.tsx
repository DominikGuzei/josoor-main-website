import * as React from 'react';
import Link from 'gatsby-link';

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <ul>
        <li>
            <Link to="/translations/">Checkout the translations page</Link>
        </li>
        <li>
            <Link to="/signup/">Checkout the signup page</Link>
        </li>
    </ul>
  </div>
);

export default IndexPage;
