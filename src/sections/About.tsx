import { Card } from '@/components/Card'
import { SectionHeader } from '@/components/SectionHeader'
import Image from 'next/image'
import bookImage from '@/assets/images/book-cover.png'
import mapImage from '@/assets/images/map.png'
import smileMemoji from '@/assets/images/memoji-smile.png'
import JavascriptIcon from '@/assets/icons/square-js.svg'
import HTMLIcon from '@/assets/icons/html5.svg'
import CssIcon from '@/assets/icons/css3.svg'
import ReactIcon from '@/assets/icons/react.svg'
import ChromeIcon from '@/assets/icons/chrome.svg'
import GithubIcon from '@/assets/icons/github.svg'
import CardHeader from '@/components/CardHeader'
import ToolboxItems from '@/components/ToolboxItems'

const toolboxItems = [
  { title: 'JavaScript', icon: JavascriptIcon },
  { title: 'HTML5', icon: HTMLIcon },
  { title: 'CSS3', icon: CssIcon },
  { title: 'React', icon: ReactIcon },
  { title: 'Chrome', icon: ChromeIcon },
  { title: 'Github', icon: GithubIcon },
]

const hobbies = [
  {
    title: 'Painting',
    emoji: '🎨',
    left: '5%',
    top: '5%',
  },
  {
    title: 'Photography',
    emoji: '📸',
    left: '50%',
    top: '5%',
  },
  {
    title: 'Hiking',
    emoji: '🥾',
    left: '35%',
    top: '40%',
  },
  {
    title: 'Gaining',
    emoji: '🎮',
    left: '10%',
    top: '35%',
  },
  {
    title: 'Music',
    emoji: '🎵',
    left: '70%',
    top: '45%',
  },
  {
    title: 'Fitness',
    emoji: '🏋️',
    left: '5%',
    top: '65%',
  },
  {
    title: 'Reading',
    emoji: '📚',
    left: '45%',
    top: '70%',
  },
]

export const AboutSection = () => {
  return (
    <section className='mt-20 pb-96 container'>
      <SectionHeader
        title='A Glimpse into My World'
        subtitle='About Me'
        description=' Learn more about who I am, what I do, and what inspires me.'
      />
      <div className='mt-20 flex flex-col gap-8'>
        <div className='grid grid-cols-1 gap-y-8 md:gap-x-8 md:grid-cols-5'>
          {/* MY READS CARD */}
          <Card className='md:col-span-2 h-[320px]'>
            <CardHeader
              title='My Reads'
              description='Explore the books shaping my perspectives.'
            />
            <div className='w-40 mx-auto mt-2'>
              <Image src={bookImage} alt='Book Cover' />
            </div>
          </Card>
          {/* TOOLBOX CARD */}
          <Card className='h-[320px] col-span-3'>
            <CardHeader
              title='My Toolbox'
              description='Explore the technologies and tools I use to craft exceptional digital experiences.'
              className=''
            />
            <ToolboxItems items={toolboxItems} className='' />
            <ToolboxItems
              items={toolboxItems}
              className='mt-6'
              itemsWrapperClassName='-translate-x-1/2'
            />
          </Card>
        </div>

        {/* HOBBIES CARD */}
        <Card className='h-[320px] p-0 flex flex-col'>
          {/* <div className='px-6 py-6'>
            <StarIcon className='size-6 text-emerald-300' />
            <h3>Beyond the Code</h3>
            <p>Explore my interests and hobbies beyond the digital realm</p>
          </div> */}
          <CardHeader
            title='Beyond the Code'
            description='Explore my interests and hobbies beyond the digital realm'
            className='p-6'
          />
          <div className='relative flex-1'>
            {hobbies.map((hobby) => (
              <div
                key={hobby.title}
                className='inline-flex items-center gap-2 px-6 py-1.5 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full absolute'
                style={{ left: hobby.left, top: hobby.top }}
              >
                <span className='font-medium text-gray-950'>{hobby.title}</span>
                <span>{hobby.emoji}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* MAP CARD */}
        <Card className='h-[320px] relative p-0 flex items-center justify-center'>
          <Image
            src={mapImage}
            alt='Map'
            className='h-full w-full object-cover object-left-top'
          />

          <div className='absolute rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[""] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30'>
            <Image src={smileMemoji} alt='Smiling Memoji' className='size-20' />
          </div>
        </Card>
      </div>
    </section>
  )
}
