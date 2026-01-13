import {
  Box,
  Button,
  Circle,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { LuArrowRight } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import photo from '@/assets/ichlasul.jpg';
import { SocialLink } from '@/components/SocialLink';

const roles = ['Web Developer', 'Android Developer', 'Software Engineer'];

export const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = roles[roleIndex];
      if (isDeleting) {
        setCurrentText(prev => prev.slice(0, -1));
        setTypingSpeed(50);
      } else {
        setCurrentText(prev => fullText.slice(0, prev.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setRoleIndex(prev => (prev + 1) % roles.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, typingSpeed]);

  return (
    <Box
      as="section"
      position="relative"
      overflow="hidden"
      minH="calc(100vh - 80px)"
      display="flex"
      alignItems="center"
      bg="bg.canvas">
      <Box
        position="absolute"
        top="-15%"
        left="-15%"
        w={{ base: '100%', md: '70%' }}
        h={{ base: '60%', md: '80%' }}
        background="radial-gradient(circle, color-mix(in srgb, var(--chakra-colors-purple-500) 15%, transparent), transparent 70%)"
        borderRadius="full"
        filter="blur(120px)"
        zIndex={0}
        opacity={{ base: 0.6, md: 0.4 }}
      />
      <Box
        position="absolute"
        bottom="-10%"
        right="-10%"
        w={{ base: '90%', md: '60%' }}
        h={{ base: '50%', md: '70%' }}
        background="radial-gradient(circle, color-mix(in srgb, var(--chakra-colors-pink-500) 10%, transparent), transparent 70%)"
        borderRadius="full"
        filter="blur(120px)"
        zIndex={0}
        opacity={{ base: 0.5, md: 0.3 }}
      />

      <Box
        position="absolute"
        top="20%"
        right="15%"
        w="150px"
        h="150px"
        bg="purple.200/20"
        borderRadius="38% 62% 63% 37% / 41% 44% 56% 59%"
        filter="blur(40px)"
        zIndex={0}
        display={{ base: 'none', md: 'block' }}
      />
      <Box
        position="absolute"
        bottom="15%"
        left="10%"
        w="200px"
        h="200px"
        bg="pink.200/10"
        borderRadius="50% 50% 50% 50% / 30% 30% 70% 70%"
        filter="blur(50px)"
        zIndex={0}
        display={{ base: 'none', md: 'block' }}
      />

      <Box
        position="absolute"
        inset={0}
        opacity={0.04}
        bgImage="radial-gradient(var(--chakra-colors-purple-500) 1.5px, transparent 0)"
        bgSize="32px 32px"
        zIndex={0}
      />

      <Flex
        direction={{ base: 'column-reverse', md: 'row' }}
        align="center"
        justify="space-between"
        gap={{ base: 10, md: 20 }}
        maxW="7xl"
        mx="auto"
        px={{ base: 6, md: 12 }}
        w="full"
        position="relative"
        zIndex={1}>
        <VStack
          align={{ base: 'center', md: 'flex-start' }}
          gap={6}
          flex="1"
          textAlign={{ base: 'center', md: 'left' }}>
          <Stack gap={1}>
            <Heading
              size={{ base: '4xl', md: '6xl' }}
              fontWeight="500"
              letterSpacing="tight"
              lineHeight="1.1"
              color="fg"
              fontFamily="var(--font-vend-sans)">
              Ichlasul Fikri{' '}
              <Box
                as="span"
                color="purple.500"
                fontSize={{ base: 'lg', md: '2xl' }}
                fontWeight="600"
                ml={2}
                verticalAlign="middle">
                (Boreneoux)
              </Box>
            </Heading>
            <style>
              {`
                @keyframes blink {
                  from, to { border-color: transparent }
                  50% { border-color: var(--chakra-colors-purple-500) }
                }
              `}
            </style>
            <HStack
              fontSize={{ base: 'lg', md: '2xl' }}
              fontWeight="600"
              h="1.5em"
              mt={2}>
              <Text color="fg.muted">CS Graduate /</Text>
              <Text
                color="purple.500"
                borderRight="3px solid"
                borderColor="purple.500"
                pr={1}
                animation="blink 1s step-end infinite">
                {currentText}
              </Text>
            </HStack>
          </Stack>

          <Text
            fontSize="lg"
            color="fg.muted"
            maxW="2xl"
            lineHeight="relaxed"
            fontWeight="500">
            I build accessible, pixel-perfect, performant, and premium web
            experiences. Passionate about modern technologies and creating
            intuitive user interfaces.
          </Text>

          <HStack gap={4} pt={2}>
            <Button
              asChild
              colorPalette="purple"
              size="xl"
              variant="solid"
              fontWeight="700"
              borderRadius="xl"
              px={8}>
              <Link to="/#portfolio">
                View Portfolio <LuArrowRight />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="xl"
              fontWeight="700"
              borderRadius="xl"
              px={8}
              borderColor="purple.500/30">
              <Link to="/#contact">Contact Me</Link>
            </Button>
          </HStack>

          <HStack gap={8} pt={6}>
            <SocialLink
              href="https://www.linkedin.com/in/ichlasulfikri/"
              icon={<FaLinkedin size={26} />}
              label="LinkedIn"
            />
            <SocialLink
              href="https://github.com/boreneoux"
              icon={<FaGithub size={26} />}
              label="GitHub"
            />
            <SocialLink
              href="https://instagram.com/ichlasulfikri_"
              icon={<FaInstagram size={26} />}
              label="Instagram"
            />
            <SocialLink
              href="https://youtube.com/ichlaso"
              icon={<FaYoutube size={26} />}
              label="YouTube"
            />
          </HStack>
        </VStack>

        <Box position="relative" flexShrink={0}>
          <Box
            position="absolute"
            inset="-8px"
            bgGradient="to-br"
            gradientFrom="purple.400"
            gradientTo="pink.500"
            borderRadius="full"
            filter="blur(15px)"
            opacity={0.3}
          />
          <Circle
            size={{ base: '280px', md: '450px' }}
            bg="bg.panel"
            overflow="hidden"
            position="relative"
            boxShadow="2xl">
            <Image
              src={photo}
              alt="Ichlasul Fikri"
              objectFit="cover"
              w="full"
              h="full"
              transition="transform 0.5s ease"
              _hover={{ transform: 'scale(1.05)' }}
            />
          </Circle>
        </Box>
      </Flex>
    </Box>
  );
};
