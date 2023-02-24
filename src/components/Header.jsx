// Importing required modules from 'react', 'react-router-dom', the CartContext, and the logo image
import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import { useCart } from '../context/CartContext';

// Defining the Header component
export const Header = () => {
	// Using the useCart custom hook to get the total and cart list from the Cart context
	const { total, cartList } = useCart();

	return (
		<header className='w-4/5 mx-auto'>
			<div className='my-10 rounded-lg shadow-2xl navbar bg-base-100'>
				<div className='flex-1'>
					{/* Link to the homepage */}
					<Link to='/' className='flex items-center justify-between'>
						<img src={Logo} alt='CodeShoe' className='w-10 h-10' />
						<span className='text-xl normal-case btn btn-ghost'>CodeShoe</span>
					</Link>
				</div>
				<div className='flex-none'>
					{/* Dropdown for the shopping cart */}
					<div className='dropdown dropdown-end'>
						<label tabIndex={0} className='mx-2 btn btn-ghost btn-circle'>
							<div className='indicator'>
								{/* Shopping cart icon */}
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='w-5 h-5'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
									/>
								</svg>
								{/* Shopping cart item count */}
								<span className='badge badge-sm indicator-item'>
									{cartList.length}
								</span>
							</div>
						</label>
						<div
							tabIndex={0}
							className='mt-3 shadow-2xl card card-compact dropdown-content w-52 bg-base-100'
						>
							<div className='card-body'>
								<div className='flex items-center justify-between'>
									{/* Shopping cart item count and subtotal */}
									<span className='text-lg font-bold'>
										{cartList.length} Items
									</span>
									<span className='text-info'>Subtotal: £{total}</span>
								</div>
								<div className='mx-auto card-actions'>
									{/* Link to the shopping cart */}
									<Link to='/cart'>
										<button className='btn btn-primary btn-block'>
											View cart
										</button>
									</Link>
								</div>
							</div>
						</div>
					</div>
					{/* Dropdown for user profile */}
					<div className='dropdown dropdown-end'>
						<label
							tabIndex={0}
							className='hidden mx-2 btn btn-ghost btn-circle avatar md:block'
						>
							<div className='w-10 rounded-full'>
								{/* User avatar */}
								<img
									src='https://xsgames.co/randomusers/avatar.php?g=male'
									alt=''
								/>
							</div>
						</label>
						<ul
							tabIndex={0}
							className='p-2 mt-3 shadow-2xl menu menu-compact dropdown-content bg-base-100 rounded-box w-52'
						>
							{/* Links to user profile pages */}
							<li>
								<NavLink to='/' className='justify-between bg-inherit'>
									Profile
									{/* Badge for new items */}
									<span className='badge'>New</span>
								</NavLink>
							</li>
							<li>
								<NavLink to='/' className='bg-inherit'>
									Settings
								</NavLink>
							</li>
							<li>
								<NavLink to='/' className='bg-inherit'>
									Logout
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</header>
	);
};

// The Header.jsx file contains the Header component that defines the header section of the application. It imports the logo image and the useCart custom hook from the CartContext, and displays a navigation bar with links to the homepage, shopping cart, and user profile pages. The shopping cart icon and item count are displayed using a dropdown, which is populated with the cart items and subtotal when clicked. The user avatar and profile links are also displayed using a dropdown.
