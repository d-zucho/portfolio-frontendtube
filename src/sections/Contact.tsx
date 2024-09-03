import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'
import grainImage from '@/assets/images/grain.jpg'

export const ContactSection = () => {
  return (
    <section className='py-16 pt-12 lg:mt-8'>
      <div className='container'>
        <div className='bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 text-center rounded-3xl relative overflow-hidden z-0'>
          {/* grain bg */}
          <div
            className='absolute inset-0 -z-10 opacity-5'
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          />
          <div className='flex flex-col gap-8 md:gap-16 md:flex-row items-center md:justify-between'>
            <div className='md:text-left md:max-w-sm lg:max-w-none'>
              <h2 className='text-2xl md:text-3xl font-medium font-serif'>
                Let's create something amazing together
              </h2>
              <p className='text-sm md:text-base mt-2'>
                Ready to bring your next project to life? Let's connect and
                discuss how I can help you achieve your goals.
              </p>
            </div>

            <div>
              <button className='inline-flex gap-2 items-center text-white bg-gray-900 px-6 h-12 rounded-xl border-gray-900 lg:w-max border-2'>
                <span className='font-semibold'>Contact Me</span>
                <ArrowUpRightIcon className='size-4' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
