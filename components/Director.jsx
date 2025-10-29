import DirectorImg from '@/public/director.png'
import Image from 'next/image'
import Vector from '@/public/Vector.svg'

const Director = () => {
  return (
    <section
      className="flex flex-col md:flex-row max-w-[1290px] w-full m-auto h-full items-center py-12 md:py-20 lg:py-[121px] px-4 md:px-6 lg:px-8 justify-between gap-8 md:gap-12"
      id="director"
    >
      <div className="max-w-[600px] w-full order-2 md:order-1">
        <div className="bg-[#BE232D] py-2.5 px-5 rounded-2xl max-w-[300px] text-center text-lg md:text-xl shadow-[0_10px_15px_rgba(190,35,45,0.5)]">
          Director Company
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[64px] text-white font-bold py-6 md:py-8 lg:py-10">
          Mr. Alex Johnson
        </h2>
        <div className="flex gap-2.5">
          <div className="w-3 md:w-4 min-h-[50px] md:min-h-[40px] bg-[#BE232D]"></div>
          <p className="text-sm md:text-base">
            Our journey began with a single vision — to empower businesses
            through creativity and technology. Every project we deliver reflects
            our dedication to quality, transparency, and long-term partnerships.
          </p>
        </div>
      </div>
      <Image
        src={DirectorImg}
        alt="about"
        width={450}
        height={550}
        className="w-full max-w-[300px] md:max-w-[350px] lg:max-w-[450px] h-auto order-1 md:order-2"
      />
    </section>
  )
}

export default Director
