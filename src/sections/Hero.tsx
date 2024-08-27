import memojiImage from '@/assets/images/memoji-computer.png'
import ArrowDown from '@/assets/icons/arrow-down.svg'
import Image from 'next/image'

export const HeroSection = () => {
  return (
    <section className='py-32'>
      <div className='container'>
        <div className='flex flex-col items-center'>
          <Image
            src={memojiImage}
            alt='Memoji with computer'
            width={100}
            height={100}
          />
          <div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex'>
            <div></div>
            <div className='text-sm font-medium'>
              Available for new projects
            </div>
          </div>
        </div>
        <h1>Building Exceptional User Experiences</h1>
        <p>
          I specialize in transforming designs into functional, high-performing
          web applications. Let's discuss your next project.
        </p>
        <div>
          <button>
            <span>Explore My Work</span>
            <ArrowDown />
          </button>
          <button>
            <span>👋🏼</span>
            <span>Let&apos;s Connect</span>
          </button>
        </div>
      </div>
    </section>
  )
}
