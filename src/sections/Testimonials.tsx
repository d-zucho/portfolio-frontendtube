import memojiAvatar1 from '@/assets/images/memoji-avatar-1.png'
import memojiAvatar2 from '@/assets/images/memoji-avatar-2.png'
import memojiAvatar3 from '@/assets/images/memoji-avatar-3.png'
import memojiAvatar4 from '@/assets/images/memoji-avatar-4.png'
import memojiAvatar5 from '@/assets/images/memoji-avatar-5.png'
import grainImage from '@/assets/images/grain.jpg'
import { SectionHeader } from '@/components/SectionHeader'
import Image from 'next/image'
import { Card } from '@/components/Card'

const testimonials = [
  {
    name: 'Alex Turner',
    position: 'Marketing Manager @ TechStartups',
    text: "Alex was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: memojiAvatar1,
  },
  {
    name: 'Olivia Green',
    position: 'Head of Design @ GreenLeaf',
    text: 'Working with Alex was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.',
    avatar: memojiAvatar2,
  },
  {
    name: 'Daniel White',
    position: 'CEO @ InnovateCo',
    text: "Alex's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
    avatar: memojiAvatar3,
  },
  {
    name: 'Emily Carter',
    position: 'Product Manager @ GlobalTech',
    text: "Alex is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
    avatar: memojiAvatar4,
  },
  {
    name: 'Michael Brown',
    position: 'Director of IT @ MegaCorp',
    text: "Alex's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
    avatar: memojiAvatar5,
  },
]

export const TestimonialsSection = () => {
  return (
    <section className='py-16'>
      <div className='container'>
        <SectionHeader
          title='What Clients Say about Me'
          subtitle='HAPPY CLIENTS'
          description="Don't just take my word for it. See what my clients have to say about my work."
        />
        <div className='py-16 flex flex-col items-center'>
          {testimonials.map((testimonial) => (
            // <article
            //   key={testimonial.name}
            //   className='bg-gray-800 rounded-3xl p-6 relative overflow-hidden outline-2 gap-12 outline outline-white/20 z-0'
            // >
            //   <div
            //     className='absolute inset-0 -z-10 opacity-5 pointer-events-none'
            //     style={{
            //       backgroundImage: `url(${grainImage.src})`,
            //     }}
            //   />
            // </article>
            <Card key={testimonial.name}>
              <Image src={testimonial.avatar} alt={testimonial.name} />
              <div>
                <span>{testimonial.name}</span>
                <span>{testimonial.position}</span>
              </div>
              <p>{testimonial.text}</p>
              <div></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
