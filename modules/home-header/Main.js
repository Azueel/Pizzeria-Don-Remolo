import { useEffect, useState } from 'react';
import { MobileNavHeader } from './components/mobile/MobileNavHeader';
import NavHeader from './components/NavHeader';

const Main = () => {
	const [width, setWidth] = useState(null);
	const hasWindow = typeof window !== undefined;

	const handleResize = () => {
		if(innerWidth >= 700) setWidth(innerWidth)
		else if(width < 700) setWidth(innerWidth);
	};

	useEffect(() => {
		if(hasWindow) {
			setWidth(innerWidth);
			window.addEventListener('resize', () => {
				setTimeout(() => {
					handleResize();
				}, 1000);
			});
		};
	}, []);

	return (
		<>
			{width >= 902 
				? <NavHeader /> 
				: width < 902
				? <MobileNavHeader />
				: null
			}
		</>
	);
};

export default Main;