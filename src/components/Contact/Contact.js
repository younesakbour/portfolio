import React from 'react';
import Header from '../Header/Header';

class Contact extends React.Component {
    render(){
        return(
            <div className={`relative bg-cover bg-center bg-[url("images/sky.jpg")] h-screen selection:bg-violet-500`}>
            <Header />
            <div className='h-full md:h-3/4 flex flex-col md:flex-row space-y-8 md:space-y-0 justify-center md:items-center md:space-x-4 p-10 md:p-20 w-full text-gray-50'>
                <div>
                    <div className='p-4 bg-violet-700/60'>
                        <p className='font-bold tracking-wider md:text-4xl text-center'>By Phone</p>
                    </div>
                    <div className='p-4 bg-violet-300/60'>
                        <p className='font-mono text-xl'>+212700298073</p>
                    </div>
                </div>
                <div>
                    <div className='p-4 bg-violet-300/60'>
                        <p className='font-bold tracking-wider md:text-4xl text-center'>By Email</p>
                    </div>
                    <div className='p-4 bg-violet-700/60'>
                        <p className='font-mono text-xl'>younesakbour6@gmail.com</p>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Contact;