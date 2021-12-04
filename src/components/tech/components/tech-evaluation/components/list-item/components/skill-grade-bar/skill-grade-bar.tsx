import classes from "./skill-grade-bar.module.css";

type SkillGradeBarProps = {
  grade: number;
};

export const SkillGradeBar = (props: SkillGradeBarProps) => {
  const { grade } = props;

  return (
    <div className={classes.skillGradeBar}>
      <div className={classes.numericGrade}>{grade}/10</div>
      <div className={classes.gradeBar}>
        <div
          style={{ width: `${grade * 10}%` }}
          className={classes.gradeTrack}
        ></div>
      </div>
    </div>
  );
};
