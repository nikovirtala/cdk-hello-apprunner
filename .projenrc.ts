import { awscdk } from "projen";

const cdkVersion = "2.165.0";

const project = new awscdk.AwsCdkTypeScriptApp({
  license: "MIT",
  copyrightOwner: "Niko Virtala",
  cdkVersion: cdkVersion,
  devDeps: ["prettier"],
  defaultReleaseBranch: "main",
  name: "cdk-hello-apprunner",
  deps: [`@aws-cdk/aws-apprunner-alpha@${cdkVersion}-alpha.0`],
  depsUpgradeOptions: {
    workflowOptions: {
      labels: ["auto-approve", "auto-merge"],
    },
  },
  autoApproveOptions: {
    secret: "GITHUB_TOKEN",
    allowedUsernames: ["nikovirtala"],
  },
  githubOptions: {
    mergify: true,
  },
  jest: false,
  prettier: true,
  projenrcTs: true,
});

project.synth();
