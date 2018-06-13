const environment = {
  PHENOMIC_ENV: process.env.PHENOMIC_ENV,
  CONTEXT: process.env.CONTEXT,
  BASE_URL: process.env.DEPLOY_URL,
  isStaticBuild() {
    return environment.PHENOMIC_ENV === 'static';
  },
  isLocalContext() {
    return environment.CONTEXT === 'local';
  },
  isProductionContext() {
    return environment.CONTEXT === 'production';
  }
};

export default environment;
