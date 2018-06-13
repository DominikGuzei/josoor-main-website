const environment = {
  PHENOMIC_ENV: process.env.PHENOMIC_ENV,
  CONTEXT: process.env.CONTEXT,
  CMS: JSON.parse(process.env.CMS),
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
