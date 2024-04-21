import { useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';


export const Base = () => {
	const navigate = useNavigate();
	const location = useLocation();
	useEffect(() => {
		if (location.pathname === '/') {
			navigate('home');
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[]);

  return (
				<div className= " h-93vh w-screen bg-gray-500 overflow-y-auto">
					<div>Banner bar</div>
  					<div>
    					<div>Navbar</div>
    					<Outlet />
   					</div>
				</div>
	);
};


