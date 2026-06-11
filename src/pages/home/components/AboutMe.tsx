import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Box, Container, Text } from '@chakra-ui/react';
import { SectionHeading } from '@/components/SectionHeading';

gsap.registerPlugin(ScrollTrigger);

const sentences = [
  { text: 'hello there!', large: true },
  {
    text: "I'm a full-stack engineer with experience across the delivery cycle - from database modeling and API design to frontend work with React and Next.js.",
    large: false
  },
  {
    text: 'Recently I integrated DeepSeek AI into a fintech reconciliation system, turning a two-week manual process into something that runs in a day.',
    large: false
  },
  {
    text: 'My backend stack is TypeScript, Express/NestJS, Bun/NodeJS, and PostgreSQL - with Android development background in Kotlin and Jetpack Compose.',
    large: false
  },
  {
    text: 'Still growing, but the kind of person who takes that seriously - learning deliberately and applying it to real things.',
    large: false
  }
];

export const AboutMe = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!textRef.current) return;

      const words = textRef.current.querySelectorAll<HTMLElement>('.word');
      gsap.set(words, { opacity: 0.15 });

      gsap.to(words, {
        opacity: 1,
        stagger: 0.04,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=220%',
          scrub: 1.2,
          pin: true
        }
      });
    },
    { scope: containerRef }
  );

  return (
    <Box
      id="about-me"
      ref={containerRef}
      as="section"
      bg="bg.canvas"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
      overflow="hidden">

      {/* Ambient orbs - CSS animation only, no GSAP movement */}
      <Box
        position="absolute"
        top="-15%"
        left="-10%"
        w="700px"
        h="700px"
        bg="radial-gradient(circle, var(--chakra-colors-purple-500) 0%, transparent 65%)"
        filter="blur(90px)"
        zIndex={0}
        css={{ animation: 'orb-breathe 20s ease-in-out infinite' }}
      />
      <Box
        position="absolute"
        bottom="-15%"
        right="-10%"
        w="800px"
        h="800px"
        bg="radial-gradient(circle, var(--chakra-colors-pink-500) 0%, transparent 65%)"
        filter="blur(110px)"
        zIndex={0}
        css={{ animation: 'orb-breathe-alt 26s ease-in-out infinite' }}
      />

      <Container
        maxW="3xl"
        px={{ base: 8, md: 12 }}
        py={{ base: 40, md: 32 }}
        position="relative"
        zIndex={1}>

        <SectionHeading mb={10}>about me.</SectionHeading>

        <Box
          ref={textRef}
          textAlign="center"
          lineHeight="1.8">
          {sentences.map((sentence, sIdx) => (
            <span key={sIdx}>
              {sentence.text.split(' ').map((word, wIdx) => (
                <Text
                  as="span"
                  key={`${sIdx}-${wIdx}`}
                  className="word"
                  fontSize={{
                    base: sentence.large ? '2xl' : 'xl',
                    md: sentence.large ? '4xl' : '2xl'
                  }}
                  fontWeight={sentence.large ? 'bold' : 'medium'}
                  letterSpacing="tight"
                  color="fg"
                  display="inline">
                  {word}
                  {' '}
                </Text>
              ))}
              {sIdx < sentences.length - 1 && (
                <Text as="span" fontSize={{ base: 'xl', md: '2xl' }} display="inline">
                  {'  '}
                </Text>
              )}
            </span>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
