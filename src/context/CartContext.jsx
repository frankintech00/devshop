// Importing required modules from 'react' and the 'cartReducer' function
import { createContext, useContext, useReducer } from 'react';
import { cartReducer } from '../reducer/cartReducer';

// Defining the initial state of the Cart context
const initialState = {
	cartList: [],
	total: 0,
};

// Creating a new context using the createContext function from 'react'
const CartContext = createContext(initialState);

// Defining the CartProvider component that provides the Cart context to its children
export const CartProvider = ({ children }) => {
	// Using the useReducer hook to create a state and dispatch function for the Cart context
	const [state, dispatch] = useReducer(cartReducer, initialState);

	// Defining a function to add a product to the Cart context
	const addToCart = (product) => {
		// Concatenating the product to the existing cart list
		const updatedCartList = state.cartList.concat(product);

		// Updating the total based on the updated cart list
		updateTotal(updatedCartList);

		// Dispatching an action to update the Cart context with the new cart list
		dispatch({
			type: 'ADD_TO_CART',
			payload: {
				products: updatedCartList,
			},
		});
	};

	// Defining a function to remove a product from the Cart context
	const removeFromCart = (product) => {
		// Filtering the existing cart list to remove the specified product
		const updatedCartList = state.cartList.filter(
			(current) => current.id !== product.id
		);

		// Updating the total based on the updated cart list
		updateTotal(updatedCartList);

		// Dispatching an action to update the Cart context with the new cart list
		dispatch({
			type: 'REMOVE_FROM_CART',
			payload: {
				products: updatedCartList,
			},
		});
	};

	// Defining a function to update the total based on the current cart list
	const updateTotal = (products) => {
		let total = 0;
		products.forEach((product) => (total = total + product.price));

		// Dispatching an action to update the Cart context with the new total
		dispatch({
			type: 'UPDATE_TOTAL',
			payload: {
				total,
			},
		});
	};

	// Creating an object with the Cart context's state and functions
	const value = {
		total: state.total,
		cartList: state.cartList,
		addToCart,
		removeFromCart,
	};

	// Providing the Cart context to its children using the CartContext.Provider component
	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// Defining the useCart custom hook to consume the Cart context
export const useCart = () => {
	const context = useContext(CartContext);
	return context;
};

// The CartContext.jsx file is used to create the Cart context and provide it to its children. The Cart context is used to store the cart list and total of the application. The CartProvider component is used to provide the Cart context to its children. The useReducer hook is used to create a state and dispatch function for the Cart context. The cartReducer function is used to modify the state of the application based on the type of action that is dispatched. The addToCart function is used to add a product to the Cart context. The removeFromCart function is used to remove a product from the Cart context. The updateTotal function is used to update the total based on the current cart list. The useCart custom hook is used to consume the Cart context.
