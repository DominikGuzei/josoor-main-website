export const ROUTES = {
  INDEX: '/(:language(/))',
  ANSWERS: '/(:language/)answers',
  IMPRESS: '/(:language/)impress',
  ADMIN: '/admin',
  BLOG: {
    INDEX: '/(:language/)blog',
    POST: '/(:language/)blog/posts/*id',
  },
};
