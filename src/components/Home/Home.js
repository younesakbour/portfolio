import Header from '../Header/Header';
import React from 'react';
import Objects from "../../images/objects.png";

class Home extends React.Component {
    
    render() {
    return (
        <div className={`relative bg-cover bg-center bg-[url("images/sky.jpg")] h-screen selection:bg-violet-500`}>
            <Header />
            <div className='h-full md:h-3/4 flex p-10 md:p-20 w-full'>
                <div className='flex flex-col-reverse md:flex-row-reverse justify-center items-center md:justify-between'>
                    <div className='w-4/5 md:w-1/2 opacity-50 mb-24 md:mb-0'>
                        <img className='transition duration-700 ease-in-out hover:scale-105' src={Objects} alt="Laravellogo" />
                    </div>
                    <div className='text-gray-50 mt-6 mb-10'>
                        <p className='font-bold tracking-widest'>HI, MY FULL NAME IS</p>
                        <h3 className='lg:text-6xl text-4xl font-bold mb-6'>YOUNES AKBOUR</h3>
                        <h2 className='font-bold text-xl'><span className='border-b-4 md:border-b-0 lg:border-b-4 border-violet-500 pb-3'>WEB FULL-STACK</span> DEVELOPER</h2>
                    </div>
                </div>
            </div>
        </div>
    );
    }
}

export default Home;