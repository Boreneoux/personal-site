import rashio from '@/assets/rashio.jpg';
import uniqgue from '@/assets/uniqgue.jpg';
import claraai from '@/assets/clara.jpg';
import emarealty from '@/assets/ema-realty.jpg';

export const portfolios = [
  {
    slug: 'rashio',
    title: 'RashIO - Skin Disease Detection App',
    shortDescription:
      'RashIO is an Android-based skin health application that helps users identify potential skin diseases by analyzing images using a machine learning model. The app focuses on early detection and accessibility, combining a clean, user-friendly interface with on-device image analysis to provide fast and reliable results. This project was developed as a Capstone Project for Bangkit Academy 2023 Batch 1.',

    star: {
      situation: `Skin diseases are common but often go undiagnosed due to limited access to dermatologists, delayed consultations, or lack of early awareness. As part of Bangkit Academy's Capstone Project, our team aimed to build a mobile solution that could help users perform preliminary skin disease detection using smartphone cameras, making early awareness more accessible to the general public.`,
      task: 'I was responsible for designing the overall user experience and developing the Android application. My role included translating the machine learning output into a user-friendly interface, implementing the mobile architecture, and ensuring smooth integration between the UI and the image classification model.',
      action: `I designed the application's UI/UX using Figma, focusing on simplicity, clarity, and accessibility for non-technical users. On the development side, I built the Android application using Kotlin, Android SDK, and Jetpack Compose for a modern, declarative UI.
        I integrated the skin disease detection model using TensorFlow.js, managed local data storage with SQLite, and ensured the app could process images efficiently while maintaining responsive performance. I collaborated closely with machine learning and cloud team members to align model outputs with the application flow and user experience.`,
      result:
        'RashIO was successfully delivered as a complete end-to-end mobile application for the Bangkit 2023 Capstone Project. The app demonstrated effective integration between machine learning and mobile development, received positive feedback for its intuitive UI, and served as a strong proof-of-concept for accessible skin health screening through mobile technology.'
    },

    techStack: [
      'Kotlin',
      'TensorFlow.js',
      'SQLite',
      'Android SDK',
      'Jetpack Compose',
      'Figma'
    ],
    image: rashio
  },
  {
    slug: 'uniqgue',
    title: 'Uniqgue - Fashion E-Commerce Website',
    shortDescription:
      'Uniqgue is a modern fashion e-commerce website that showcases trendy apparel across multiple categories such as hats, tops, and pants. The platform focuses on clean UI, intuitive navigation, and a smooth shopping flow from product discovery to checkout. This project was developed as the final project for a Web Programming course and was recognized as one of the top projects in the class.',

    star: {
      situation: `As part of the final assignment for a Web Programming course, students were challenged to build a fully functional e-commerce website that applied modern web development practices and strong UI/UX principles. The goal was to create a fashion-focused platform that could effectively present products, support a shopping cart flow, and deliver a polished user experience.`,
      task: 'I took on the role of UI/UX Designer and Front-End Leader, responsible for defining the overall interface structure, designing reusable UI components, and leading front-end development. I also coordinated a team of five members by dividing tasks, reviewing code contributions, and ensuring consistency across the user interface.',
      action: `I designed the UI/UX flow to emphasize clarity, visual appeal, and ease of navigation, ensuring users could browse categories, manage their cart, and proceed to checkout seamlessly. The front end was built using Tailwind CSS for rapid and consistent styling, while CodeIgniter 4 and MySQL were used to support the application's MVC architecture and data management.
      As Front-End Leader, I conducted code reviews, handled merge requests, and assisted team members with troubleshooting front-end integration issues. I worked closely with the team to maintain clean code structure and align implementation with the initial design.`,
      result:
        'The project was successfully completed and selected as one of the top projects in the class, receiving very positive feedback from the lecturer for its UI quality, structure, and overall usability. The application demonstrated strong collaboration, effective front-end leadership, and a solid implementation of core e-commerce features despite not yet integrating a payment gateway.'
    },

    techStack: ['CodeIgniter4', 'PHP', 'TailwindCSS', 'MYSQL', 'Figma'],
    image: uniqgue
  },
  {
    slug: 'ema-realty',
    title: 'Ema Realty Site - Property Consultant Digital Listing Platform',
    shortDescription:
      'Ema Realty Site is a digital property listing and company profile website designed for Ema Realty, a property consulting firm. The platform serves as both a corporate presence and a real estate advertising channel, enabling the company to showcase and manage property listings efficiently. Built with a modern fullstack architecture, the system supports secure authentication, scalable data management, and a clean, professional user interface tailored for the real estate industry.',

    star: {
      situation: `Ema Realty required a centralized digital platform to strengthen its online presence and streamline how property listings were promoted and managed. Existing marketing efforts relied heavily on manual processes and third-party platforms, limiting control over data, branding, and scalability. The company needed a solution that functioned both as a company profile website and a structured property listing system.`,
      task: 'As the Project Leader and Fullstack Developer, I was responsible for designing the system architecture, leading development decisions, and implementing both the front-end and back-end of the application. My goal was to deliver a secure, scalable platform that aligned with business needs while remaining flexible for future feature expansion.',
      action: `I designed and developed the backend using NestJS with TypeScript, implementing a modular architecture supported by Prisma and PostgreSQL for reliable data management. Secure authentication and authorization were handled using JWT to protect internal data access.
      On the front end, I built the application using Next.js and Chakra UI, focusing on performance, SEO readiness, and a clean, professional user experience suitable for a property consultant brand. I structured the system to support general real estate listings, detailed property information, and seamless data synchronization between the front-end and back-end.
      As Project Leader, I also managed development flow, defined technical standards, and ensured that implementation aligned with both technical best practices and business objectives.`,
      result: `The platform was successfully delivered as a unified digital solution for Ema Realty, improving the company's ability to promote and manage property listings independently. The system provided a scalable foundation for digital marketing, reduced reliance on third-party listing platforms, and positioned the company for future growth through a maintainable and secure fullstack architecture.`
    },

    techStack: [
      'Typescript',
      'NextJS',
      'NestJS',
      'ChakraUI',
      'Prisma',
      'PostgreSQL',
      'JWT'
    ],
    image: emarealty
  },
  {
    slug: 'clara-ai',
    title: 'Clara AI - AI-Powered Bank Reconciliation Web Application',
    shortDescription:
      'Clara AI is an AI-assisted bank reconciliation web application designed to streamline financial data matching and validation processes. Built as a single-page application, it leverages stable and structured AI prompting—rather than traditional machine learning models—to analyze and reconcile banking data. The system is integrated with an internal enterprise reconciliation platform to support faster, more accurate financial operations.',

    star: {
      situation: `Bank reconciliation is a critical but time-consuming process that often involves manual data comparison, validation, and interpretation across multiple data sources. The company aimed to enhance its internal reconciliation system by introducing an AI-assisted approach that could help analyze and interpret reconciliation data more efficiently—without relying on machine learning models that require training, retraining, and complex deployment.`,
      task: 'As a Developer in the R&D team, I was responsible for building the web application and designing the AI interaction flow. My objective was to create a reliable reconciliation assistant using prompt-based AI reasoning, integrate it with the existing internal reconciliation system, and ensure the application could handle structured financial data accurately and consistently.',
      action: `I developed the application as a single-page application (SPA) using ReactJS and Chakra UI, focusing on clarity, usability, and performance for enterprise users. Instead of using a machine learning model, I designed stable and deterministic prompting strategies that process structured reconciliation data and guide the AI to produce consistent, explainable outputs.
      The application was integrated with DeepSeek for AI reasoning and connected to a SQL Server database to manage reconciliation data. I worked closely with internal systems to ensure seamless data flow between Clara AI and the existing reconciliation platform, aligning AI outputs with real operational workflows.`,
      result:
        'Clara AI successfully enhanced the internal reconciliation process by reducing manual analysis effort and improving data interpretation speed. The prompt-based AI approach proved effective, stable, and easier to maintain compared to traditional ML solutions. The project demonstrated how AI reasoning and well-structured prompting can deliver real business value in enterprise financial systems without the overhead of machine learning pipelines.'
    },

    techStack: ['ReactJS', 'ChakraUI', 'DeepSeek', 'SQLServer', 'TypeScript'],
    image: claraai
  }
];
