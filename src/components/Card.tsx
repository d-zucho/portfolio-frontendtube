import grainImage from '@/assets/images/grain.jpg'
import { ComponentPropsWithoutRef } from 'react'
import { twMerge } from 'tailwind-merge'

// interface CardProps {
//   className?: string
//   children: React.ReactNode
//   style: React.CSSProperties
// }

export const Card = ({
  className,
  children,
  ...other
}: ComponentPropsWithoutRef<'article'>) => (
  <article
    className={twMerge(
      'bg-gray-800 rounded-3xl relative z-0 after:z-10 overflow-hidden after:content-[""] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-3xl after:outline-white/20  after:pointer-events-none',
      className
    )}
    {...other}
  >
    <div
      className='absolute inset-0 -z-10 opacity-5 pointer-events-none'
      style={{
        backgroundImage: `url(${grainImage.src})`,
      }}
    />
    {children}
  </article>
)
