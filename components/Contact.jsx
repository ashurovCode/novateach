'use client'

import React from 'react'
import Button from './Button'

const ContactSection = () => {
  return (
    <section className="py-24 px-4" id="contact">
      <div className="max-w-[1290px] w-full m-auto grid md:grid-cols-2 gap-8">
        <div className="text-white">
          <div className="bg-[#BE232D] py-2.5 px-5 rounded-2xl max-w-[300px] text-center text-xl shadow-[0_10px_15px_rgba(190,35,45,0.5)]">
            Contact With Us
          </div>
          <h2 className="text-3xl font-bold mb-4 mt-8">Let’s Connect</h2>
          <p className="mb-8 max-w-[450px]">
            Have a project in mind or just want to say hello? Reach out to our
            team — we`re always excited to collaborate and bring new ideas to
            life.
          </p>

          <div className="space-y-4 text-sm md:text-base">
            <div>
              <p className="font-semibold">Email:</p>
              <p>novatech@contact.com </p>
            </div>
            <div>
              <p className="font-semibold">Phone:</p>
              <p>02 325 145 623</p>
            </div>
            <div>
              <p className="font-semibold">Our Office:</p>
              <p>Las Vegas Caesars Palace, 3570 S Las Vegas Blvd 23</p>
            </div>
            <div>
              <p className="font-semibold">Open Hours:</p>
              <p>Mo - Fr: 8 AM - 6 PM</p>
            </div>
          </div>
        </div>

        <div>
          <form className="bg-[#3A3568] p-8 rounded-lg shadow-lg space-y-4">
            <p className="text-2xl text-center w-full font-bold pb-[30px]">
              Fill out the form below, and we’ll get back to you shortly.
            </p>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-md border border-[#BE232D] outline-none"
            />
            <input
              type="text"
              placeholder="Your Phone Number"
              className="w-full p-3 rounded-md border border-[#BE232D] outline-none"
            />
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full p-3 rounded-md border border-[#BE232D] outline-none"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 rounded-md border border-[#BE232D] outline-none h-32 resize-none"
            />
            <Button className="w-full">Send</Button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
