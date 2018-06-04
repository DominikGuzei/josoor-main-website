export const ROUTES = {
  INDEX: '/(:language(/))',
  IMPRESS: '/(:language/)impress',
  ADMIN: '/admin',
  BLOG: {
    INDEX: '/(:language/)blog',
    POST: '/(:language/)blog/posts/*id',
  },
};
