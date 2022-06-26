import { useEffect, useState } from 'react'
import { productServices } from '../services/product-services/productServices';

export const useRequest = (params = {}) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		if(params.request === 'promotions') {
			productServices.getPromotions()
				.then(res => {
					setData(res.data)
				})
		};
	}, []);

	return data;
};