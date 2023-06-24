import classes from './navigation-button.module.css';

type NavigationButtonProps = {
	icon: string;
	onClick: () => void;
};

export const NavigationButton = (props: NavigationButtonProps) => {
	const { icon, onClick } = props;
	return (
		<div onClick={onClick} className={classes.navigationButton}>
			<img src={icon} alt='icon' />
		</div>
	);
};
