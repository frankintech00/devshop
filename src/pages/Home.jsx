import { products } from '../assets/constants/products';
import { ProductCard } from '../components';

export const Home = () => {
	return (
		<main>
			<section className='flex flex-wrap justify-between w-4/5 mx-auto'>
				{products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</section>
		</main>
	);
};
