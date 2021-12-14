export type ProjectBucketPrefix = "taskin/";

export type ProjectsScheme = {
  title: string;
  link?: string;
  description: string;
  techList: string[];
  screenshots: string[] | undefined;
  storagePrefix: ProjectBucketPrefix;
};
