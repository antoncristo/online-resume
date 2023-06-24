import { MouseEvent } from 'react';
import { ContactItem as ContactItemType } from 'src/types';

import classes from './contact-item.module.css';

type ContactItemProps = {
	contactItem: ContactItemType;
};

export const ContactItem = (props: ContactItemProps) => {
	const { contactItem } = props;

	const writeToClipboard = () => {
		navigator.clipboard.writeText(contactItem.contactInfo);
		alert('copied: ' + contactItem.contactInfo);
	};

	const onContactItemClickHandler = (event: MouseEvent<HTMLDivElement>) => {
		contactItem.variant === 'LINK'
			? window.open(contactItem.contactInfo)
			: writeToClipboard();

		event.stopPropagation();
	};

	return (
		<div onClick={onContactItemClickHandler} className={classes.contactItem}>
			{contactItem.icon ? <img src={contactItem.icon} alt='icon' /> : null}
			<span>{contactItem.contactInfo}</span>
		</div>
	);
};
