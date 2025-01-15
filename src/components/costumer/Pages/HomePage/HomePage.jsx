import React from 'react';
import MainCarosel from '../../components/HomeCarosel/MainCarosel';
import MainCardCarosel from '../../components/HomeCarosel/MainCardCarosel';
import { mens_kurta } from '../../../Data/Mens/Mens_kurta';


const HomePage = () => {
    return(
        <div>
            <MainCarosel/>
            <div className='space-y-5 flex flex-col justify-center px-5 lg:px-10 py-10'>
                <MainCardCarosel data={mens_kurta} SectionName={"Mens Kurta"}/>
                <MainCardCarosel data={mens_kurta} SectionName={"Mens shoes"}/>
                <MainCardCarosel data={mens_kurta} SectionName={"Mens shirt"}/>
                <MainCardCarosel data={mens_kurta} SectionName={"women saree"}/>
                <MainCardCarosel data={mens_kurta} SectionName={"women sandle"}/>
                <MainCardCarosel data={mens_kurta} SectionName={"women bikni"}/>
            </div>
        </div>
    )
}

export default HomePage;