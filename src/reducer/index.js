import React, { useState } from 'react';
import useStore from './sumReducer';

function ReducerHook() {
	const [firstNumber, setFirstNumber] = useState('');
	const [secondNumber, setSecondNumber] = useState('');

	// state e action
	const [store, dispatch] = useStore();

	const add = () => {
		const firstNumberInt = parseInt(firstNumber);
		const secondNumberInt = parseInt(secondNumber);

		console.log('Dispatching action');
		dispatch({
			type: 'SUM',
			payload: firstNumberInt + secondNumberInt
		});
	};

	const remove = () => {
		const firstNumberInt = parseInt(firstNumber);
		const secondNumberInt = parseInt(secondNumber);

		console.log('Dispatching action');
		dispatch({
			type: 'SUBTRACTION',
			payload: firstNumberInt - secondNumberInt
		});
	};

	return (
		<div className='container'>
			<h1>Calculator using Flux</h1>
			First Number: <br />
			<input type='text' value={firstNumber} onChange={e => setFirstNumber(e.target.value)} /> <br />
			<br />
			Second Number: <br />
			<input type='text' value={secondNumber} onChange={e => setSecondNumber(e.target.value)} /> <br />
			<br />
			<button className='btn btn-success' onClick={add}>
				Sum
			</button>
			<button className='btn btn-danger' onClick={remove}>
				Subtract
			</button>
			<br />
			<br />
			<div class='alert alert-dismissible alert-success'>Result: {store.result}</div>
		</div>
	);
}

export default ReducerHook;
