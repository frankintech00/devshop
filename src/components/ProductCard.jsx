export const ProductCard = ({ product }) => {
	const { name, description, image, price } = product;
	return (
		<div className='flex-auto mx-5 my-5 shadow-xl card bg-base-100 w-80'>
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
					<div></div>
					<div>
						<button className='my-2 btn btn-primary'>Add to Cart</button>
					</div>
				</div>
			</div>
		</div>
	);
};
