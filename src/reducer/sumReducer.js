import { useReducer } from 'react';

const STATE_INITIAL = {
	result: ''
};

const sumReducer = (state = STATE_INITIAL, action) => {
	console.log('Action executed: ', JSON.stringify(action));
	switch (action.type) {
		case 'SUM':
			return { ...state, result: action.payload };
			break;
		case 'SUBTRACTION':
			return { ...state, result: action.payload };
			break;
		default:
			return state;
			break;
	}
};

const useStore = () => useReducer(sumReducer, STATE_INITIAL);
export default useStore;
