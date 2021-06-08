import React from 'react';
import { createUseStyles } from 'react-jss';

import Screen from './Screen';
import Numpad from './Numpad';

const calcStyle = createUseStyles({
	calcBody: {
		display: 'flex',
		flexDirection: 'column',
	},
});

const MainCalc = () => {
	const style = calcStyle();

	return (
		<>
			<div className={style.calcBody}>
				<Screen />
				<Numpad />
			</div>
		</>
	);
};

export default MainCalc;
