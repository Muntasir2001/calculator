import './App.scss';
import Title from './components/Title';
import MainCalc from './components/MainCalc';

function App() {
	return (
		<>
			<div className='home'>
				<div className='calc-home'>
					<div className='top-bar'>
						<Title />
					</div>
					<div className='main-part'>
						<MainCalc />
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
