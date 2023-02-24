// Importing required modules from 'react-router-dom', 'Cart' component and 'Home' component from 'pages' folder
import { Route, Routes } from 'react-router-dom';
import { Cart, Home } from '../pages';

// Defining the AllRoutes component
export const AllRoutes = () => {
	// Rendering the Home and Cart components based on the provided URL path
	return (
		<>
			{/* Using the Routes and Route components from react-router-dom to enable client-side routing */}
			<Routes>
				{/* Defining a route for the home page */}
				<Route path='/' element={<Home />} />
				{/* Defining a route for the cart page */}
				<Route path='/cart' element={<Cart />} />
			</Routes>
		</>
	);
};

// The AllRoutes component defines the routes for the different pages in the application. It imports the Route and Routes components from the react-router-dom library, as well as the Cart and Home components from the ../pages directory. The Routes component is used to define the different routes, and the Route component is used to define each individual route. Each route is defined with a path and an element that is rendered when the path is matched. In this case, the Home component is rendered when the path is '/', and the Cart component is rendered when the path is '/cart'
