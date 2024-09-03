import darkSaasLandingPage from '@/assets/images/dark-saas-landing-page.png'
import lightSaasLandingPage from '@/assets/images/light-saas-landing-page.png'
import aiStartupLandingPage from '@/assets/images/ai-startup-landing-page.png'
import grainImage from '@/assets/images/grain.jpg'
import CheckCircle from '@/assets/icons/check-circle.svg'
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'
import Image from 'next/image'
import { SectionHeader } from '@/components/SectionHeader'
import { Card } from '@/components/Card'
import { twJoin, twMerge } from 'tailwind-merge'

const portfolioProjects = [
  {
    company: 'Acme Corp',
    year: '2022',
    title: 'Dark Saas Landing Page',
    results: [
      { title: 'Enhanced user experience by 40%' },
      { title: 'Improved site speed by 50%' },
      { title: 'Increased mobile traffic by 35%' },
    ],
    link: 'https://youtu.be/4k7IdSLxh6w',
    image: darkSaasLandingPage,
  },
  {
    company: 'Innovative Co',
    year: '2021',
    title: 'Light Saas Landing Page',
    results: [
      { title: 'Boosted sales by 20%' },
      { title: 'Expanded customer reach by 35%' },
      { title: 'Increased brand awareness by 15%' },
    ],
    link: 'https://youtu.be/7hi5zwO75yc',
    image: lightSaasLandingPage,
  },
  {
    company: 'Quantum Dynamics',
    year: '2023',
    title: 'AI Startup Landing Page',
    results: [
      { title: 'Enhanced user experience by 40%' },
      { title: 'Improved site speed by 50%' },
      { title: 'Increased mobile traffic by 35%' },
    ],
    link: 'https://youtu.be/Z7I5uSRHMHg',
    image: aiStartupLandingPage,
  },
]

export const ProjectsSection = () => {
  return (
    <section className='pb-16 lg:py-24'>
      <div className='container'>
        <SectionHeader
          subtitle='Real World Results'
          title='Featured Projects'
          description='See how I transformed concepts into engaging digital experiences.'
        />

        {/* all projects container */}
        <div className='flex flex-col mt-10 md:mt-20 gap-20'>
          {portfolioProjects.map((project, index) => (
            // Single Project Container
            <Card
              key={project.title}
              className={`pb-0 pt-8 px-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20  after:pointer-events-none sticky`}
              style={{
                top: `calc(64px + ${index} * 60px)`,
              }}
            >
              <div
                className='absolute inset-0 -z-10 opacity-5 pointer-events-none'
                style={{
                  backgroundImage: `url(${grainImage.src})`,
                }}
              />
              <div className='lg:grid lg:grid-cols-2 lg:gap-16 '>
                <div className='lg:pb-16'>
                  <div className='bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text font-bold inline-flex uppercase tracking-widest text-sm gap-2'>
                    <span className=''>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className='font-serif text-2xl md:text-4xl mt-2 md:mt-5'>
                    {project.title}
                  </h3>
                  <hr className='border-t-2 border-white/5 mt-4 md:mt-5' />
                  <ul className='flex flex-col gap-4 mt-4 md:mt-5'>
                    {project.results.map((result, index) => (
                      <li
                        key={index}
                        className='flex gap-2 text-sm md:text-base text-white/50'
                      >
                        <CheckCircle className='size-5 md:size-6' />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>

                  <a href={project.link} className='cursor-pointer'>
                    <button className='bg-white text-gray-950 h-12 w-full md:w-auto md:px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 cursor-pointer'>
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className='size-4 lg:size-4' />
                    </button>
                  </a>
                </div>

                <div className='relative'>
                  <Image
                    src={project.image}
                    alt={project.title}
                    className='mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:h-full lg:absolute lg:max-w-none lg:w-auto'
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
