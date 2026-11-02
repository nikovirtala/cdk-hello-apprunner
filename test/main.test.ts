import { App } from "aws-cdk-lib";
import { Match, Template } from "aws-cdk-lib/assertions";
import { beforeAll, describe, test } from "vitest";
import { AppRunnerStack } from "../src/main.ts";

describe("AppRunnerStack", () => {
    let template: Template;

    beforeAll(() => {
        template = Template.fromStack(new AppRunnerStack(new App(), "test"));
    });

    test("runs the hello-app-runner image from ECR Public on port 8000", () => {
        template.resourceCountIs("AWS::AppRunner::Service", 1);
        template.hasResourceProperties("AWS::AppRunner::Service", {
            SourceConfiguration: {
                ImageRepository: {
                    ImageConfiguration: { Port: "8000" },
                    ImageIdentifier: "public.ecr.aws/aws-containers/hello-app-runner:latest",
                    ImageRepositoryType: "ECR_PUBLIC",
                },
            },
        });
    });

    test("outputs the service URL", () => {
        template.hasOutput("url", {
            Value: {
                "Fn::Join": ["", ["https://", { "Fn::GetAtt": [Match.stringLikeRegexp("^service"), "ServiceUrl"] }]],
            },
        });
    });
});
