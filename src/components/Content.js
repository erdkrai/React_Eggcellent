import React from 'react'
import ImageOne from '../images/egg1.jpg'
import ImageTwo from '../images/egg2.jpg'

const Content = () => {
    return (
        <>
        <div className='flex flex-col justify-center items-center bg-white h-f-screen font-mobo py-40'>
            <img src={ImageOne} alt="egg 1" className='h-full w-1/2 rounded-lg mb-20 shadow-2xl'></img>

            <div className='flex flex-col juetify-center items-center'>
                <h2 className='text-2xl mb-2'>Egg Muffins</h2>
                <p className='mb-2'>Crispy, delicious, and nutritious</p>
                <span>$16</span>
            </div>
        </div>

        <div className='flex flex-col justify-center items-center bg-white h-f-screen font-mobo py-40'>
            <img src={ImageTwo} alt="egg 1" className='h-full w-1/2 rounded-lg mb-20 shadow-2xl'></img>

            <div className='flex flex-col juetify-center items-center'>
                <h2 className='text-2xl mb-2'>Egg Salad</h2>
                <p className='mb-2'>Crispy, delicious, and nutritious</p>
                <span>$18</span>
            </div>
        </div>

        </>
    )
}

export default Content
