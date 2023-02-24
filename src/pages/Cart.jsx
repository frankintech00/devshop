import { ProductCart } from '../components';
import { useCart } from '../context/CartContext';
import { useTitle } from '../hooks/useTitle';

export const Cart = () => {
	// Get the cartList and total from the CartContext
	const { total, cartList } = useCart();

	// Set the page title using the useTitle hook
	useTitle('Cart');

	return (
		<main>
			<section className='flex flex-col w-4/5 mx-auto'>
				<h2 className='my-10 text-2xl text-center'>
					Cart Items: {cartList.length} / £{total}
				</h2>

				{/* Display the list of items in the cart */}
				{cartList.map((product) => (
					<ProductCart key={product.id} product={product} />
				))}
			</section>
		</main>
	);
};

// Cart.jsx is a page that displays the list of products in the cart. It imports the ProductCart component, the useCart custom hook from the CartContext, and the useTitle custom hook. The component uses the useCart hook to get the cartList and total values from the CartContext, and uses the useTitle hook to set the page title. It returns a JSX template that displays the total number of items in the cart and their total price, followed by a list of items in the cart, each rendered using the ProductCart component.
