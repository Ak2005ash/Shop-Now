import React, { use } from 'react'
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';
import { useEffect } from 'react';

function RelatedProducts({category,subcategory}) {
    const { products } = React.useContext(ShopContext);
    const [related, setRelated] = React.useState([]);

    useEffect(() => {
          if(products.length > 0){
            let productsCopy = products.slice();
            productsCopy = productsCopy.filter((item) => category === item.category);
            productsCopy = productsCopy.filter((item) => subcategory === item.subcategory);
            setRelated(productsCopy.slice(0, 5));
          }
    },[])

  return (
    <div className='my-24'>
       <div className='text-center text-3xl py-2'>
            <Title text1={'Related'} text2={'Products'} />
       </div>
       <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
           {related.map((item,index) => (
            <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
           ))}
       </div>
    </div>
  )
}

export default RelatedProducts