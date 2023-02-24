import { products } from '../assets/constants/products';
import { ProductCard } from '../components';
import { useTitle } from '../hooks/useTitle';

export const Home = () => {
	// Set the page title using the useTitle hook
	useTitle('Home');

	return (
		<main>
			{/* Render a list of product cards using the data from the 'products' constant */}
			<section className='flex flex-wrap justify-between w-4/5 mx-auto'>
				{products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</section>
		</main>
	);
};

// Home is a page that displays a list of product cards. It imports the products constant that contains an array of product data, the ProductCard component, and the useTitle custom hook. The component uses the useTitle hook to set the page title. It returns a JSX template that displays a list of product cards, each rendered using the ProductCard component and passing the corresponding product object as a prop.
