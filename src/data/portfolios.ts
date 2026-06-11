import rashio from '@/assets/rashio.jpg';
import claraai from '@/assets/clara.jpg';
import emarealty from '@/assets/ema-realty.jpg';
// TODO: add magerbeli.jpg and tickitacka.jpg to src/assets/
import magerbeli from '@/assets/magerbeli.jpg';
import tickitacka from '@/assets/tickitacka.jpg';
import uniqgue from '@/assets/uniqgue.jpg';

export const portfolios = [
  {
    slug: 'ema-realty',
    title: 'Ema Realty - Property Consultant Listing Web App',
    shortDescription:
      'A solo end-to-end web platform built for a family-owned property consultancy - covering digital listings, document generation for lease and sale agreements, and a mobile-first interface designed for older, less tech-fluent users. Built across backend, frontend, legal compliance, and infrastructure, with CI/CD and Docker deployment to a VPS.',

    star: {
      situation: `The business was a family-owned property consultancy that had no centralized digital platform. Existing marketing relied on manual processes and third-party listing sites, giving the company no control over branding, data, or scalability. The primary users are older adults who exclusively use mobile phones - no laptops or desktops - which meant a mobile-first approach wasn't optional, it was the core design constraint.`,
      task: `I took this on as a solo fullstack project, collaborating with a dedicated UI/UX designer and a legal team. My responsibility covered the entire scope: system architecture, backend and frontend development, infrastructure setup, and ensuring the product met legal compliance requirements for a property business.`,
      action: `On the backend I built a modular NestJS service running on Bun, backed by PostgreSQL and Prisma, with Cloudflare R2 for asset storage. One of the more complex features was a document generation system for lease and sale agreements - designed in close consultation with the legal team to ensure every clause held up legally. Agents fill out a structured form, preview the document in real time like a CV builder, then export or print it as a production-ready PDF directly from the browser. The frontend is built in Next.js with a strict mobile-first layout where every interaction and information hierarchy is designed around a small screen. On the infrastructure side I set up CI on both backend and frontend, applied TDD on the backend, and deployed via Docker to a Biznet GIo VPS with CD planned as the next milestone.`,
      result: `The application is targeting deployment by mid-June 2026. Building it end-to-end - backend, frontend, legal compliance, and infrastructure - sharpened my ability to make pragmatic decisions while staying aligned with both a designer's vision and real-world business requirements.`
    },

    techStack: [
      'TypeScript',
      'NestJS',
      'Bun',
      'Next.js',
      'PostgreSQL',
      'Prisma',
      'Cloudflare R2',
      'Docker',
      'Tailwind CSS',
      'CI/CD',
      'Biznet GIo VPS'
    ],
    links: [
      { label: 'Live Site', url: 'https://emarealty.id', type: 'live' as const }
    ],
    image: emarealty
  },
  {
    slug: 'magerbeli-grocery',
    title: 'MagerBeliGrocery - Location-Aware Online Grocery Platform',
    shortDescription:
      'A fully deployed, production-grade online grocery platform where every product, order, and admin interaction is scoped to the nearest store branch from the user\'s location. Built as the Purwadhika final project by a three-person team, with me serving as technical lead responsible for the entire project foundation and a significant portion of feature delivery.',

    star: {
      situation: `The Purwadhika final project required building a location-aware online grocery platform - where store selection, product availability, and admin management are all tied to the nearest branch based on the user's physical location. The challenge wasn't just technical complexity; as the team's technical lead I was responsible for establishing the entire project foundation before a single feature line was written.`,
      task: `I defined the layered backend architecture (router → controller → service → repository), the feature-based frontend module structure, Git branching conventions, and the deployment pipeline to Vercel and Neon.tech. My personal feature scope covered five major areas alongside this architectural responsibility.`,
      action: `I built the homepage with browser geolocation and Haversine-based store selection, a full authentication system with email verification and JWT refresh token rotation, multi-address management with interactive Leaflet maps and OpenCage reverse geocoding, RajaOngkir shipping cost integration cached to the database for reliability, and store management with role-based admin assignment. All of this was built alongside a TDD approach covering 7 service-layer test files - ensuring business logic stayed isolated and mockable. The stack was Next.js on the frontend and Express.js on the backend, both in TypeScript, with PostgreSQL managed through Prisma, Midtrans for payments, and Cloudinary for image handling.`,
      result: `The result was a fully deployed, production-grade application with clean architecture that the whole team could build on consistently. Writing unit tests across all service layers while delivering features under a deadline reinforced how important isolated, testable business logic is in a team setting.`
    },

    techStack: [
      'Next.js',
      'Express.js',
      'TypeScript',
      'PostgreSQL',
      'Prisma',
      'Midtrans',
      'RajaOngkir',
      'OpenCage',
      'Cloudinary',
      'Vercel',
      'Jest',
      'Leaflet'
    ],
    links: [
      { label: 'Live Demo', url: 'https://mbg-plum.vercel.app/', type: 'live' as const },
      { label: 'Backend Repo', url: 'https://github.com/Boreneoux/MBG-BE', type: 'repo' as const },
      { label: 'Frontend Repo', url: 'https://github.com/Boreneoux/mbg-fe', type: 'repo' as const }
    ],
    image: magerbeli
  },
  {
    slug: 'ticki-tacka',
    title: 'Ticki Tacka - Event Ticketing Management App',
    shortDescription:
      'A two-person event ticketing platform covering user authentication, a referral system with points and coupon expiration logic, profile management, and an organizer dashboard with statistics visualization. Built as a Purwadhika mini project under Scrum methodology with no dedicated UI/UX designer.',

    star: {
      situation: `This was a Purwadhika mini project built by two developers with no UI/UX designer - every design decision had to be reasoned through from scratch. My teammate was also going through his first experience in a structured team workflow, so part of the challenge was mentoring him through branching conventions, code review, and timeline discipline alongside delivering my own feature scope.`,
      task: `I owned Feature 2 entirely: user authentication and authorization, a referral system with points and coupon expiration logic, profile management, and the organizer dashboard with statistics visualization. On top of delivery, I was responsible for keeping us both on track and aligned on the codebase.`,
      action: `I implemented the full auth flow, the referral and coupon system with proper expiration handling, and the organizer dashboard using Next.js and Express.js in TypeScript with PostgreSQL via Prisma. Alongside my own delivery, I guided my teammate through Git branching, participated in code review, and helped him build a mental model of structured team development - which slowed things at points but meant we finished with a genuinely shared understanding of the whole codebase.`,
      result: `We delivered the full feature scope within the project timeline. Personally, the experience gave me a stronger sense of how to keep a team moving without a dedicated design resource, and how to balance mentoring alongside your own delivery without letting either suffer.`
    },

    techStack: [
      'React',
      'Express.js',
      'TypeScript',
      'PostgreSQL',
      'Prisma'
    ],
    links: [
      { label: 'Backend Repo', url: 'https://github.com/Boreneoux/ticki-tacka-be', type: 'repo' as const },
      { label: 'Frontend Repo', url: 'https://github.com/Boreneoux/ticki-tacka-fe', type: 'repo' as const }
    ],
    image: tickitacka
  },
  {
    slug: 'clara-ai',
    title: 'ClaraAI - AI-Assisted Reconciliation Automation Tool',
    shortDescription:
      'An internal tool that guides users step-by-step through bank reconciliation - from ingesting CSV transaction data, cleaning and mapping fields, generating XML configurations via DeepSeek AI, to triggering reconciliation jobs in the existing enterprise system. Built at Fortius Solusi Informatika R&D, it reduced a two-week manual process to roughly one day for standard reconciliation cases.',

    star: {
      situation: `Before ClaraAI existed, bank reconciliation was an entirely manual process. The developer team would receive raw transaction data from clients, clean and separate it by hand, manually input it into MSSQL, and then run the reconciliation executable. The whole cycle took one to two weeks per run - for every client, every time.`,
      task: `As the developer on the R&D team, I was tasked with building an AI-assisted tool that could guide users step-by-step through that same process: ingesting CSV data, cleaning and mapping fields, generating matching key suggestions via DeepSeek AI, producing the XML configuration used by the internal reconciliation engine, and triggering the reconciliation job - all through a structured UI.`,
      action: `I built the application as a single-page application using React and Chakra UI, integrating DeepSeek AI for matching key suggestions and XML generation. The hardest part wasn't the integration itself but making AI output consistent and reliable enough to be usable in a financial context. Prompt engineering for reconciliation logic required significant iteration - getting outputs that aligned with real business rules, handled edge cases, and produced deterministic enough results that a finance team could trust them. I also contributed to the existing .NET 4.7.2 and Ext.NET core application alongside this R&D work.`,
      result: `The tool brought the two-week process down to roughly one day for standard reconciliation cases, with accuracy sitting at 65-75% depending on data complexity. Those are honest numbers - it made ClaraAI a practical tool for simpler reconciliation workloads while the team continues to refine it.`
    },

    techStack: [
      'TypeScript',
      'React',
      'Chakra UI',
      'DeepSeek AI',
      '.NET 4.7.2',
      'Ext.NET',
      'MSSQL',
      'PostgreSQL'
    ],
    links: [
      { label: 'Live Site', url: 'https://clararecon.id', type: 'live' as const }
    ],
    image: claraai
  },
  {
    slug: 'rashio',
    title: 'RashIO - Skin Disease Detection Android App',
    shortDescription:
      'A cross-functional Bangkit Academy capstone project: an Android app that detects skin diseases from a photo, with the ML model served through a dedicated FastAPI backend. Scored 90/100 at evaluation, built by a six-person team across Android, Cloud, and ML tracks.',

    star: {
      situation: `Bangkit Academy's capstone required a six-person cross-functional team - two Android, two Cloud, two ML - to build a meaningful mobile product. Our team set out to build an app that could detect skin diseases from a photo, making preliminary skin health screening more accessible without requiring a dermatologist visit. The ML model was served through a dedicated FastAPI backend rather than bundled on-device.`,
      task: `On the Android side, I was responsible for the overall app architecture, UI layer, and the integration between the mobile client and the ML inference API. I also made the early architectural call that shaped the rest of the build.`,
      action: `Despite the team's primary familiarity with XML-based layouts, I pushed to build the UI in Jetpack Compose - knowing it was the direction Android development was heading and that the Bangkit curriculum had introduced it. The challenge was absorbing Compose's declarative paradigm in parallel with building the actual product. I integrated Retrofit for the ML inference API calls, kept the MVVM structure clean with proper dependency injection, and coordinated closely with the ML and Cloud team members to align model outputs with the app's user flow.`,
      result: `The project scored 90 out of 100 in the capstone evaluation. That score validated the technical risk of choosing Jetpack Compose - a framework the team wasn't yet fluent in - and served as proof that the deliberate architectural bet paid off.`
    },

    techStack: [
      'Kotlin',
      'Jetpack Compose',
      'Retrofit',
      'MVVM',
      'Dependency Injection',
      'FastAPI',
      'Android SDK'
    ],
    links: [
      { label: 'Repository', url: 'https://github.com/RashIO-Bangkit-Capstone/android', type: 'repo' as const }
    ],
    image: rashio
  },
  {
    slug: 'uniqgue',
    title: 'Uniqgue - Fashion E-Commerce Website',
    shortDescription:
      'A fashion-focused e-commerce platform built as a final Web Programming course project. Recognized as one of the top projects in the class for UI quality, structure, and overall usability.',

    star: {
      situation: `As the final assignment for a Web Programming course, students were challenged to build a fully functional e-commerce website applying modern web development practices and strong UI/UX principles. The goal was a fashion-focused platform covering product browsing, shopping cart flow, and a polished user experience.`,
      task: `I took on the role of UI/UX Designer and Front-End Leader, responsible for defining the interface structure, designing reusable components, and leading front-end development across a team of five.`,
      action: `I designed the UI/UX flow in Figma to emphasize clarity, visual appeal, and ease of navigation. The front end was built with Tailwind CSS for consistent styling, while CodeIgniter 4 and MySQL supported the MVC architecture and data management. As Front-End Leader I conducted code reviews, handled merge requests, and helped team members troubleshoot integration issues.`,
      result: `The project was selected as one of the top projects in the class, receiving strong feedback from the lecturer for UI quality and overall usability. It demonstrated solid front-end leadership and core e-commerce implementation despite not yet integrating a payment gateway.`
    },

    techStack: ['CodeIgniter 4', 'PHP', 'Tailwind CSS', 'MySQL', 'Figma'],
    links: [
      { label: 'Repository', url: 'https://github.com/Boreneoux/Uniqgue', type: 'repo' as const }
    ],
    image: uniqgue
  }
];
