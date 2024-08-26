import { useState, useEffect } from "react";
import axios from "axios";

const useFetchProducts = (url) => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const getProducts = async () => {
			try {
				const { data } = await axios.get(url);
				setProducts(data);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};

		getProducts();
	}, [url]);

	return { products, loading, error };
};

export default useFetchProducts;
