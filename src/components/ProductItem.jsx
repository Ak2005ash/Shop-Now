import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

function ProductItem({ id, name, price, image }) {
    const { currency } = useContext(ShopContext);

    return (
        <Link
            className='text-gray-700 hover:text-gray-900 cursor-pointer group'
            to={`/product/${id}`}
        >
            {/* Image Container */}
            <div className='overflow-hidden rounded-lg shadow-sm group-hover:shadow-xl transition duration-300'>
                <img
                    className='w-full h-auto transform transition duration-500 ease-in-out group-hover:scale-110 group hover:-translate-y-1 transition duration-300'
                    src={image[0]}
                    alt=""
                />
            </div>

            {/* Text */}
            <p className='pt-3 pb-1 text-sm transition duration-300 group-hover:text-black'>
                {name}
            </p>
            <p className='text-sm font-medium'>
                {currency}{price}
            </p>
        </Link>
    )
}

export default ProductItem