import { AwsCdkTypeScriptAppProject } from "@nikovirtala/projen-constructs";

const cdkVersion = "2.165.0";

const project = new AwsCdkTypeScriptAppProject({
  license: "MIT",
  copyrightOwner: "Niko Virtala",
  cdkVersion: cdkVersion,
  devDeps: ["@nikovirtala/projen-constructs"],
  defaultReleaseBranch: "main",
  name: "cdk-hello-apprunner",
  deps: [`@aws-cdk/aws-apprunner-alpha@${cdkVersion}-alpha.0`],
});

project.synth();
