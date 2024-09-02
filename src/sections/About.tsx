import { Card } from '@/components/Card'
import { SectionHeader } from '@/components/SectionHeader'
import Image from 'next/image'
import bookImage from '@/assets/images/book-cover.png'
import mapImage from '@/assets/images/map.png'
import smileMemoji from '@/assets/images/memoji-smile.png'
import StarIcon from '@/assets/icons/star.svg'
import JavascriptIcon from '@/assets/icons/square-js.svg'
import HTMLIcon from '@/assets/icons/html5.svg'
import CssIcon from '@/assets/icons/css3.svg'
import ReactIcon from '@/assets/icons/react.svg'
import ChromeIcon from '@/assets/icons/chrome.svg'
import GithubIcon from '@/assets/icons/github.svg'
import TechIcon from '@/components/TechIcon'
import CardHeader from '@/components/CardHeader'

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
    left: '50%',
    top: '50%',
  },
  {
    title: 'Photography',
    emoji: '📸',
    left: '',
    top: '',
  },
  {
    title: 'Gaining',
    emoji: '🎮',
    left: '',
    top: '',
  },
  {
    title: 'Hiking',
    emoji: '🥾',
    left: '',
    top: '',
  },
  {
    title: 'Music',
    emoji: '🎵',
    left: '',
    top: '',
  },
  {
    title: 'Fitness',
    emoji: '🏋️',
    left: '',
    top: '',
  },
  {
    title: 'Reading',
    emoji: '📚',
    left: '',
    top: '',
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
      <div className='mt-20 space-y-8'>
        {/* MY READS CARD */}
        <Card className='flex flex-col'>
          <CardHeader
            title='My Reads'
            description='Explore the books shaping my perspectives.'
          />
          <Image
            src={bookImage}
            alt='Book Cover'
            className='mx-auto mt-10 -mb-20'
            width={150}
            height={225}
          />
        </Card>
        {/* TOOLBOX CARD */}

        <Card>
          <div>
            {toolboxItems.map((item, index) => (
              <div key={index}>
                <TechIcon component={item.icon} />

                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* HOBBIES CARD */}
        <Card className='h-[320px] p-0 flex flex-col'>
          <div className='px-6 py-6'>
            <StarIcon className='size-6 text-emerald-300' />
            <h3>Beyond the Code</h3>
            <p>Explore my interests and hobbies beyond the digital realm</p>
          </div>
          <div className='relative flex-1'>
            {hobbies.map((hobby) => (
              <div
                key={hobby.title}
                className='inline-flex items-center gap-2 px-6 py-1.5 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full absolute'
              >
                <span className='font-medium text-gray-950'>{hobby.title}</span>
                <span>{hobby.emoji}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* MAP CARD */}
        <Card>
          <Image src={mapImage} alt='Map' />
          <Image src={smileMemoji} alt='Smiling Memoji' />
        </Card>
      </div>
    </section>
  )
}
