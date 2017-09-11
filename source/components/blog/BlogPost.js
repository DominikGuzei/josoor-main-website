import React from 'react';
import { Link } from "react-router";
import Head from "react-helmet";
import { BodyRenderer } from "@phenomic/preset-react-app/lib/client";
import Layout from '../../containers/Layout';

const DefaultPostLayout = ({ title, body }) =>
  <article>
    <Head><title>{title}</title></Head>
    <h1>{title}</h1>
    <BodyRenderer>{body}</BodyRenderer>
  </article>;

const HeroPostLayout = ({ title, body }) =>
  <article>
    <Head><title>{title}</title></Head>
    <div style={{ padding: "4rem", background: "pink", color: "#fff" }}>
      <h1>{title}</h1>
    </div>
    <BodyRenderer>{body}</BodyRenderer>
  </article>;

const PostLayouts = {
  default: DefaultPostLayout,
  hero: HeroPostLayout
};

export default ({ hasError, isLoading, page }) => {
  if (hasError) {
    return <PageError error={page.error} />;
  }

  const PostLayout =
    (page.node && PostLayouts[page.node.layout]) || PostLayouts.default;
  return (
    <Layout>
      {isLoading && "Loading..."}
      {!isLoading && page.node && <PostLayout {...page.node} />}
      <footer>
        <Link to="/blog">Go to home</Link>
      </footer>
    </Layout>
  );
};
