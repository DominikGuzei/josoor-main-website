export const ROUTES = {
  INDEX: '/(:lang(/))',
  IMPRESS: '/(:lang/)impress',
  ADMIN: '/admin',
  BLOG: {
    INDEX: '/(:lang/)blog',
    POST: '/(:lang/)blog/posts/:slug',
  },
};
