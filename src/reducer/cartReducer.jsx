// Defining the cartReducer function that takes in the current state and an action
export const cartReducer = (state, action) => {
	// Destructuring the action object to get the type and payload properties
	const { type, payload } = action;

	// Using a switch statement to determine how to modify the state based on the type of the action
	switch (type) {
		// If the action type is 'ADD_TO_CART', update the state with the new cart list
		case 'ADD_TO_CART':
			return { ...state, cartList: payload.products };

		// If the action type is 'REMOVE_FROM_CART', update the state with the new cart list
		case 'REMOVE_FROM_CART':
			return { ...state, cartList: payload.products };

		// If the action type is 'UPDATE_TOTAL', update the state with the new total
		case 'UPDATE_TOTAL':
			return { ...state, total: payload.total };

		// If the action type doesn't match any of the cases, throw an error
		default:
			throw new Error('No Case Found In cartReducer');
	}
};

// The cartReducer function is used to modify the state of the application based on the type of action that is dispatched. The function takes in the current state and an action as parameters. The action is destructured to get the type and payload properties. The type property is used to determine how to modify the state, and the payload property is used to get the data that is used to modify the state. The switch statement is used to determine how to modify the state based on the type of the action. If the action type is 'ADD_TO_CART', the state is updated with the new cart list. If the action type is 'REMOVE_FROM_CART', the state is updated with the new cart list. If the action type is 'UPDATE_TOTAL', the state is updated with the new total. If the action type doesn't match any of the cases, an error is thrown.
