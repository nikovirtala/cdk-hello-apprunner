const { awscdk } = require('projen');
const project = new awscdk.AwsCdkTypeScriptApp({
  license: 'MIT',
  copyrightOwner: 'Niko Virtala',
  cdkVersion: '2.1.0',
  devDeps: ['prettier'],
  defaultReleaseBranch: 'main',
  name: 'cdk-hello-apprunner',
  deps: ['@aws-cdk/aws-apprunner-alpha@2.3.0-alpha.0'],
  depsUpgradeOptions: {
    ignoreProjen: false,
  },
  depsUpgradeAutoMerge: true,
  autoApproveOptions: {
    allowedUsernames: ['nikovirtala'],
  },
  eslint: true,
  eslintOptions: {
    prettier: true,
  },
  jest: false,
});
project.synth();
