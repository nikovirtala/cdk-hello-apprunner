const { awscdk } = require('projen');

const cdkVersion = '2.83.1';

const project = new awscdk.AwsCdkTypeScriptApp({
  license: 'MIT',
  copyrightOwner: 'Niko Virtala',
  cdkVersion: cdkVersion,
  devDeps: ['prettier'],
  defaultReleaseBranch: 'main',
  name: 'cdk-hello-apprunner',
  deps: [`@aws-cdk/aws-apprunner-alpha@${cdkVersion}-alpha.0`],
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
