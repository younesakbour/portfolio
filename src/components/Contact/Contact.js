import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Header from '../Header/Header';

export const Contact = () => {
    const form = useRef();
    const [message, setMessage] = useState('');
  
    const sendEmail = (e) => {
      e.preventDefault();
      
      emailjs.sendForm('service_t7kzdua', 'template_ir79pzp', form.current, 'Vnq8FCVkl9oqsA9Xt')
        .then((result) => {
            console.log(result.text);
            setMessage("The message was send.");
        }, (error) => {
            console.log(error.text);
            setMessage("The message was not send, Please send a message to the email or phone number listed at the top of the page.");
        });
    };
    window.onload = function() {
        document.getElementById("name").focus();
      }

    return (
        <div className={`relative bg-cover bg-center bg-[url("images/sky.jpg")] h-screen selection:bg-violet-500`}>
            <Header />
            <div className='h-full md:h-3/4 flex flex-col md:flex-row space-y-8 md:space-y-0 justify-center md:items-center md:space-x-4 p-10 md:p-20 w-full text-gray-50'>
                <form className='flex md:mt-20 flex-col justify-center md:w-2/3' ref={form} onSubmit={sendEmail}>
                    <div className='mb-2'>
                        <p className='tracking-wide'><span className='font-medium tracking-wide text-gray-200'>Email :</span> younesakbour6@gmail.com</p>
                        <p className='tracking-wide'><span className='font-medium tracking-wide text-gray-200'>Phone :</span> +212700298073</p>
                    </div>
                    <h3 className='font-medium tracking-wide text-2xl my-2'>Contact Us</h3>
                    <label className='my-2 font-semibold tracking-wider'>Name</label>
                    <input id="name" className='transition duration-200 ease-in-out text-gray-800 text-lg rounded-md bg-blue-200 font-medium tracking-wide px-3 py-2 focus:bg-cyan-700 focus:text-gray-50' type="text" name="from_name" />
                    <label className='my-2 font-semibold tracking-wider'>Email</label>
                    <input className='transition duration-200 ease-in-out text-gray-800 text-lg rounded-md bg-blue-200 font-medium tracking-wide px-3 py-2 focus:bg-cyan-700 focus:text-gray-50'type="email" name="from_email" />
                    <label className='my-2 font-semibold tracking-wider'>Message</label>
                    <textarea rows="3" className='transition duration-200 ease-in-out text-gray-800 text-lg rounded-md bg-blue-200 font-medium tracking-wide px-3 py-2 focus:bg-cyan-700 focus:text-gray-50' name="message" />
                    <input className='transition duration-200 ease-in-out mt-4 rounded-md bg-violet-800 hover:bg-violet-900 p-2 w-1/5' type="submit" value="Send" />
                    <p className='mt-4 font-semibold tracking-wide text-violet-600'>{message}</p>
                </form>
            </div>
    </div>
    );
  };