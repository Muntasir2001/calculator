import React from 'react';
import { createUseStyles } from 'react-jss';

const titleStyle = createUseStyles({
	title: {
		fontFamily: 'arial',
		color: '#fff',
	},
});

const Title = () => {
	const style = titleStyle();

	return (
		<>
			<h2 className={style.title}>calc</h2>
		</>
	);
};

export default Title;
