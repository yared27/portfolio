import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='h-screen flex flex-col justify-center items-center'>
        <h2 className='text-4xl font-light md:mb-24 mb-12 text-yellow-50'> Contact me</h2>
        <form className="flex flex-col  lg:space-12 space-y-8 ">
            <input type="email" placeholder='Email' className='md:w-[500px] w-[330px] h-13 pl-3 text-lg outline-0 border  border-yellow-500 placeholder-yellow-500 caret-yellow-500 ' />
            <textarea name="Message" placeholder='Message' className='md:w-[500px] w-[330px] h-13 pl-3 text-lg outline-0 border border-yellow-500 placeholder-yellow-500 min-h-[100px] max-h-[200px] resize-y p-3 caret-yellow-500'></textarea>
        </form>
    </div>
  )
}

export default Contact