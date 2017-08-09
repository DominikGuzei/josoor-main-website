import React from 'react';
import Helmet from 'react-helmet';
import styles from './blog-post.scss';

export default ({ data }) => {
  const { markdownRemark: post } = data; // data.markdownRemark holds our post data
  console.log(post);
  return (
    <div className={styles.post}>
      <Helmet title={`${post.frontmatter.title} - Josoor Blog`} />
      <h1 className={styles.title}>{post.frontmatter.title}</h1>
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
};

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
