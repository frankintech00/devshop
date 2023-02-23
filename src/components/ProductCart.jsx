export const ProductCart = ({ product }) => {
	const { name, price, image } = product;

	return (
		<div className='my-2 shadow-2xl card bg-base-100'>
			<div className='flex flex-col items-center justify-between m-2 md:flex-row'>
				<div>
					<img
						src={image}
						alt={name}
						className='hidden w-20 h-20 p-2 md:block'
					></img>
				</div>
				<div className='m-2 text-2xl'>{name}</div>
				<div className='m-2 text-2xl'>£{price}</div>
				<div>
					<button className='m-2 btn btn-warning btn-sm'>Remove</button>
				</div>
			</div>
		</div>
	);
};
