import { ProductCart } from '../components';

export const Cart = () => {
	const products = [
		{
			id: 1,
			name: 'Salomon Speedcross 5',
			price: 149,
			image: '/assets/images/shoe1.png',
			description:
				'Lorizzle mah nizzle dolizzle sit amizzle, my shizz adipiscing elit',
		},
		{
			id: 2,
			name: 'Asics	Gel Nimbus 22',
			price: 49,
			image: '/assets/images/shoe2.png',
			description:
				'Lorizzle mah nizzle dolizzle sit amizzle, my shizz adipiscing elit',
		},
	];
	return (
		<main>
			<section className='flex flex-col w-4/5 mx-auto'>
				<h2 className='my-10 text-2xl text-center'>
					Cart Items: {products.length}
				</h2>
				{products.map((product) => (
					<ProductCart key={product.id} product={product} />
				))}
			</section>
		</main>
	);
};
