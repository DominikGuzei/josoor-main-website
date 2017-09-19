import Head from "react-helmet";

export default ({ error }) => {
  const status = (error && error.status) || 404;
  const message = error && status !== 404 ? error.statusText : "Page not found";

  return (
    <div>
      <Head>
        <title>{message}</title>
      </Head>
      <h1>{message}</h1>
    </div>
  );
};
