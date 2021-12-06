import { ProjectsScheme } from "src/types";

type DescriptionProps = {
  project: ProjectsScheme;
};

export const Description = (props: DescriptionProps) => {
  const { project } = props;

  return <div>DESCRIPTION</div>;
};
