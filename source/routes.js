export const ROUTES = {
  INDEX: '/(:language(/))',
  ABOUT: '/(:language/)about',
  ANSWERS: '/(:language/)answers',
  CONNECT: '/(:language/)connect',
  IMPRESS: '/(:language/)impress',
  PRIVACY: '/(:language/)privacy',
  ADMIN: '/admin',
  BLOG: {
    INDEX: '/(:language/)blog',
    POST: '/(:language/)blog/posts/*id',
  },
};
