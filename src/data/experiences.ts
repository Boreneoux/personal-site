import vidio from '@/assets/vidio.jfif';
import bangkit from '@/assets/bangkit.jfif';
import fortius from '@/assets/fortius.jfif';

export const experiences = [
  {
    company: 'Fortius Solusi Informatika',
    position: 'R&D Staff - Fullstack Developer',
    dateIn: 'Mar 2025',
    dateOut: 'Oct 2025',
    description: [
      'Designed and developed ClaraAI, an AI-assisted reconciliation automation tool integrating DeepSeek AI to guide users through CSV ingestion, field mapping, XML generation, and job triggering',
      'Iterated extensively on prompt design to achieve consistent, reliable AI outputs aligned with reconciliation business rules - reducing a two-week manual process to roughly one day',
      'Contributed to the existing .NET 4.7.2 and Ext.NET core reconciliation application alongside R&D feature delivery',
      'Initiated and wrote product technical documentation for key features of the reconciliation system'
    ],
    techStack: ['React', 'TypeScript', 'Chakra UI', 'C#', '.NET', 'Ext.NET', 'MSSQL', 'PostgreSQL', 'DeepSeek AI'],
    image: fortius
  },
  {
    company: 'Bangkit Academy 2024 by Google, GoTo, Traveloka',
    position: 'Android Learning Path Mentor',
    dateIn: 'Feb 2024',
    dateOut: 'Jul 2024',
    description: [
      'Mentored 25 students in the Android development learning path through weekly sessions, code reviews, and Q&A',
      'Monitored individual progress to keep students on track with the program timeline, providing technical guidance and motivation',
      '3 mentees graduated with distinction, one secured a company-based capstone project, and several went on to roles at well-known tech companies'
    ],
    techStack: ['Kotlin', 'Android SDK', 'Jetpack Compose'],
    image: bangkit
  },
  {
    company: 'Vidio',
    position: 'Front End Engineer (Internship)',
    dateIn: 'Aug 2023',
    dateOut: 'Dec 2023',
    description: [
      'Built and maintained UI components using Storybook, contributing to the internal component library used across the platform',
      'Refactored existing JavaScript codebases to TypeScript and resolved import alias inconsistencies across the project',
      'Collaborated with senior engineers through pair programming on Extreme Programming methodology, completing 120+ assigned tasks',
      'Worked with mocked services to develop and test frontend components independently from backend dependencies'
    ],
    techStack: ['React', 'TypeScript', 'Storybook', 'Git'],
    image: vidio
  }
];
