// Importing required modules from 'react', 'Header' component and 'AllRoutes' component from 'routes' folder
import React from 'react';
import { Header } from './components';
import { AllRoutes } from './routes/AllRoutes';

// Defining the main App component
function App() {
	// Rendering the Header and AllRoutes components
	return (
		<div>
			<Header />
			<AllRoutes />
		</div>
	);
}

// Exporting the App component
export default App;

// This code defines the main App component, which is composed of two child components: Header and AllRoutes. The Header component is imported from the ./components file, and the AllRoutes component is imported from the ./routes/AllRoutes file. Once these components are imported, they are rendered inside a <div> element that wraps them together. Finally, the App component is exported	using the export default statement.
