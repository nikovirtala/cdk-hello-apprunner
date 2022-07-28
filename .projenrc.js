const { awscdk } = require('projen');
const project = new awscdk.AwsCdkTypeScriptApp({
  license: 'MIT',
  copyrightOwner: 'Niko Virtala',
  cdkVersion: '2.33.0',
  devDeps: ['prettier'],
  defaultReleaseBranch: 'main',
  name: 'cdk-hello-apprunner',
  deps: ['@aws-cdk/aws-apprunner-alpha@2.33.0-alpha.0'],
  depsUpgradeOptions: {
    ignoreProjen: false,
    workflowOptions: {
      labels: ['auto-approve', 'auto-merge'],
    },
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
