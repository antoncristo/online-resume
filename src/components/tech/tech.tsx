import { RefObject, useRef } from "react";
import { SectionHeader } from "src/shared";
import { observer } from "mobx-react";
import { ScrollMenuMapName } from "src/stores";
import { useInitScrollMapRef } from "src/hooks";

import classes from "./tech.module.css";

const SECTION_SCROLL_KEY: keyof ScrollMenuMapName = "TECH";

export const Tech = observer(() => {
  const techRef: RefObject<HTMLDivElement> = useRef(null);

  useInitScrollMapRef(SECTION_SCROLL_KEY, techRef);

  return (
    <div ref={techRef} className={classes.tech}>
      <SectionHeader sectionTitle="Tech Skills" />
    </div>
  );
});
