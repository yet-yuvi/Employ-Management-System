import { Outlet } from 'react-router-dom';
import { BannerBar } from '../components';



export const Base = () => {

  return (
				<div className= "w-screen">
					<div><BannerBar /></div>
  					<div>
    					<div>Navbar</div>
    					<div><Outlet /></div>
   					</div>
				</div>
	);
};


