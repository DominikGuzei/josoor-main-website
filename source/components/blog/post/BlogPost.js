import React, { Component } from 'react';
import { Link } from "react-router";
import styles from './BlogPost.scss';
import BlogPostHeader from '../BlogPostHeader';
import { BodyRenderer } from "@phenomic/preset-react-app/lib/client";
import { ROUTES } from '../../../routes';
import { defineMessages, intlShape } from 'react-intl';

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
    const { page } = this.props;
    const { intl } = this.context;
    if (!page || !page.node) return null;
    let post = page.node;
    if (post.list) post = post.list.find(p => p.language === intl.locale);
    return (
      <div className={styles.root}>
        <div className={styles.header}>
          <div className={styles.blogHeader} />
          <div className={styles.imageBox}>
            <img className={styles.image} src={post.image} />
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
      </div>
    );
  }
}
