import Header from '../components/Header/Header';
import React from 'react';

class NoPage extends React.Component {
    
    render() {
    return (
        <div className={`relative bg-cover bg-center bg-[url("images/sky.jpg")] h-screen selection:bg-violet-500`}>
            <Header />
            <div className='h-full md:h-3/4 flex justify-center items-center p-5 md:p-20 w-full'>
                    <div className='text-gray-50 mt-6 mb-10'>
                    <h3 className='lg:text-6xl text-3xl font-bold mb-6'><span className='border-b-4 md:border-b-4 lg:border-b-8 border-violet-500 pb-3 md:pb-6'>404 Page</span> Not Found</h3>
                    </div>
                </div>
        </div>
    );
    }
}

export default NoPage;