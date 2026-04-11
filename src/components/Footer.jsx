import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                <div>
                    <img src={assets.logo} className='mb-5 w-32' alt="Logo" />
                    <p className='w-full md:w-2/3 text-gray-600'>
                        Your one-stop destination for fashion and essentials.
                        Quality products, trusted by thousands of happy customers.
                    </p>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>

                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>123 Main Street</li>
                        <li>City, State 12345</li>
                        <li>Email: info@yourcompany.com</li>
                        <li>Phone: (123) 456-7890</li>
                    </ul>

                </div>
            </div>
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>© 2026 Your Company Name. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer