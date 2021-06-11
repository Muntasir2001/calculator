import React from 'react';
import { createUseStyles } from 'react-jss';

import Button from './Button';

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

const Numpad = () => {
	const style = numpadStyle();

	return (
		<>
			<div className={style.numpad}>
				<Button
					label={'7'}
					value={'7'}
					bkgColor={'#eae3dc'}
					color={'#444b5a'}
					isOp={false}
				/>
				<Button
					label={'8'}
					value={'8'}
					bkgColor={'#eae3dc'}
					color={'#444b5a'}
					isOp={false}
				/>
				<Button
					label={'9'}
					value={'9'}
					bkgColor={'#eae3dc'}
					color={'#444b5a'}
					isOp={false}
				/>
				<Button
					label={'DEL'}
					value={'DEL'}
					bkgColor={'#637097'}
					color={'#eae3dc'}
					isOp={true}
					className={'del'}
				/>
				<Button
					label={'4'}
					value={'4'}
					bkgColor={'#eae3dc'}
					color={'#444b5a'}
					isOp={false}
				/>
				<Button
					label={'5'}
					value={'5'}
					bkgColor={'#eae3dc'}
					color={'#444b5a'}
					isOp={false}
				/>
				<Button
					label={'6'}
					value={'6'}
					bkgColor={'#eae3dc'}
					color={'#444b5a'}
					isOp={false}
				/>
				<Button
					label={'+'}
					value={'+'}
					bkgColor={'#eae3dc'}
					color={'#444b5a'}
					isOp={true}
				/>
				<Button
					label={'1'}
					value={'1'}
					bkgColor={'#eae3dc'}
					color={'#444b5a'}
					isOp={false}
				/>
				<Button
					label={'2'}
					value={'2'}
					bkgColor={'#eae3dc'}
					color={'#444b5a'}
					isOp={false}
				/>
				<Button
					label={'3'}
					value={'3'}
					bkgColor={'#eae3dc'}
					color={'#444b5a'}
					isOp={false}
				/>
				<Button
					label={'-'}
					value={'-'}
					bkgColor={'#eae3dc'}
					color={'#444b5a'}
					isOp={true}
				/>
				<Button
					label={'.'}
					value={'.'}
					bkgColor={'#eae3dc'}
					color={'#444b5a'}
					isOp={false}
				/>
				<Button
					label={'0'}
					value={'0'}
					bkgColor={'#eae3dc'}
					color={'#444b5a'}
					isOp={false}
				/>
				<Button
					label={'/'}
					value={'/'}
					bkgColor={'#eae3dc'}
					color={'#444b5a'}
					isOp={true}
				/>
				<Button
					label={'x'}
					value={'x'}
					bkgColor={'#eae3dc'}
					color={'#444b5a'}
					isOp={true}
				/>
				<Button
					label={'RESET'}
					value={'RESET'}
					bkgColor={'#637097'}
					color={'#444b5a'}
					isOp={true}
					className={'reset'}
				/>
				<Button
					label={'='}
					value={'='}
					bkgColor={'#d03f2f'}
					color={'#eae3dc'}
					isOp={true}
					className={'equal'}
				/>
			</div>
		</>
	);
};

export default Numpad;
