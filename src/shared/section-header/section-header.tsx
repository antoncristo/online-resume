import classes from "./section-header.module.css";

type SectionHeaderProps = {
  sectionTitle: string;
};

export const SectionHeader = (props: SectionHeaderProps) => {
  const { sectionTitle } = props;

  return <div className={classes.sectionHeader}>{sectionTitle}</div>;
};
