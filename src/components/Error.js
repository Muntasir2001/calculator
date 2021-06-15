import React from 'react';
import { createUseStyles } from 'react-jss';

const errorStyle = createUseStyles({
	error: {},
});

const Error = () => {
	const style = errorStyle;

	return (
		<>
			<div className={style.error}></div>
		</>
	);
};

export default Error;
