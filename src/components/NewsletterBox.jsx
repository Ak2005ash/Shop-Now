import React from 'react'

function NewsletterBox() {
    const onSubmitHandler = (e) => {
        e.preventDefault();
        // Logic to handle form submission, e.g., send email to backend
        alert("Thank you for subscribing!");
    }
  return (
    <div className='text-center'>
          <p className='text-2xl font-medium text-gray-800'>Subscribe now to get 20% off your first order!</p>
          <p className='text-gray-400 mt-3'>Enter your email below to subscribe</p>
          <form className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 rounded' onSubmit={onSubmitHandler}>
            <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email' required/>
            <button type='submit' className='bg-black text-white text-xs px-10 py-4 hover:bg-gray-800'>SUBSCRIBE</button>
          </form>
    </div>
  )
}

export default NewsletterBox