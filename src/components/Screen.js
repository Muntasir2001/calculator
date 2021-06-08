import React from 'react';
import { createUseStyles } from 'react-jss';

const screenStyle = createUseStyles({
	inputScreen: {
		marginTop: '20px',
		width: '500px',
	},
	input: {
		color: '#fff',
		width: '500px',
		height: '120px',
		background: '#182034',
		border: '0px',
		padding: '25px 15px',
		fontSize: '2.2rem',
		borderRadius: '8px',
		textAlign: 'right',
	},
});

const Screen = () => {
	const style = screenStyle();

	return (
		<>
			<div className={style.inputScreen}>
				<input className={style.input} type='text' name='number' />
			</div>
		</>
	);
};

export default Screen;
