import React from 'react';
import Header from '../Header/Header';
import Frontend from '../../images/frontend.png';
import Backend from '../../images/backend.png';

class Projects extends React.Component {
    render(){
        return(
            <div className={`relative bg-cover bg-center bg-[url("images/sky.jpg")] h-screen selection:bg-violet-500`}>
            <div className='h-full w-full flex justify-around md:block'>
            <Header />
            <div className='w-4/5 md:w-full md:h-3/4 p-10 md:p-20'>
                <div className='text-gray-50 md:flex md:flex-row md:items-start md:justify-evenly'>
                    <div className='md:w-1/3 mb-14 md:mb-0'>
                        <p className='font-bold tracking-wider py-2 bg-violet-700 text-center'>FRONT-END</p>
                        <a rel="noopener noreferrer" target="_blank" href="https://younesakbour.github.io/front-end/"><img className='transition duration-500 ease-in-out hover:scale-110' src={Frontend} alt="frontend" /></a>
                        <p className='block md:hidden font-mono p-2 bg-violet-600'>A mobile-responsive website created with Tailwind CSS, cloned from a Colorlib.</p>
                        <p className='hidden md:block font-mono p-2 bg-violet-600'>This is a website that has been created using the Tailwind CSS framework, and it is designed to be responsive so that it can be viewed on mobile devices. The website is a clone of a template that was originally created by Colorlib.</p>
                    </div>
                    <div className='md:w-1/3'>
                        <p className='font-bold tracking-wider py-2 bg-violet-700 text-center'>BACK-END</p>
                        <a rel="noopener noreferrer" target="_blank" href="https://github.com/younesakbour/laravel-ecommerce-cod"><img className='transition duration-500 ease-in-out hover:scale-110' src={Backend} alt="backend" /></a>
                        <p className='block md:hidden font-mono p-2 bg-violet-600'>A school project created by me and my partner, an e-commerce website built with Laravel for cod payments.</p>
                        <p className='hidden md:block font-mono p-2 bg-violet-600'>This is an e-commerce website that has been created using the Laravel framework. The website allows customers to make payments in cash on delivery. It was created as a school project by two people, me and my partner.</p>
                    </div>
                </div>
            </div>
            </div>
            </div>
        )
    }
}

export default Projects;