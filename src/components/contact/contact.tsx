import { RefObject, useRef, MouseEvent } from "react";
import { observer } from "mobx-react";
import { useInitScrollMapRef } from "src/hooks";
import { ResumeButton, SectionHeader } from "src/shared";
import { ScrollMenuMapName, textShadowStore } from "src/stores";
import phoneIcon from "src/assets/svg/phone.svg";
import emailIcon from "src/assets/svg/email.svg";
import githubIcon from "src/assets/svg/github.svg";
import linkedinIcon from "src/assets/svg/linkedin.svg";
import { textShadowActions } from "src/actions";

import { ContactItem } from "./components";

import classes from "./contact.module.css";
import { ContactItem as ContactItemType } from "src/types";

const SECTION_SCROLL_KEY: keyof ScrollMenuMapName = "CONTACT";

const contactItems: ContactItemType[] = [
  {
    contactInfo: "https://www.linkedin.com/in/anton-cristo-157652153/",
    variant: "LINK",
    icon: linkedinIcon,
  },
  {
    contactInfo: "https://github.com/AntonCristo",
    variant: "LINK",
    icon: githubIcon,
  },
  {
    contactInfo: "antoncristo92@gmail.com",
    variant: "TEXT",
    icon: emailIcon,
  },
  {
    contactInfo: "054-3007046",
    variant: "TEXT",
    icon: phoneIcon,
  },
];

export const Contact = observer(() => {
  const { textShadowX, textShadowY, pauseEffect } = textShadowStore;

  const contactRef: RefObject<HTMLDivElement> = useRef(null);

  const onMouseMoveHandler = (event: MouseEvent<HTMLDivElement>) => {
    textShadowActions.textShadowCoordRelativeToMouse(
      event.clientX,
      event.clientY
    );
  };

  const toggleTextShadowEffectOnMouseClick = (
    event: MouseEvent<HTMLDivElement>
  ) => {
    pauseEffect && onMouseMoveHandler(event);
    textShadowActions.shouldPauseTextShadowEffect(!pauseEffect);
  };

  useInitScrollMapRef(SECTION_SCROLL_KEY, contactRef);

  return (
    <div className={classes.contact} ref={contactRef}>
      <SectionHeader sectionTitle="CONTACT INFO" />
      <div
        onMouseMove={pauseEffect ? () => {} : onMouseMoveHandler}
        onClick={toggleTextShadowEffectOnMouseClick}
        className={classes.contactWrapper}
      >
        {contactItems.map((cItem, index) => (
          <ContactItem key={JSON.stringify(cItem)} contactItem={cItem} />
        ))}
        <div className={classes.contactItem}>
          <ResumeButton />
        </div>
        <div
          style={{
            filter: `drop-shadow(${textShadowX}px ${textShadowY}px 3px #000)`,
          }}
          className={classes.contactFooter}
        >
          Lets work together!
        </div>
      </div>
    </div>
  );
});
