import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import StarIcon from '@mui/icons-material/StarBorder';

const OrderDetail = () => {
  return (
    <div className='px-5 lg:px-20' >
      <div className=' border shadow-xl space-x-3 hover:shadow-2xl'>
        <h1 className='font-bold text-xl py-7 space-x-3'>Delivery Address</h1>
      <AddressCard/>
      </div>
      <div className='py-20'>
        <OrderTracker activeStep={3}/>
      </div>

      <Grid className='space-y-5' container>

        {[1,1,1,1,1].map((item)=><Grid item container className='shadow-xl p-5 border rounded-md' sx={{alignItems:'center',justifyContent:'space-between'}}>
            <Grid item xs={6}>
              <div className='flex items-center space-x-10'>
                <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70" alt="" />
                <div className='space-y-2'>
                  <p className='font-semibold'>Men Printed Pure Cotton Straight Kurta</p>
                  <p className='flex items-center opacity-50 text-xs space-x-5'>
                    <span>Color : Green</span>
                    <span>Size : L</span>
                  </p>
                  <p>Seller:Majestic Man</p>
                  <p>₹499</p>
                </div>
              </div>
            </Grid>
            <Grid item >
              <Box >
                <StarIcon sx={{color:'green',fontSize:"3rem"}} className='px-2 text-5xl' />
                <span>Rate & Review Product</span>

              </Box>

            </Grid>
        </Grid>)}

      </Grid>

    </div>
    
  )
}

export default OrderDetail