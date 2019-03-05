export const addNumberEvent = number => ({
	type: 'ADD_NUMBER',
	payload: number
});

export const clearNumbersEvent = () => ({
	type: 'CLEAR_NUMBERS'
});