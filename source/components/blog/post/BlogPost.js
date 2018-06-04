import React, { Component } from 'react';
import styles from './BlogPost.scss';
import BlogPostHeader from '../BlogPostHeader';
import { BodyRenderer } from "@phenomic/preset-react-app/lib/client";
import { ROUTES } from '../../../routes';
import { defineMessages, intlShape } from 'react-intl';
import LocaleAwareLink from '../../shared/LocaleAwareLink';
import JoinUsSection from '../../shared/JoinUsSection';
import environment from '../../../environment';

const messages = defineMessages({
  backHomeLink: {
    id: 'blog.backHomeLink',
    defaultMessage: '!!!Back home',
  },
});

export default class BlogPost extends Component {

  static contextTypes = {
    intl: intlShape.isRequired,
  };

  render() {
    const { isLoading } = this.props;
    const { intl } = this.context;
    let { post } = this.props;
    if (isLoading || !post || !post.node) return null;
    post = post.node;
    return (
      <div className={styles.root}>
        <Head>
          <title>{post.title}</title>
          <meta name="description" content={post.teaser} />
          <meta property="og:type" content="article" />
          <meta property="og:title" content={post.title} />
          <meta property="og:description" content={post.teaser} />
          <meta property="og:image" content={environment.URL + post.image} />
          <meta property="og:image:width" content="680" />
        </Head>

        <div className={styles.header}>
          <div className={styles.blogHeader} />
          <div className={styles.imageBox}>
            <img className={styles.image} src={post.image} alt="Blog post title image" />
          </div>

        </div>
        <div className={styles.content}>
          <BlogPostHeader post={post} hasTitleLink={false} />
          <BodyRenderer>{post.body}</BodyRenderer>

          <footer>
            <LocaleAwareLink to={ROUTES.BLOG.INDEX}>
              {intl.formatMessage(messages.backHomeLink)}
            </LocaleAwareLink>
          </footer>

        </div>

        <div className={styles.joinUsSection}>
          <JoinUsSection />
        </div>
      </div>
    );
  }
}
