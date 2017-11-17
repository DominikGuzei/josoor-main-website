import React, { Component } from 'react';
import { defineMessages, intlShape } from 'react-intl';
import Head from "react-helmet";
import styles from './BlogIndex.scss';
import BlogPostsList from "./BlogPostsList";

const messages = defineMessages({
  title: {
    id: 'blog.title',
    defaultMessage: '!!!Blog | Josoor Answers',
    description: 'Blog title'
  },
  headline: {
    id: 'blog.headline',
    defaultMessage: '!!!The Josoor Blog',
    description: 'Blog headline'
  },
  subline: {
    id: 'blog.subline',
    defaultMessage: '!!!News, Articles & Events from the Josoor Community',
    description: 'Blog subline'
  },
});


export default class BlogIndex extends Component {

  static contextTypes = {
    intl: intlShape.isRequired,
  };

  render() {
    const { posts } = this.props;
    const { intl } = this.context;
    const node = posts.node;
    return (
      <div>
        <Head>
          <title>{intl.formatMessage(messages.title)}</title>
        </Head>
        <div className={styles.blog}>

          <div className={styles.header}>
            <h1 className={styles.headline}>
              {intl.formatMessage(messages.headline)}
            </h1>
            <div className={styles.pitch}>
              {intl.formatMessage(messages.subline)}
            </div>
          </div>

          {node && (
            <BlogPostsList
              node={posts.node}
              posts={node.list.filter(p => p.language === intl.locale)}
            />
          )}

        </div>
      </div>
    );
  }
}
