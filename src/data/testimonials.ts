export interface Testimonial {
  name: string;
  quote: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Sarah Chen',
    quote:
      'Working with Boreneoux was an absolute pleasure. Their attention to detail and ability to translate complex requirements into intuitive designs is unmatched.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    name: 'Michael Ross',
    quote:
      'Technically brilliant and creatively gifted. The web application delivered exceeded our expectations in performance and aesthetics.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    name: 'Jessica Lee',
    quote:
      'Navigate the complex world of web development with ease. A true professional who cares deeply about the end-user experience.',
    image: 'https://randomuser.me/api/portraits/women/68.jpg'
  },
  {
    name: 'David Wilson',
    quote:
      'The project was delivered on time and with exceptional quality. I highly recommend them for any frontend development needs.',
    image: 'https://randomuser.me/api/portraits/men/86.jpg'
  },
  {
    name: 'Emily Davis',
    quote:
      'Clean code, great communication, and a stunning final product. One of the best freelance developers I have had the chance to collaborate with.',
    image: 'https://randomuser.me/api/portraits/women/22.jpg'
  },
  {
    name: 'James Carter',
    quote:
      'Transformed our outdated website into a modern, high-converting platform. The results speak for themselves.',
    image: 'https://randomuser.me/api/portraits/men/54.jpg'
  }
];
