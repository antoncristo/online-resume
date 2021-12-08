import { RefObject, useRef } from "react";
import { useInitScrollMapRef } from "src/hooks";
import { SectionHeader } from "src/shared";
import { ScrollMenuMapName } from "src/stores";

const SECTION_SCROLL_KEY: keyof ScrollMenuMapName = "CONTACT";

export const Contact = () => {
  const contactRef: RefObject<HTMLDivElement> = useRef(null);

  useInitScrollMapRef(SECTION_SCROLL_KEY, contactRef);

  return (
    <div ref={contactRef}>
      <SectionHeader sectionTitle="CONTACT INFO" />
    </div>
  );
};
