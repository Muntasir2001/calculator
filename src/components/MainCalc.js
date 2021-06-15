import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';

import Screen from './Screen';
import Numpad from './Numpad';
import Button from './Button';
// eslint-disable-next-line
import Error from './Error';

const calcStyle = createUseStyles({
	calcBody: {
		display: 'flex',
		flexDirection: 'column',
	},
});

const MainCalc = () => {
	const style = calcStyle();
	const [data, setData] = useState(0);

	const calculate = () => {
		try {
			// eslint-disable-next-line
			const result = eval(data);
			setData(result);
		} catch (err) {
			console.log(err);
		}
	};

	const handleClick = (e) => {
		const value = e.target.getAttribute('value');

		/* test */
		// console.log('clicked');
		// console.log(value);
		// console.log(parseInt('a'));

		switch (value) {
			case 'RESET':
				setData('');
				break;
			case '=':
				calculate();
				break;
			case 'DEL':
				break;
			default:
				setData((val) => {
					return (val += value);
				});
		}
	};

	return (
		<>
			<div className={style.calcBody}>
				<Screen num={data} />
				<Numpad>
					<Button
						onClick={handleClick}
						label={'7'}
						value={'7'}
						bkgColor={'#eae3dc'}
						color={'#444b5a'}
						isOp={false}
					/>
					<Button
						onClick={handleClick}
						label={'8'}
						value={'8'}
						bkgColor={'#eae3dc'}
						color={'#444b5a'}
						isOp={false}
					/>
					<Button
						onClick={handleClick}
						label={'9'}
						value={'9'}
						bkgColor={'#eae3dc'}
						color={'#444b5a'}
						isOp={false}
					/>
					<Button
						onClick={handleClick}
						label={'DEL'}
						value={'DEL'}
						bkgColor={'#637097'}
						color={'#eae3dc'}
						isOp={true}
						className={'del'}
					/>
					<Button
						onClick={handleClick}
						label={'4'}
						value={'4'}
						bkgColor={'#eae3dc'}
						color={'#444b5a'}
						isOp={false}
					/>
					<Button
						onClick={handleClick}
						label={'5'}
						value={'5'}
						bkgColor={'#eae3dc'}
						color={'#444b5a'}
						isOp={false}
					/>
					<Button
						onClick={handleClick}
						label={'6'}
						value={'6'}
						bkgColor={'#eae3dc'}
						color={'#444b5a'}
						isOp={false}
					/>
					<Button
						onClick={handleClick}
						label={'+'}
						value={'+'}
						bkgColor={'#eae3dc'}
						color={'#444b5a'}
						isOp={true}
					/>
					<Button
						onClick={handleClick}
						label={'1'}
						value={'1'}
						bkgColor={'#eae3dc'}
						color={'#444b5a'}
						isOp={false}
					/>
					<Button
						onClick={handleClick}
						label={'2'}
						value={'2'}
						bkgColor={'#eae3dc'}
						color={'#444b5a'}
						isOp={false}
					/>
					<Button
						onClick={handleClick}
						label={'3'}
						value={'3'}
						bkgColor={'#eae3dc'}
						color={'#444b5a'}
						isOp={false}
					/>
					<Button
						onClick={handleClick}
						label={'-'}
						value={'-'}
						bkgColor={'#eae3dc'}
						color={'#444b5a'}
						isOp={true}
					/>
					<Button
						onClick={handleClick}
						label={'.'}
						value={'.'}
						bkgColor={'#eae3dc'}
						color={'#444b5a'}
						isOp={false}
					/>
					<Button
						onClick={handleClick}
						label={'0'}
						value={'0'}
						bkgColor={'#eae3dc'}
						color={'#444b5a'}
						isOp={false}
					/>
					<Button
						onClick={handleClick}
						label={'/'}
						value={'/'}
						bkgColor={'#eae3dc'}
						color={'#444b5a'}
						isOp={true}
					/>
					<Button
						onClick={handleClick}
						label={'x'}
						value={'*'}
						bkgColor={'#eae3dc'}
						color={'#444b5a'}
						isOp={true}
					/>
					<Button
						onClick={handleClick}
						label={'RESET'}
						value={'RESET'}
						bkgColor={'#637097'}
						color={'#444b5a'}
						isOp={true}
						className={'reset'}
					/>
					<Button
						onClick={handleClick}
						label={'='}
						value={'='}
						bkgColor={'#d03f2f'}
						color={'#eae3dc'}
						isOp={true}
						className={'equal'}
					/>
				</Numpad>
			</div>
		</>
	);
};

export default MainCalc;
