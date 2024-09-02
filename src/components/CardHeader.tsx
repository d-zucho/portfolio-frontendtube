import React from 'react'
import StarIcon from '@/assets/icons/star.svg'

interface CardHeaderProps {
  title: string

  description: string
}

const CardHeader = ({ title, description }: CardHeaderProps) => {
  return (
    <div className=''>
      <div className='flex items-center gap-2'>
        <StarIcon className='size-10 text-emerald-300' />
        <h3 className='font-serif text-3xl'>{title}</h3>
      </div>
      <p className='text-sm text-white/60 mt-2'>{description}</p>
    </div>
  )
}

export default CardHeader
