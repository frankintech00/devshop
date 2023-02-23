import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/images/logo.png';

export const Header = () => {
	return (
		<header className='w-4/5 mx-auto '>
			<div className='my-10 rounded-lg shadow-md navbar bg-base-300'>
				<div className='flex-1'>
					<Link to='/' className='flex items-center justify-between'>
						<img src={Logo} alt='CodeShoe' className='w-10 h-10' />
						<span className='text-xl normal-case btn btn-ghost'>CodeShoe</span>
					</Link>
				</div>
				<div className='flex-none'>
					<div className='dropdown dropdown-end'>
						<label tabIndex={0} className='btn btn-ghost btn-circle'>
							<div className='indicator'>
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
								<span className='badge badge-sm indicator-item'>2</span>
							</div>
						</label>
						<div
							tabIndex={0}
							className='mt-3 shadow-md card card-compact dropdown-content w-52 bg-base-300'
						>
							<div className='card-body'>
								<span className='text-lg font-bold'>2 Items</span>
								<span className='text-info'>Subtotal: £99.98</span>
								<div className='card-actions'>
									<Link to='/cart'>
										<button className='btn btn-primary btn-block'>
											View cart
										</button>
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className='m-2 dropdown dropdown-end'>
						<label
							tabIndex={0}
							className='hidden btn btn-ghost btn-circle avatar md:block'
						>
							<div className='w-10 rounded-full'>
								<img
									src='https://xsgames.co/randomusers/avatar.php?g=male'
									alt=''
								/>
							</div>
						</label>
						<ul
							tabIndex={0}
							className='p-2 mt-3 shadow-md menu menu-compact dropdown-content bg-base-300 rounded-box w-52'
						>
							<li>
								<NavLink to='/' className='justify-between bg-inherit'>
									Profile
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
