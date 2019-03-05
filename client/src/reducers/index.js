import { combineReducers } from 'redux';

// numbers reducer
const numbers = (state = [], action) => {
	switch (action.type) {
		case 'ADD_NUMBER':
			return [
			        ...state,
			        action.payload
			];
		case 'CLEAR_NUMBERS':
			return state.length === 0? state: [];
		default:
			return state;
	}
};

// Combine all the reducers and export
export default combineReducers({ numbers });