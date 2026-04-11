import React, { use } from 'react'
import Title from '../components/Title'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

function Orders() {
  const { products, currency } = useContext(ShopContext);
  return (

    <div className='border-t pt-16'>
      <div className='text-2xl'>
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>
      <div>
        {
          products.slice(1, 4).map((item, index) => (

            <div key={index} className='flex flex-col md:flex-row items-center justify-between gap-4 border-t border-b border-gray-200 py-4 text-gray-700'>
              <div className='flex items-start gap-6 text-sm'>
                <img className='w-16 sm:w-20' src={item.image[0]} alt="" />
                <div>
                  <p className='text-base font-medium'>{item.name}</p>
                  <div className='mt-2 gap-3 flex items-center text-base text-gray-700'>
                    <p className='text-lg'>{currency}{item.price}</p>
                    <p className='px-2 py-1 border border-gray-300 bg-slate-50'>Quantity: 1</p>
                    <p>Size: M</p>

                  </div>
                  <p className='mt-2'>
                    Date: <span className='text-gray-400'>2023-10-15</span>
                  </p>
                </div>
              </div>
              <div className='md:w-1/2 flex justify-between'>
                <div className='flex items-center gap-2'>
                  <p className='min-w-2 h-2 rounded-full bg-green-500 '></p>
                  <p className='text-sm text-base'>Ready to ship</p>
                </div>
                <button className="px-4 py-2 text-sm font-semibold text-white 
                   bg-gradient-to-r from-gray-800 to-gray-600 
                   rounded-lg shadow-lg transition-all duration-300">
                  Track Order
                </button>
              </div>

            </div>

          ))
        }
      </div>

    </div>
  )
}

export default Orders