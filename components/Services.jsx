'use client'

import React, { useState, useEffect } from 'react'
import {
  Code,
  Palette,
  Sparkles,
  Megaphone,
  Cloud,
  Lightbulb,
} from 'lucide-react'

const services = [
  {
    title: 'Web Development',
    description:
      'Lightning-fast, mobile-friendly websites using Next.js and React.',
    icon: Code,
  },
  {
    title: 'UI/UX Design',
    description: 'Clean, intuitive, and human-centered design.',
    icon: Palette,
  },
  {
    title: 'Branding & Identity',
    description: 'Logos and color systems to make your business stand out.',
    icon: Sparkles,
  },
  {
    title: 'Digital Marketing',
    description: 'SEO, social media, and content marketing.',
    icon: Megaphone,
  },
  {
    title: 'Cloud Solutions',
    description: 'Cloud integration and migration services.',
    icon: Cloud,
  },
  {
    title: 'IT Consulting',
    description: 'Guidance on technology strategy and system optimization.',
    icon: Lightbulb,
  },
  {
    title: 'Web Development',
    description:
      'Lightning-fast, mobile-friendly websites using Next.js and React.',
    icon: Code,
  },
  {
    title: 'UI/UX Design',
    description: 'Clean, intuitive, and human-centered design.',
    icon: Palette,
  },
  {
    title: 'Cloud Solutions',
    description: 'Cloud integration and migration services.',
    icon: Cloud,
  },
]

export default function ServicesSlider() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 768 : true
  )
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const cardsPerSlide = isMobile ? 1 : 3
  const totalSlides = Math.ceil(services.length / cardsPerSlide)

  const prevSlide = () =>
    setActiveIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
  const nextSlide = () =>
    setActiveIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))

  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX)
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    if (distance > 50) nextSlide()
    else if (distance < -50) prevSlide()
    setTouchStart(0)
    setTouchEnd(0)
  }

  return (
    <section
      className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8"
      id="services"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 md:mb-12 text-center">
          <div className="bg-[#BE232D] py-2.5 px-5 rounded-2xl max-w-[300px] text-center text-xl shadow-[0_10px_15px_rgba(190,35,45,0.5)]">
            Our Services
          </div>
        </div>
        <div className="overflow-hidden relative">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {Array.from({ length: totalSlides }).map((_, slideIdx) => (
              <div key={slideIdx} className="flex gap-4 flex-shrink-0 w-full">
                {services
                  .slice(
                    slideIdx * cardsPerSlide,
                    slideIdx * cardsPerSlide + cardsPerSlide
                  )
                  .map((service, idx) => {
                    const Icon = service.icon
                    return (
                      <div
                        key={idx}
                        className="m-auto bg-white max-w-[250px] rounded-tl-3xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
                        style={{
                          minWidth: isMobile
                            ? '100%'
                            : `${100 / cardsPerSlide - 3}%`,
                          height: '250px',
                        }}
                      >
                        <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                          <Icon size={28} className="text-[#BE232D]" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {service.description}
                        </p>
                      </div>
                    )
                  })}
              </div>
            ))}
          </div>

          <div className="flex justify-end items-center gap-4 mt-8">
            <div className="flex gap-2">
              {Array.from({ length: totalSlides }).map((_, idx) => (
                <span
                  key={idx}
                  className={`w-3 h-3 rounded-full ${
                    activeIndex === idx ? 'bg-[#BE232D]' : 'bg-gray-300'
                  } cursor-pointer`}
                  onClick={() => setActiveIndex(idx)}
                ></span>
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                className="bg-[#BE232D] text-white p-2 rounded-full shadow-md hover:opacity-80 transition"
              >
                &#8592;
              </button>
              <button
                onClick={nextSlide}
                className="bg-[#BE232D] text-white p-2 rounded-full shadow-md hover:opacity-80 transition"
              >
                &#8594;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
