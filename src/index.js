// Importing required modules from 'react', 'react-dom', 'react-router-dom', 'CartProvider' component from 'CartContext', App component and styles from 'index.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { CartProvider } from './context/CartContext';
import './index.css';

// Creating a React root for the application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the root component of the application
root.render(
	<React.StrictMode>
		{/* Using the BrowserRouter component to enable routing for the application */}
		<Router>
			{/* Using CartProvider to provide cart-related data to the application */}
			<CartProvider>
				{/* Rendering the main App component */}
				<App />
			</CartProvider>
		</Router>
	</React.StrictMode>
);

// The ReactDOM.createRoot function is used to create a React root for the application. The root is then rendered with the required components, including Router and CartProvider to enable routing and provide cart-related data to the App component. The <React.StrictMode> component is used to enable strict mode for the entire application. Finally, the rendered root component is mounted onto the DOM node with the ID 'root' using the ReactDOM.render method.
