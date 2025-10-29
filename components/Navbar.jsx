'use client'
import { useState } from 'react'
import Image from 'next/image'
import Logo from '@/public/NovaTech.png'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeItem, setActiveItem] = useState('About Us')

  return (
    <header className="sticky top-0 bg-white shadow-sm z-50">
      <div className="flex justify-between items-center max-w-[1290px] w-full mx-auto px-4 py-4">
        <a href="#hero">
          <Image src={Logo} alt="NovaTech" width={150} height={80} />
        </a>

        <nav className="hidden md:flex gap-10 text-[#2C2449] font-semibold">
          {['About Us', 'Director', 'Services', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              onClick={() => setActiveItem(item)}
              className={`p-2 rounded-md transition duration-300 ease-in-out ${
                activeItem === item
                  ? 'bg-[#BE232D] text-white'
                  : 'hover:bg-[#BE232D] hover:text-white'
              }`}
            >
              {item}
            </a>
          ))}
        </nav>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#2C2449] focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <nav className="flex flex-col items-center gap-4 bg-white shadow-md py-4 md:hidden animate-fadeIn">
          {['About Us', 'Director', 'Services', 'Contact'].map((item) => (
            <a
              key={item}
              href="#"
              onClick={() => setIsOpen(false)}
              className="text-[#2C2449] font-semibold hover:bg-[#BE232D] hover:text-white px-4 py-2 rounded-md transition duration-300 ease-in-out w-[80%] text-center"
            >
              {item}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}

export default Navbar
