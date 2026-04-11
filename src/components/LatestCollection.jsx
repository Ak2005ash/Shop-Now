import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import { useState } from 'react';
import { useEffect } from 'react';
import ProductItem from './ProductItem';

function LatestCollection() {
    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        // Logic to set latest products
        setLatestProducts(products.slice(0, 10)); // Assuming the first 10 products are the latest
    }, []);


    return (
        <div className='my-8'>

            <div className='py-8 text-center text-3xl'>
                <Title text1={"LATEST"} text2={"COLLECTIONS"} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    Explore our latest collection of fashion-forward clothing and accessories for both men and women.
                </p>
            </div>
            {/* {Rendering Products} */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    latestProducts.map((item, index) => (
                        <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
                    ))
                }
            </div>
        </div>
    )
}

export default LatestCollection