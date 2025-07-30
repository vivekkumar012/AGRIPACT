import React from 'react'
import vector11 from '../assets/vector11.svg'
import vector22 from '../assets/vector22.svg'
import vector33 from '../assets/vector33.svg'

function Section() {
  return (
    <div className='h-2/5 p-10'>
      <h1 className='text-2xl font-semibold uppercase text-center'>What we Offer</h1>
      <p className='text-lg text-center mt-3 mb-[100px] opacity-90'>Being a part of AgriPact</p>

      <div className='flex justify-center items-center mb-[100px] mediaQuery'>
         <div className='mx-5 p-9 rounded-2xl bg-white shadow-md mb-2.5'>
            <img src={vector11} alt="" className='h-70 w-70 mx-auto'/>
            <h3 className='text-xl mb-1 text-center font-semibold mt-5'>24*7 Customer Support</h3>
            <p className='text-md text-center font-normal'>We’re just one call away.</p>
        </div>

        <div className='mx-5 p-9 rounded-2xl bg-white shadow-md mb-2.5'>
            <img src={vector22} alt="" className='h-70 w-70 mx-auto'/>
            <h3 className='text-xl mb-1 text-center font-semibold mt-5'>Trusted Sellers/Buyers</h3>
            <p className='text-md text-center font-normal'>Ensured safety of your experience.</p>
        </div>


        <div className='mx-5 p-9 rounded-2xl bg-white shadow-md mb-2.5'>
            <img src={vector33} alt="" className='h-70 w-70 mx-auto'/>
            <h3 className='text-xl mb-1 text-center font-semibold mt-5'>One-click Booking</h3>
            <p className='text-md text-center font-normal'>Time saving bookings.</p>
        </div>

      </div>
    </div>
  )
}

export default Section
