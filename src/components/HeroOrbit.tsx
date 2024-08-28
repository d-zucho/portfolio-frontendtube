import StarIcon from '@/assets/icons/star.svg'

interface OrbitProps {
  children: React.ReactNode
  size?: number
  rotation: number
}

export const HeroOrbit = ({ children, size, rotation }: OrbitProps) => (
  <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
    <div
      className='flex justify-start items-start'
      style={{
        transform: `rotate(${rotation}deg)`,
        width: size,
        height: size,
      }}
    >
      <div
        className='inline-flex'
        style={{
          transform: `rotate(${rotation * -1}deg)`,
        }}
      >
        {children}
      </div>
    </div>
  </div>
)
