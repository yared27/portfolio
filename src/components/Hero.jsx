import React, { useRef, useEffect, useState } from 'react'
import Navbar from './Navbar'
import { professions } from '../data'

const Hero = () => {
  const [currentText, setCurrentText] = useState(professions[0])
  const [isRotating, setIsRotating] = useState(false)
  const currentIndex = useRef(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsRotating(true)
      setTimeout(() => {
        currentIndex.current = (currentIndex.current + 1) % professions.length
        setCurrentText(professions[currentIndex.current])
        setIsRotating(false)
      }, 500)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <Navbar />
      <div className="flex flex-col items-center gap-y-6">
        <h1 className="text-yellow-500 xl:text-6xl md:text-4xl text-3xl font-bold">
          Hi
        </h1>
        <div className="flex items-center gap-6">
          <span className="text-yellow-500 xl:text-6xl md:text-4xl text-2xl tracking-wider">
            I'm{' '}
            <span
              className={`inline-block font-extrabold transition-transform duration-500 ease-out transform origin-left whitespace-nowrap min-w-[180px] md:min-w-[240px] xl:min-w-[380px] ${
                isRotating ? 'rotate-[100deg]' : 'rotate-0'
              }`}
            >
              {currentText}
            </span>
          </span>
          <img
            src="https://tse1.mm.bing.net/th/id/OET.7252da000e8341b2ba1fb61c275c1f30?w=594&h=594&c=7&rs=1&o=5&pid=1.9"
            alt="My Photo"
            className="w-20 h-20 rounded-full object-cover border-4 border-yellow-500"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
