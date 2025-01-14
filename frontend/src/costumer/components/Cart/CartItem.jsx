import { Button, IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const CartItem = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/n/p/q/xxl-white-kurta-lilen-spoque-original-imagnk2zzcgqst3r.jpeg?q=70"
            alt=""
          />
        </div>
        <div className="ml-5 space-y-4">
          <p className="font-semibold">Men Solid Pure Cotton Straight Kurta</p>
          <p className="opacity-70">Size:L,Black</p>
          <p className="opacity-70 mt-2">Seller:Nofilter</p>

          <div className="flex items-center space-x-5 text-gray-900 mt-6">
            <p className="font-semibold">₹199</p>
            <p className="opacity-50 line-through ">₹211</p>
            <p className="text-green-600 font-semibold"> 5% </p>
          </div>

        </div>

      </div>

      <div className="lg:flex items-center lg:space-x-10 pt-4">
            <div className="flex items-center space-x-2">
                <IconButton>
                <RemoveCircleOutlineIcon/>
                </IconButton>
                <span className="py-2 px-5 border rounded-sm">
                3
                </span>
                <IconButton sx={{color:"RGB(145 85 253)"}}>
                <AddCircleOutlineIcon/>
                </IconButton>
            </div>
            <div>
                <Button sx={{color:"RGB(145 85 253)"}} >Remove</Button>
            </div>

        </div>


    </div>
  );
};

export default CartItem;
