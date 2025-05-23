import React from 'react';
import emailjs from '@emailjs/browser';

const ContactMe = () => {
    
    const form = React.useRef();
    const sendEmail = (e) => {   
        e.preventDefault();
        emailjs.sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            form.current, 
            import.meta.env.VITE_PUBLIC_KEY
        )
        .then((result) => {
            console.log('SUCCESS!', result.text);
            alert('Message sent successfully!');
            form.current.reset();
        }, (error) => {
            console.log('FAILED...', error.text);
            alert('Failed to send message, please try again.');
        });
    }

    return (
        <div id='contact' className='h-screen flex flex-col justify-center items-center'>
            <h2 className='text-4xl font-light md:mb-24 mb-12 text-yellow-50'>Contact me</h2>
            <form ref={form} onSubmit={sendEmail} className="flex flex-col lg:space-12 space-y-8">
                <input 
                    type="email" 
                    name="user_email"
                    placeholder='Email' 
                    className='md:w-[500px] w-[330px] h-13 pl-3 text-lg outline-0 border border-yellow-500 placeholder-yellow-500 caret-yellow-500 text-white' 
                    required
                />
                <textarea 
                    name="message"
                    placeholder='Message' 
                    className='md:w-[500px] w-[330px] h-13 pl-3 text-lg outline-0 border border-yellow-500 placeholder-yellow-500 min-h-[100px] max-h-[200px] resize-y p-3 caret-yellow-500 text-white'
                    required
                ></textarea>
                <button 
                    type='submit' 
                    className='bg-yellow-500 text-gray-900 font-semibold text-lg px-4 py-2 rounded-md hover:bg-yellow-400 transition duration-300'
                >
                    Send
                </button>
            </form>
        </div>
    )
}

export default ContactMe;