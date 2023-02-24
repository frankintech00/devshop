// Importing the useEffect hook from 'react'
import { useEffect } from 'react';

// Defining the useTitle custom hook
export const useTitle = (title) => {
	// Using the useEffect hook to update the document title whenever the 'title' argument changes
	useEffect(() => {
		document.title = `${title} | DevShoe`;
	}, [title]);

	// Returning null because this custom hook doesn't render any components
	return null;
};

// The useTitle custom hook is used to update the document title whenever the 'title' argument changes. The useEffect hook is used to update the document title whenever the 'title' argument changes. The document.title property is used to set the document title, and the title argument is used to set the document title. The title argument is passed as a dependency to the useEffect hook, so that the document title is updated whenever the title argument changes.
