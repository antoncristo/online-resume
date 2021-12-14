import AWS from "aws-sdk";
import { projectActions } from "src/actions";
import { ProjectBucketPrefix } from "src/types";

AWS.config.region = "us-east-2";
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: "us-east-2:999b83ab-2b55-4c13-85e8-75229c85367d",
});

class AwsS3Controller {
  private _onliResumeBucketName = "onlineresumeac";

  private _s3Instance = new AWS.S3({
    apiVersion: "2006-03-01",
    params: { Bucket: this._onliResumeBucketName },
  });

  private _resumePublicUrl: string = "";
  get resumePublicUrl() {
    return this._resumePublicUrl;
  }

  public initS3Assets = () => {
    this.getResumePublicUrlFromS3();
    //TODO: add usage for fetching images of projects
  };

  private getResumePublicUrlFromS3 = () => {
    const request: AWS.Request<AWS.S3.ListObjectsV2Output, AWS.AWSError> =
      this._s3Instance.listObjectsV2(
        {
          EncodingType: "url",
          Bucket: this._onliResumeBucketName,
          Prefix: "resume",
        },
        (err, data) => {
          if (err) {
            throw Error("[getResumeUrlFromS3]::" + err);
          }

          if (data.Contents?.length) {
            this._resumePublicUrl =
              request.httpRequest.endpoint.protocol +
              "//" +
              request.httpRequest.endpoint.host +
              "/" +
              data.Contents[0].Key;
          }
        }
      );
  };

  public getProjectAssetsPublicUrlFromS3ByPrefix = (
    prefix: ProjectBucketPrefix
  ) => {
    const request: AWS.Request<AWS.S3.ListObjectsV2Output, AWS.AWSError> =
      this._s3Instance.listObjectsV2(
        {
          EncodingType: "url",
          Bucket: this._onliResumeBucketName,
          Prefix: prefix,
        },
        (err, data) => {
          if (err) {
            throw Error("[getResumeUrlFromS3]::" + err);
          }

          if (data.Contents?.length) {
            const assetsUrls: string[] = [];
            data.Contents.forEach((item) => {
              !!item.Size &&
                assetsUrls.push(
                  request.httpRequest.endpoint.protocol +
                    "//" +
                    request.httpRequest.endpoint.host +
                    "/" +
                    item.Key
                );
            });
            projectActions.setProjectsSnapshotsFromStorageByPrefix(
              prefix,
              assetsUrls
            );
          }
        }
      );
  };
}

export const awsS3controller = new AwsS3Controller();
