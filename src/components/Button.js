import React from 'react';
import { createUseStyles } from 'react-jss';

const buttonStyle = createUseStyles({
	btn: (props) => ({
		// color: props.color,
		// background: props.bkgColor,
		padding: '8px 15px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		fontWeight: '800',
		textAlign: 'center',
		margin: '10px 15px',
		borderRadius: '5px',
		fontSize: '1.5rem',
		boxShadow: '0 3px #b4a597',
		'&:hover': {
			cursor: 'pointer',
		},
		userSelect: 'none',
	}),
	// label: (props) => ({
	// 	color: props.color,
	// }),
	del: {
		boxShadow: '0 3px #404e72 !important',
		fontSize: '1.1rem !important',
	},
	reset: {
		gridColumn: '1 / span 2',
		color: '#fff !important',
		boxShadow: '0 3px #404e72 !important',
		padding: '14px !important',
		fontSize: '1.1rem !important',
	},
	equal: {
		gridColumn: '3 / span 2',
		boxShadow: '0 3px #93261a !important',
		fontSize: '1.1rem !important',
	},
});

const Button = (props) => {
	// eslint-disable-next-line
	const { label, value, bkgColor, color, isOp, className, onClick } = props;
	const style = buttonStyle(color, bkgColor);

	return (
		<>
			<div
				className={
					className ? `${style.btn} ${style[className]}` : style.btn
				}
				style={{
					color: color,
					background: bkgColor,
				}}
				value={value}
				onClick={onClick}
			>
				{label}
			</div>
			{/* <div
				className={
					className ? `${style[className]} ${style.btn}` : style.btn
				}
				style={{
					color: color,
					background: bkgColor,
				}}
				value={value}
				onClick={onClick}
			>
				<p className={style.label} value={value} onClick={onClick}>
					{label}
				</p>
			</div> */}
		</>
	);
};

export default Button;
