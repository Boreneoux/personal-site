import { Hero } from './pages/home/components/Hero';
import { AboutMe } from './pages/home/components/AboutMe';
import { Skills } from './pages/home/components/Skills';
import { Portfolio } from './pages/home/components/Portfolio';
import { Experiences } from './pages/home/components/Experience';
import { Contact } from './pages/home/components/Contact';

export default function App() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Experiences />
      <Contact />
    </>
  );
}
