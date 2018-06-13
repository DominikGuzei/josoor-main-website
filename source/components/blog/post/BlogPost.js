import React, { Component } from 'react';
import styles from './BlogPost.scss';
import BlogPostHeader from '../BlogPostHeader';
import Head from "react-helmet";
import { BodyRenderer } from "@phenomic/preset-react-app/lib/client";
import { ROUTES } from '../../../routes';
import { defineMessages, intlShape } from 'react-intl';
import LocaleAwareLink from '../../shared/LocaleAwareLink';
import JoinUsSection from '../../shared/JoinUsSection';
import environment from '../../../environment';
import { buildRoute } from '../../../utils/routing';
import WhatYouCanDoSection from '../../home/WhatYouCanDoSection';

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
    const postId = post.filename.substring(0, post.filename.indexOf('.md'));
    const shareUrl = `${environment.BASE_URL}${buildRoute(ROUTES.BLOG.POST, { language: intl.locale, id: postId })}`;
    return (
      <div className={styles.root}>
        <Head>
          <title>{post.headline}</title>
          <meta name="description" content={post.teaser} />
          <meta property="og:url" content={shareUrl} />
          <meta property="og:type" content="article" />
          <meta property="og:title" content={post.headline} />
          <meta property="og:description" content={post.teaser} />
          <meta property="og:image" content={environment.BASE_URL + post.image} />
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

          <p className={styles.teaser}>
            {post.teaser}
          </p>

          <BodyRenderer>{post.body}</BodyRenderer>

          <footer>
            <LocaleAwareLink to={ROUTES.BLOG.INDEX}>
              {intl.formatMessage(messages.backHomeLink)}
            </LocaleAwareLink>
          </footer>

        </div>

        <WhatYouCanDoSection shareUrl={shareUrl} />

        <div className={styles.joinUsSection}>
          <JoinUsSection />
        </div>
      </div>
    );
  }
}
