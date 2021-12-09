import { ContactItem as ContactItemType } from "src/types";
import classes from "./contact-item.module.css";

type ContactItemProps = {
  contactItem: ContactItemType;
};

export const ContactItem = (props: ContactItemProps) => {
  const { contactItem } = props;

  return (
    <div className={classes.contactItem}>
      {contactItem.icon ? <img src={contactItem.icon} alt="icon" /> : null}
      <span>{contactItem.contactInfo}</span>
    </div>
  );
};
