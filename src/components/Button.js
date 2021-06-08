import React from 'react';
import { createUseStyles } from 'react-jss';

const buttonStyle = createUseStyles({
	btn: (props) => ({
		color: props.color,
		background: props.bkgColor,
		padding: '8px 15px',
		fontWeight: '600',
		textAlign: 'center',
		margin: '10px 15px',
		borderRadius: '5px',
		fontSize: '1.5rem',
		'&:hover': {
			cursor: 'pointer',
		},
	}),
	// label: (props) => ({
	// 	color: props.color,
	// }),
	reset: {
		gridColumn: '1 / span 2',
		fontSize: '1rem',
		color: '#fff' /* not working */,
	},
	equal: {
		fontSize: '1rem' /* not working */,
		gridColumn: '3 / span 2',
	},
});

const Button = (props) => {
	const { label, value, bkgColor, color, isOp, className } = props;
	const style = buttonStyle(color, bkgColor);

	return (
		<>
			{/* <div
				className={
					className ? `${style.btn} ${style[className]}` : style.btn
				}
				style={{
					color: color,
					background: bkgColor,
				}}
			>
				{label}
			</div> */}
			<div
				className={
					className ? `${style.btn} ${style[className]}` : style.btn
				}
				style={{
					color: color,
					background: bkgColor,
				}}
			>
				<span className={style.label}>{label}</span>
			</div>
		</>
	);
};

export default Button;
