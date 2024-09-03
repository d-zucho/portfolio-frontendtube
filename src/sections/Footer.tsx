import ArrowUpRight from '@/assets/icons/arrow-up-right.svg'

const footerLinks = [
  {
    title: 'YouTube',
    href: '#',
  },
  {
    title: 'Twitter',
    href: '#',
  },
  {
    title: 'Instagram',
    href: '#',
  },
  {
    title: 'LinkedIn',
    href: '#',
  },
]

export const Footer = () => {
  return (
    <footer className='relative -z10 overflow-x-clip lg:py-8'>
      <div className='absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10' />
      <div className='container '>
        <div className='text-sm flex flex-col md:flex-row md:justify-between py-6 items-center gap-8 border-t-[0.5px] border-t-white/15'>
          <div>
            <span className='text-white/40'>
              &copy; 2024. All rights reserved.
            </span>
          </div>

          <nav className='flex  gap-8 flex-col md:flex-row items-center'>
            {footerLinks.map((link) => (
              <a href={link.href} className='inline-flex gap-1.5 items-center '>
                <span className='font-semibold'>{link.title}</span>
                <ArrowUpRight className='size-4' />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
