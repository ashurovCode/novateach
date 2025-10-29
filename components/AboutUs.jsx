import AboutImg from '@/public/aboutimg.png'
import Image from 'next/image'
import Vector from '@/public/Vector.svg'

const About = () => {
  return (
    <section
      className="flex flex-col md:flex-row max-w-[1290px] w-full m-auto h-full items-center py-12 md:py-20 lg:py-[121px] px-4 md:px-6 lg:px-8 justify-between gap-8 md:gap-12"
      id="about-us"
    >
      <Image
        src={AboutImg}
        alt="about"
        width={450}
        height={550}
        className="w-full max-w-[300px] md:max-w-[350px] lg:max-w-[450px] h-auto"
      />
      <div className="max-w-[600px] w-full">
        <div className="bg-[#BE232D] py-2.5 px-5 rounded-2xl max-w-[300px] text-center text-lg md:text-xl shadow-[0_10px_15px_rgba(190,35,45,0.5)]">
          About Our Company
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[64px] text-white font-bold py-6 md:py-8 lg:py-10">
          Choose The Best IT Service Company
        </h2>
        <div className="flex gap-2.5">
          <div className="w-3 md:w-4 min-h-[100px] md:min-h-[50px] bg-[#BE232D]"></div>
          <p className="text-sm md:text-base">
            We specialize in web development, IT consulting, and digital
            transformation. From custom software solutions to cloud integration
            and technical support — our team delivers end-to-end services
            tailored to your business goals.
          </p>
        </div>
        <div className="flex flex-wrap sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-4 pt-8 md:pt-10">
          <div className="flex items-center gap-3 md:gap-4">
            <Image src={Vector} alt="vector" className="w-[25px] h-[25px]" />
            <p className="max-w-[100px] text-sm md:text-base">
              Money Back Guranted
            </p>
          </div>
          <div className="flex items-center gap-3 md:gap-4">
            <Image src={Vector} alt="vector" className="w-[25px] h-[25px]" />
            <p className="max-w-[100px] text-sm md:text-base">
              Professional Service
            </p>
          </div>
          <div className="flex items-center gap-3 md:gap-4">
            <Image src={Vector} alt="vector" className="w-[25px] h-[25px]" />
            <p className="max-w-[100px] text-sm md:text-base">
              100% Quality Assured
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
