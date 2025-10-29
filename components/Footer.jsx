'use client'
import Image from 'next/image'
import Logo from '@/public/FooterLogo.png'
import Instagram from '@/public/instagram.svg'
import Facebook from '@/public/facebook.svg'
import Youtube from '@/public/youtube.svg'
import Linkedin from '@/public/linkedin.svg'

const Footer = () => {
  return (
    <footer className="bg-[#0D0D0D] text-white px-5 py-12">
      <div className="max-w-[1290px] w-full mx-auto flex flex-col md:flex-row justify-between gap-12 md:gap-24">
        <div className="flex-1">
          <a href="#hero">
            <Image src={Logo} alt="NovaTech" className="w-[150px]" />
          </a>
          <p className="py-5 text-gray-300">
            Las Vegas Caesars Palace, 3570 S Las Vegas Blvd 23
          </p>
          <p className="text-gray-400">Mo - Fr: 8 AM - 6 PM</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-12 md:gap-24">
          <div>
            <p className="text-xl font-semibold pb-5">Quick Links</p>
            <ul className="flex flex-col gap-2.5 text-gray-300">
              {['About Us', 'Director', 'Services', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="hover:text-[#BE232D] transition duration-300 ease-in-out"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xl font-semibold pb-5">Follow Us</p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-[45px] h-[45px] flex items-center justify-center bg-gray-800 rounded-full hover:bg-[#E1306C] transition duration-300 ease-in-out"
              >
                <Image src={Instagram} alt="Instagram" width={24} height={24} />
              </a>
              <a
                href="#"
                className="w-[45px] h-[45px] flex items-center justify-center bg-gray-800 rounded-full hover:bg-[#1DA1F2] transition duration-300 ease-in-out"
              >
                <Image src={Facebook} alt="Facebook" width={24} height={24} />
              </a>
              <a
                href="#"
                className="w-[45px] h-[45px] flex items-center justify-center bg-gray-800 rounded-full hover:bg-[#FD1D1D] transition duration-300 ease-in-out"
              >
                <Image src={Youtube} alt="YouTube" width={24} height={24} />
              </a>
              <a
                href="#"
                className="w-[45px] h-[45px] flex items-center justify-center bg-gray-800 rounded-full hover:bg-[#0a66c2] transition duration-300 ease-in-out"
              >
                <Image src={Linkedin} alt="Linkedin" width={24} height={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} NovaTech. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
