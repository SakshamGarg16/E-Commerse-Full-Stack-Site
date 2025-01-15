import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { HomeCaroselData } from './HomeCaroselData';



const MainCarosel = () => {

    const item = HomeCaroselData.map((item) => (
        <div className='object-cover object-top'
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '300px', // Set your carousel height here
            }}
        >
            <img
                src={item.image}
                alt=""
                role='presentation object-cover object-top'
                className='cursor-pointer'
                style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain', // Ensures proper scaling
                }}
            />
        </div>
    ))

    return (<AliceCarousel
        animationType="fadeout" 
        animationDuration={1000}
        disableButtonsControls
        infinite
        items={item}
        autoPlay
        autoPlayInterval={10000}
    />)
    };

export default MainCarosel;