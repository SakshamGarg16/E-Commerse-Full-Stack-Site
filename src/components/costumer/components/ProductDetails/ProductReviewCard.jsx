import { Avatar, Box, Grid, Rating } from '@mui/material'

import React from 'react'

const ProductReviewCard = () => {
  return (
    <Grid container spacing={2} gap={3}>
        <Grid item sx={1}>
            <Box>
                <Avatar className='text-white' sx={{width:56, height:56,bgcolor:'#9155fd'}}>R</Avatar>
            </Box>
        </Grid>
        <Grid item sx={9}>
            <div className='space-y-2 '>
                <div>
                    <p className='font-semibold text-lg'>Ram</p>
                    <p className='opacity-70'>April 5,2021</p>
                </div>
            </div>
            <Rating value={4} name='half-rating' precision={0.5} readOnly/>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, animi.</p>
        </Grid>
    </Grid>
  )
}

export default ProductReviewCard