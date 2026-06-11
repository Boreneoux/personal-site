import { useRef } from 'react';
import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  HStack,
  Link,
  VStack,
  Container
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { LuExternalLink } from 'react-icons/lu';
import { TechPillList } from '@/components/TechPill';
import { useColorModeValue } from '@/components/ui/color-mode';
import { portfolios } from '@/data/portfolios';
import { useNavigate } from 'react-router-dom';
import { BackButton } from '@/components/BackButton';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const titleColor = useColorModeValue('purple.500', 'purple.400');
  const textColor = useColorModeValue('gray.600', 'gray.400');
  const cardBg = useColorModeValue('gray.50/50', 'white/5');
  const cardBorder = useColorModeValue('gray.200', 'white/10');

  useGSAP(
    () => {
      gsap.from(containerRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });
    },
    { scope: containerRef }
  );

  const truncate = (text: string, limit: number) => {
    return text.length > limit ? text.slice(0, limit) + '...' : text;
  };

  return (
    <Container maxW="4xl" ref={containerRef}>
      <VStack gap={{ base: 12, md: 16 }} w="full" align="start">
        <BackButton to="/" label="Home" mb={0} />
        <VStack gap={{ base: 16, md: 24 }} w="full">
          <Heading as="h1" size="2xl" textAlign="center" fontWeight="bold">
            All Projects
            <Box
              w="60px"
              h="4px"
              bg="purple.500"
              mx="auto"
              mt={4}
              borderRadius="full"
            />
          </Heading>

          <VStack gap={{ base: 12, md: 16 }} w="full">
            {portfolios.map((portfolio, index) => {
              const isEven = index % 2 === 0;
              return (
                <Box
                  key={index}
                  className="portfolio-card"
                  w="full"
                  p={{ base: 6, md: 10 }}
                  bg={cardBg}
                  borderRadius="3xl"
                  border="1px solid"
                  borderColor={cardBorder}
                  backdropFilter="blur(8px)"
                  transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                  role="group"
                  cursor="pointer"
                  onClick={() => navigate(`/portfolio/${portfolio.slug}`)}
                  _hover={{
                    borderColor: 'purple.500/50',
                    transform: 'translateY(-6px)',
                    boxShadow: '2xl'
                  }}>
                  <Flex
                    direction={{
                      base: 'column',
                      md: isEven ? 'row' : 'row-reverse'
                    }}
                    gap={{ base: 8, md: 12 }}
                    align="center"
                    w="full">
                    <Box
                      w={{ base: 'full', md: '50%' }}
                      borderRadius="2xl"
                      overflow="hidden"
                      boxShadow="xl">
                      <Image
                        src={portfolio.image}
                        alt={portfolio.title}
                        w="full"
                        h={{ base: '200px', md: '280px' }}
                        objectFit="cover"
                        transition="transform 0.5s ease"
                        _groupHover={{ transform: 'scale(1.08)' }}
                      />
                    </Box>

                    <Box
                      w={{ base: 'full', md: '50%' }}
                      textAlign={{
                        base: 'left',
                        md: isEven ? 'left' : 'right'
                      }}>
                      <Heading
                        size="xl"
                        mb={3}
                        color={titleColor}
                        lineHeight="shorter">
                        {portfolio.title}
                      </Heading>
                      {portfolio.links && portfolio.links.length > 0 && (
                        <HStack gap={2} mb={4} flexWrap="wrap">
                          {portfolio.links.map((link, i) => (
                            <Link
                              key={i}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={e => e.stopPropagation()}
                              display="inline-flex"
                              alignItems="center"
                              gap={1.5}
                              px={3}
                              py={1.5}
                              borderRadius="md"
                              border="1px solid"
                              borderColor={link.type === 'live' ? 'purple.500/40' : 'gray.300'}
                              color={link.type === 'live' ? 'purple.400' : textColor}
                              fontSize="xs"
                              fontWeight="600"
                              transition="all 0.2s"
                              _hover={{
                                borderColor: 'purple.400',
                                color: 'purple.400',
                                textDecoration: 'none'
                              }}>
                              {link.type === 'live'
                                ? <LuExternalLink size={12} />
                                : <FaGithub size={12} />}
                              {link.label}
                            </Link>
                          ))}
                        </HStack>
                      )}

                      <Text
                        fontSize="md"
                        color={textColor}
                        mb={8}
                        lineHeight="relaxed"
                        textAlign="justify">
                        {truncate(portfolio.shortDescription, 150)}
                      </Text>

                      <TechPillList techStack={portfolio.techStack} max={6} />
                    </Box>
                  </Flex>
                </Box>
              );
            })}
          </VStack>
        </VStack>
      </VStack>
    </Container>
  );
}
