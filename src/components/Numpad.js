import React from 'react';
import { createUseStyles } from 'react-jss';

const numpadStyle = createUseStyles({
	numpad: {
		marginTop: '30px',
		background: '#232c43',
		display: 'grid',
		gridTemplateColumns: 'repeat(4, 1fr)',
		padding: '15px',
		borderRadius: '8px',
	},
});

const Numpad = ({ children }) => {
	const style = numpadStyle();

	return (
		<>
			<div className={style.numpad}>{children}</div>
		</>
	);
};

export default Numpad;