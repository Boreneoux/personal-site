import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Box, Flex, Text, Container } from '@chakra-ui/react';
import { SectionHeading } from '@/components/SectionHeading';
import { LuChevronDown } from 'react-icons/lu';

gsap.registerPlugin(ScrollTrigger);

const sentences = [
  'hello there!',
  `I'm a software engineer with a strong interest in web development and experience building web and mobile applications (only android, lol).`,
  'I enjoy turning ideas into simple, thoughtful, and user-friendly digital products.',
  'My core skills revolve around JavaScript and TypeScript, with hands-on experience using modern web frameworks and tools.',
  'I value clear communication, attention to detail, and delivering work on time in every project I take on.'
];

export const AboutMe = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const bgColor = 'bg.canvas';

  useGSAP(
    () => {
      if (!textRef.current) return;

      const childSentences = textRef.current.querySelectorAll('.sentence');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=200%',
          scrub: 1,
          pin: true
        }
      });

      tl.to(childSentences[0], { opacity: 1, duration: 1 }).to(
        childSentences[1],
        { opacity: 1, duration: 1 },
        '+=0.5'
      );

      tl.to(
        '.blob-1',
        { x: '20vw', y: '20vh', scale: 0.5, opacity: 0, duration: 2 },
        '<'
      )
        .to(
          '.blob-2',
          { x: '-20vw', y: '-20vh', scale: 0.5, opacity: 0, duration: 2 },
          '<'
        )
        .fromTo(
          '.blob-3',
          { y: '100vh', x: '0vw', opacity: 0, scale: 0.8 },
          {
            y: '10vh',
            x: '0vw',
            opacity: 0.6,
            scale: 1.5,
            duration: 2,
            ease: 'power2.out'
          },
          '<+=0.5'
        );

      tl.to(childSentences[2], { opacity: 1, duration: 1 }, '+=1');

      tl.to(
        '.blob-3',
        {
          x: '-20vw',
          y: '15vh',
          rotation: 90,
          scale: 1.2,
          duration: 2,
          ease: 'power2.inOut'
        },
        '<'
      ).fromTo(
        '.blob-4',
        { y: '-100vh', x: '20vw', opacity: 0 },
        {
          y: '-10vh',
          x: '10vw',
          opacity: 0.5,
          scale: 1.2,
          duration: 2,
          ease: 'power2.out'
        },
        '<'
      );

      tl.to(childSentences[3], { opacity: 1, duration: 1 }, '+=1');

      tl.to(
        '.blob-3',
        {
          y: '30vh',
          x: '-10vw',
          rotation: 180,
          scale: 1.0,
          duration: 2,
          ease: 'power2.inOut'
        },
        '<'
      ).to(
        '.blob-4',
        {
          y: '5vh',
          x: '-15vw',
          rotation: -45,
          scale: 1.0,
          duration: 2,
          ease: 'power2.inOut'
        },
        '<'
      );

      tl.to(childSentences[4], { opacity: 1, duration: 1 }, '+=1');

      tl.to('.blob-3', { opacity: 0, scale: 0.5, duration: 1 }, '<')
        .to('.blob-4', { opacity: 0, scale: 0.5, duration: 1 }, '<')
        .fromTo(
          '.blob-5',
          { scale: 0.5, opacity: 0 },
          { scale: 2.5, opacity: 0.4, duration: 2, ease: 'circ.out' },
          '<'
        );

      tl.to('.blob-5', { opacity: 0, duration: 1 }, '+=1').to(
        '.scroll-arrow',
        { opacity: 0, duration: 0.5 },
        '<'
      );
    },
    { scope: containerRef }
  );

  return (
    <Box
      id="about-me"
      ref={containerRef}
      as="section"
      bg={bgColor}
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
      overflow="hidden">
      <Box
        className="blob-1"
        position="absolute"
        top="5%"
        left="5%"
        w="350px"
        h="350px"
        bg="radial-gradient(circle, var(--chakra-colors-purple-500) 0%, transparent 70%)"
        filter="blur(60px)"
        opacity={0.4}
        zIndex={0}
      />
      <Box
        className="blob-2"
        position="absolute"
        bottom="5%"
        right="5%"
        w="400px"
        h="400px"
        bg="radial-gradient(circle, var(--chakra-colors-pink-500) 0%, transparent 70%)"
        filter="blur(70px)"
        opacity={0.4}
        zIndex={0}
      />
      <Box
        className="blob-3"
        position="absolute"
        bottom="0"
        left="50%"
        transform="translateX(-50%)"
        w="500px"
        h="500px"
        bg="radial-gradient(circle, var(--chakra-colors-cyan-400) 0%, transparent 70%)"
        filter="blur(80px)"
        opacity={0}
        zIndex={0}
      />
      <Box
        className="blob-4"
        position="absolute"
        top="0"
        right="0"
        w="450px"
        h="450px"
        bg="radial-gradient(circle, var(--chakra-colors-yellow-400) 0%, transparent 70%)"
        filter="blur(90px)"
        opacity={0}
        zIndex={0}
      />
      <Box
        className="blob-5"
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        w="600px"
        h="600px"
        bg="radial-gradient(circle, var(--chakra-colors-orange-500) 0%, transparent 70%)"
        filter="blur(100px)"
        opacity={0}
        zIndex={0}
      />

      <Container
        maxW="3xl"
        px={{ base: 10, md: 12 }}
        py={{ base: 40, md: 32 }}
        position="relative"
        zIndex={1}>
        <Flex
          direction="column"
          align="center"
          textAlign="center"
          gap={{ base: 12, md: 16 }}>
          <SectionHeading mb={0} className="about-heading">
            about me.
          </SectionHeading>

          <Box
            ref={textRef}
            textAlign="justify"
            css={{ textAlignLast: 'center' }}
            w="full">
            {sentences.map((sentence, index) => (
              <span key={index}>
                <Text
                  as="span"
                  className="sentence"
                  fontSize={{ base: 'xl', md: '3xl' }}
                  fontWeight="medium"
                  lineHeight="1.6"
                  letterSpacing="tight"
                  color="fg"
                  opacity={0.3}
                  display="inline"
                  transition="color 0.3s">
                  {sentence}
                </Text>
                <Text
                  as="span"
                  fontSize={{ base: 'xl', md: '3xl' }}
                  display="inline"
                  opacity={0}>
                  {' '}
                </Text>
              </span>
            ))}
          </Box>

          <Box
            className="scroll-arrow"
            mt={8}
            color="purple.500"
            fontSize="4xl"
            animation="bounce 2s infinite"
            css={{
              '@keyframes bounce': {
                '0%, 100%': { transform: 'translateY(0)' },
                '50%': { transform: 'translateY(10px)' }
              }
            }}>
            <LuChevronDown />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
