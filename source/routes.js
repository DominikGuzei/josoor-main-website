export const ROUTES = {
  INDEX: '/(:language(/))',
  ANSWERS: '/(:language/)answers',
  IMPRESS: '/(:language/)impress',
  PRIVACY: '/(:language/)privacy',
  ADMIN: '/admin',
  BLOG: {
    INDEX: '/(:language/)blog',
    POST: '/(:language/)blog/posts/*id',
  },
};
