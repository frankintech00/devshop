import { useCart } from '../context/CartContext';

export const ProductCart = ({ product }) => {
	// Extract product data from props
	const { name, price, image } = product;

	// Get the removeFromCart function from the CartContext
	const { removeFromCart } = useCart();

	return (
		<div className='my-2 shadow-2xl card bg-base-100'>
			<div className='flex flex-col items-center justify-between m-2 md:flex-row'>
				<div className='flex flex-col items-center justify-between m-2 md:flex-row'>
					<div>
						<img
							src={image}
							alt={name}
							className='hidden w-20 h-20 p-2 md:block'
						></img>
					</div>
					<div className='mx-2 text-2xl text-right md:mx-10'>{name}</div>
				</div>
				<div className='flex flex-col items-center justify-between m-2 md:flex-row'>
					<div className='mx-2 text-2xl text-left md:mx-10'>£{price}</div>
					<div>
						{/* Display a Remove button that calls the removeFromCart function when clicked */}
						<button
							className='m-2 btn btn-warning btn-sm'
							onClick={() => removeFromCart(product)}
						>
							Remove
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

// ProductCart.jsx is a component that displays a single product item in the cart with the product name, price, and an image. The component imports the useCart custom hook from the CartContext, which provides access to the removeFromCart function. It returns a JSX template that displays the product information and a "Remove" button, which calls the removeFromCart function when clicked to remove the item from the cart.
