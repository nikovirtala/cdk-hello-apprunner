import * as apprunner from '@aws-cdk/aws-apprunner-alpha';
import { App, CfnOutput, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class AppRunnerStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps = {}) {
    super(scope, id, props);

    const service = new apprunner.Service(this, 'service', {
      source: apprunner.Source.fromEcrPublic({
        imageConfiguration: { port: 8000 },
        imageIdentifier: 'public.ecr.aws/aws-containers/hello-app-runner:latest',
      }),
    });

    new CfnOutput(this, 'url', {
      value: 'https://' + service.serviceUrl,
    });
  }
}

const app = new App();

new AppRunnerStack(app, 'hello-apprunner');

app.synth();
