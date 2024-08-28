import memojiImage from '@/assets/images/memoji-computer.png'
import ArrowDown from '@/assets/icons/arrow-down.svg'
import Image from 'next/image'
import grainImage from '@/assets/images/grain.jpg'
import { HeroOrbit } from '@/components/HeroOrbit'
import StarIcon from '@/assets/icons/star.svg'

export const HeroSection = () => {
  return (
    <section className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip'>
      {/* grain pattern */}
      <div
        className='absolute inset-0 -z-30 opacity-5'
        style={{
          backgroundImage: `url(${grainImage.src})`,
          backgroundSize: '100px',
        }}
      />

      {/* rings */}
      <div className='size-[620px] hero-ring' />
      <div className='size-[820px] hero-ring' />
      <div className='size-[1020px] hero-ring' />
      <div className='size-[1220px] hero-ring' />

      {/* stars */}
      <HeroOrbit size={800} rotation={-72}>
        <StarIcon className='size-28 text-emerald-300' />
      </HeroOrbit>
      <HeroOrbit size={550} rotation={20}>
        <StarIcon className='size-12 text-emerald-300 border border-red-400' />
      </HeroOrbit>
      <HeroOrbit size={590} rotation={98}>
        <StarIcon className='size-8 text-emerald-300 border border-red-400' />
      </HeroOrbit>

      <div className='container'>
        <div className='flex flex-col items-center'>
          <Image
            src={memojiImage}
            alt='Memoji with computer'
            width={100}
            height={100}
          />
          <div className='bg-gray-950 gap-4 rounded-lg border border-gray-800 px-4 py-1.5 inline-flex items-center'>
            <div className='size-2.5 rounded-full bg-green-500'></div>
            <div className='text-sm font-medium'>
              Available for new projects
            </div>
          </div>
        </div>
        <div className='max-w-lg mx-auto'>
          <h1 className='font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide'>
            Building Exceptional User Experiences
          </h1>
          <p className='mt-4 text-center text-white/60 md:text-lg'>
            I specialize in transforming designs into functional,
            high-performing web applications. Let's discuss your next project.
          </p>
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4'>
          <button className='inline-flex gap-2 px-6 h-12 border border-white/15 rounded-xl items-center'>
            <span className='font-semibold'>Explore My Work</span>
            <ArrowDown className='size-4' />
          </button>
          <button className='flex gap-2 items-center border border-white bg-white text-gray-900 h-12 px-6 rounded-xl'>
            <span>👋🏼</span>
            <span className='font-semibold'>Let&apos;s Connect</span>
          </button>
        </div>
      </div>
    </section>
  )
}
