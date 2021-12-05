const { awscdk } = require('projen');
const project = new awscdk.AwsCdkTypeScriptApp({
  license: 'MIT',
  copyrightOwner: 'Niko Virtala',
  cdkVersion: '2.0.0',
  defaultReleaseBranch: 'main',
  name: 'cdk-hello-apprunner',
  depsUpgradeOptions: {
    ignoreProjen: false,
    workflowOptions: {
      labels: ['auto-approve', 'auto-merge'],
      secret: 'AUTOMATION_TOKEN',
    },
  },
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['nikovirtala'],
  },
  eslint: true,
  eslintOptions: {
    prettier: true,
  },
  jest: false,
});
project.synth();
