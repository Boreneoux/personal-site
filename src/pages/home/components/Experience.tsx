import { useRef } from 'react';
import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  List
} from '@chakra-ui/react';
import { TechPillList } from '@/components/TechPill';
import { useColorModeValue } from '@/components/ui/color-mode';
import { experiences } from '@/data/experiences';
import { SectionHeading } from '@/components/SectionHeading';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export const Experiences = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleColor = useColorModeValue('fg', 'white');
  const textColor = useColorModeValue('gray.600', 'gray.400');
  const dateColor = useColorModeValue('gray.500', 'gray.500');
  const borderColor = useColorModeValue('gray.200', 'white/10');
  const hoverBorderColor = 'purple.500';
  const rowHoverBg = useColorModeValue('gray.50', 'white/5');

  useGSAP(
    () => {
      gsap.from(containerRef.current, {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          once: true
        }
      });
    },
    { scope: containerRef }
  );

  return (
    <Box
      id="experience"
      ref={containerRef}
      as="section"
      py={{ base: 10, md: 16 }}
      position="relative">
      <Container maxW="5xl" px={{ base: 6, md: 12 }}>
        <SectionHeading>my journey.</SectionHeading>

        <Flex direction="column">
          {experiences.map((exp, index) => (
            <Box
              key={index}
              py={8}
              borderBottom="1px solid"
              borderColor={borderColor}
              transition="all 0.3s ease"
              _hover={{
                borderColor: hoverBorderColor,
                bg: rowHoverBg,
                '.chakra-ui-dark &': {
                  color: 'white'
                }
              }}
              role="group"
              px={{ base: 4, md: 8 }}
              mx={{ base: -4, md: -8 }}
              borderRadius="lg">
              <Flex
                direction={{ base: 'column', md: 'row' }}
                gap={{ base: 6, md: 10 }}
                align={{ base: 'flex-start', md: 'flex-start' }}
                position="relative">
                <Flex
                  align="center"
                  width={{ base: 'full', md: '25%' }}
                  gap={4}
                  flexShrink={0}
                  mt={{ base: 1, md: 0 }}>
                  <Image
                    src={exp.image}
                    alt={exp.company}
                    boxSize="60px"
                    objectFit="cover"
                    borderRadius="full"
                    bg="white"
                  />
                  <Text
                    fontWeight="bold"
                    fontSize="lg"
                    color={titleColor}
                    maxW={{ base: 'calc(100% - 100px)', md: 'full' }}>
                    {exp.company}
                  </Text>
                </Flex>
                <Box flex={1} width="full">
                  <Heading
                    size="md"
                    mb={4}
                    color={titleColor}
                    transition="color 0.3s"
                    _groupHover={{ color: 'purple.500' }}>
                    {exp.position}
                  </Heading>

                  <List.Root
                    gap={2}
                    mb={6}
                    pl={4}
                    color={textColor}
                    fontSize="md"
                    css={{
                      '.chakra-ui-dark [role="group"]:hover &': {
                        color: 'gray.200'
                      }
                    }}>
                    {exp.description.map((desc, i) => (
                      <List.Item key={i}>{desc}</List.Item>
                    ))}
                  </List.Root>

                  <TechPillList techStack={exp.techStack} />
                </Box>

                <Flex
                  width={{ base: 'auto', md: '15%' }}
                  direction={{ base: 'column', md: 'column' }}
                  align={{ base: 'flex-end', md: 'flex-end' }}
                  justify="flex-start"
                  mt={{ base: 0, md: 1 }}
                  position={{ base: 'absolute', md: 'static' }}
                  top={{ base: 0, md: 'auto' }}
                  right={{ base: 0, md: 'auto' }}>
                  <Text fontSize="sm" fontWeight="bold" color={dateColor}>
                    {exp.dateIn}
                  </Text>
                  <Text
                    fontSize="sm"
                    color="gray.400"
                    lineHeight="tight"
                    mt={0}>
                    - {exp.dateOut}
                  </Text>
                </Flex>
              </Flex>
            </Box>
          ))}
        </Flex>
      </Container>
    </Box>
  );
};
