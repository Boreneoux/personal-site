import { useRef } from 'react';
import { Box, Container, Text, Flex, Link } from '@chakra-ui/react';
import { SectionHeading } from '@/components/SectionHeading';
import { useColorModeValue } from '@/components/ui/color-mode';
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { SocialLink } from '@/components/SocialLink';

gsap.registerPlugin(ScrollTrigger);

export const Contact = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textColor = useColorModeValue('gray.600', 'gray.400');

  useGSAP(
    () => {
      gsap.from(containerRef.current, {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 90%',
          once: true
        }
      });
    },
    { scope: containerRef }
  );

  return (
    <Box id="contact" ref={containerRef} as="section" py={{ base: 10, md: 16 }}>
      <Container maxW="3xl" textAlign="center">
        <SectionHeading mb={8}>contact me.</SectionHeading>

        <Text fontSize={{ base: 'lg', md: 'xl' }} color={textColor} mb={10}>
          You can contact me through my{' '}
          <Link
            href="mailto:ichlasul.ap@gmail.com"
            color="purple.500"
            fontWeight="bold"
            _hover={{ textDecoration: 'underline', color: 'purple.400' }}>
            email
          </Link>
        </Text>

        <Flex justify="center" gap={8}>
          <SocialLink
            href="https://linkedin.com/in/ichlasulfikri"
            icon={<FaLinkedin size={28} />}
            label="LinkedIn"
          />
          <SocialLink
            href="https://github.com/boreneoux"
            icon={<FaGithub size={28} />}
            label="GitHub"
          />
          <SocialLink
            href="https://instagram.com/ichlasulfikri_"
            icon={<FaInstagram size={28} />}
            label="Instagram"
          />
          <SocialLink
            href="https://youtube.com/ichlaso"
            icon={<FaYoutube size={28} />}
            label="YouTube"
          />
        </Flex>
      </Container>
    </Box>
  );
};
