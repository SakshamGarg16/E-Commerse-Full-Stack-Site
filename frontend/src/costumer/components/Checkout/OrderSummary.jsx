import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import CartItem from '../Cart/CartItem'
import { Button } from '@mui/material'


const OrderSummary = () => {
  return (
    <div>
      <div className='p-5 shadow-lg rounded-s-md border'>
        <AddressCard/>
      </div>

      <div className='mt-10'>
      <div className="lg:grid grid-cols-3 relative">
        <div className="col-span-2">
          {[1,1,1,1].map((item)=><CartItem />)}
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border">
            <p className="uppercase font-bold opacity-60 pb-4"> Price details</p>
            <hr />
            <div className="space-y-3 font-semibold mb-7">
                <div className="flex justify-between pt-3 text-black">
                    <span>Price</span>
                    <span>₹999</span>
                </div>
                <div className="flex justify-between pt-3 text-black">
                    <span>Discount</span>
                    <span className="text-green-600">-₹399</span>
                </div>
                <div className="flex justify-between pt-3 text-black">
                    <span>Delivery Charge</span>
                    <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between pt-3 text-black font-bold">
                    <span>Total Amount</span>
                    <span className="text-green-600">₹499</span>
                </div>

            </div>
            <Button variant="contained" fullWidth sx={{px:"3rem",py:"0.8rem",bgcolor:"#9155fd"}}>
                  Checkout
                </Button>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}

export default OrderSummary