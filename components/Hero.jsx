import HeroBg from '@/public/hero-bg.webp'
import Button from '@/components/Button.jsx'
const Hero = () => {
  return (
    <section
      className="h-screen bg-cover bg-center p-4"
      style={{ backgroundImage: `url(${HeroBg.src})` }}
      id="hero"
    >
      <div className="flex max-w-[1290px] w-full m-auto h-full items-center">
        <div className="max-w-[650px]">
          <h1 className="text-5xl md:text-6xl lg:text-7xl text-white font-bold">
            Building a Smarter Future, Together
          </h1>
          <p className="text-[#D7D7D7] text-[18px] py-5">
            At NovaTech Solutions, we’re driven by innovation and integrity.
            Since our founding, we’ve helped businesses transform ideas into
            scalable, efficient digital systems. Our mission is simple — to make
            technology accessible, meaningful, and impactful for every client we
            serve.
          </p>
          <Button>About Us →</Button>
        </div>
      </div>
    </section>
  )
}

export default Hero
