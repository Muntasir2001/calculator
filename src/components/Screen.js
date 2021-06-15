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

const Screen = (props) => {
	// const [value, setValue] = useState();
	const style = screenStyle();
	const { num } = props;

	// const onChange = (e) => {
	// 	const re = /^[0-9\b]+$/;

	// 	if (e.target.value === '' || re.test(e.target.value)) {
	// 		setValue({ value: e.target.value });
	// 	}
	// 	const number = e.target.validity.valid ? e.target.value : value;

	// 	if (e.target.validity.valid && num === null) {
	// 		const number = e.target.validity.valid;
	// 		setValue(number);
	// 	} else if (num !== null) {
	// 		setValue(num);
	// 	}

	// 	setValue(number);
	// };

	return (
		<>
			<div className={style.inputScreen}>
				<input
					className={style.input}
					type='text'
					name='number'
					pattern='[0-9]*'
					// onInput={onChange}
					// onChange={onChange}
					placeholder='0'
					value={num}
				/>
			</div>
		</>
	);
};

export default Screen;
