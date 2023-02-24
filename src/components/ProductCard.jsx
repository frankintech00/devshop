import { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';

export const ProductCard = ({ product }) => {
	// Get cart data and functions from the CartContext
	const { cartList, addToCart, removeFromCart } = useCart();
	// State to keep track of whether the product is in the cart
	const [isInCart, setIsInCart] = useState(false);

	// Extract product data from props
	const { id, name, price, image, description } = product;

	useEffect(() => {
		// Check if the product is already in the cart
		const productIsInCart = cartList.find((cartItem) => cartItem.id === id);

		// Update the state to reflect whether the product is in the cart
		if (productIsInCart) {
			setIsInCart(true);
		} else {
			setIsInCart(false);
		}
	}, [cartList, id]);

	return (
		<div className='flex-auto mx-5 my-5 shadow-2xl card bg-base-100 w-80'>
			<figure>
				<img src={image} alt={name} />
			</figure>
			<div className='card-body'>
				<h2 className='card-title'>{name}</h2>
				<p>{description}</p>
				<div className='items-center justify-between mt-10 card-actions'>
					<div className='text-2xl card-price'>
						<h3>£{price}</h3>
					</div>
					<div>
						{/* If the product is in the cart, display a remove button, otherwise display an add to cart button */}
						{isInCart ? (
							<button
								className='btn btn-secondary'
								onClick={() => removeFromCart(product)}
							>
								Remove
							</button>
						) : (
							<button
								className='btn btn-accent'
								onClick={() => addToCart(product)}
							>
								Add To Cart
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

// ProductCard.jsx is a component that displays a single product item with an image, name, description, price, and "Add to Cart" or "Remove" button, depending on whether the product is already in the cart. The component imports the useCart custom hook from the CartContext, which provides access to the cart data and functions. It uses useEffect hook to check whether the current product is already in the cart and updates the state to reflect that. Finally, it returns a JSX template that displays the product information and the appropriate button based on whether the product is in the cart.
