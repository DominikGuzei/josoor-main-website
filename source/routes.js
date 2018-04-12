export const ROUTES = {
  INDEX: '/(:lang(/))',
  IMPRESS: '/(:lang/)impress',
  BLOG: {
    INDEX: '/(:lang/)blog',
    POST: '/(:lang/)blog/posts/:slug',
  },
};
