import React, { Component } from 'react';
import { Link } from "react-router";
import styles from './BlogPost.scss';
import BlogPostHeader from '../BlogPostHeader';
import { BodyRenderer } from "@phenomic/preset-react-app/lib/client";
import { ROUTES } from '../../../routes';
import { defineMessages, intlShape } from 'react-intl';
import LocaleAwareLink from '../../shared/LocaleAwareLink';

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
    const { posts } = this.props;
    if (isLoading || !posts || !posts.node) return null;
    console.log(posts);
    const post = posts.node.list.find(p => p.value.language === intl.locale).value;
    return (
      <div className={styles.root}>
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
      </div>
    );
  }
}
