import React from 'react';
import Header from '../Header/Header';
import Mypic from '../../images/mypic.jpg'

class About extends React.Component {
    render(){
        return(
            <div className={`relative bg-cover bg-center bg-[url("images/sky.jpg")] h-screen selection:bg-violet-500`}>
            <Header />
            <div className='h-full md:h-3/4 flex p-10 md:p-20 w-full text-gray-50'>
                <div className='flex flex-col md:flex-row'>
                    <div className='md:w-4/6 w-2/4'>
                        <img className='opacity-80' src={Mypic} alt="MyPicture" />
                        <div className='bg-violet-700 text-center py-2 opacity-80'>
                            <p className='font-semibold tracking-wider'>YOUNES AKBOUR</p>
                        </div>
                    </div>
                    <div className='md:px-24 md:py-6 text-sm lg:text-lg font-mono mt-4'>
                        <div className='md:space-y-8 space-y-4'>
                            <p>Hello there! My name is <span className='bg-violet-600 px-2 font-bold tracking-wider'>YOUNES</span>, born on February 17, 2001. And I am a <span className='bg-violet-600 px-2 font-bold tracking-wider'>web developer</span> with a passion for creating innovative and exciting. I was born and raised in Casablanca.</p>
                            <p>I am a <span className='bg-violet-600 px-2 font-bold tracking-wider'>full-stack developer</span> with small experience in back-end framework <span className='bg-violet-600 px-2 font-bold tracking-wider'>Laravel</span> and front-end framework <span className='bg-violet-600 px-2 font-bold tracking-wider'>ReactJs</span>. Additionally, I am well-versed in a variety of languages, including JavaScript, PHP, CSS, and HTML. I also have expertise in popular CSS frameworks such as TailwindCSS and Bootstrap, allowing me to create stunning, responsive designs.</p>
                            <p className='hidden md:block'>I obtained my formal education at Ofppt, where I studied the fundamentals of web development and this is my last year to make the grade. However, I am also a self-taught learner, constantly seeking out new knowledge and honing my skills through personal projects and online resources.</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default About;