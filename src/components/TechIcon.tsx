import React from 'react'

interface TechIconProps {
  component: React.ElementType
}

const TechIcon = ({ component }: TechIconProps) => {
  const Component = component

  return (
    <div>
      <Component className='size-10 text-sky-400 fill-[url(#tech-icon-gradient)]' />
      <svg className='size-0 absolute'>
        <linearGradient id='tech-icon-gradient'>
          <stop offset='0%' stopColor='rgb(110 231 183)' />
          <stop offset='100%' stopColor='rgb(56 189 248)' />
        </linearGradient>
      </svg>
    </div>
  )
}

export default TechIcon
