import { App, CfnOutput, Stack, StackProps } from 'aws-cdk-lib';
import * as apprunner from 'aws-cdk-lib/aws-apprunner';
import { Construct } from 'constructs';

export class AppRunnerStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps = {}) {
    super(scope, id, props);

    const service = new apprunner.CfnService(this, 'service', {
      serviceName: 'hello-apprunner',
      sourceConfiguration: {
        autoDeploymentsEnabled: false,
        imageRepository: {
          imageIdentifier: 'public.ecr.aws/aws-containers/hello-app-runner:latest',
          imageRepositoryType: 'ECR_PUBLIC',
        },
      },
    });

    new CfnOutput(this, 'url', {
      value: 'https://' + service.attrServiceUrl,
    });
  }
}

const app = new App();

new AppRunnerStack(app, 'hello-apprunner');

app.synth();
