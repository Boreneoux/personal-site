import { useRef, useState, useEffect } from 'react';
import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
  Link as ChakraLink,
  IconButton
} from '@chakra-ui/react';
import { useColorModeValue } from '@/components/ui/color-mode';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { portfolios } from '@/data/portfolios';
import { LuArrowRight, LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import { SectionHeading } from '@/components/SectionHeading';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export const Portfolio = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const titleColor = useColorModeValue('purple.500', 'purple.400');
  const cardBg = useColorModeValue('white', 'white/5');
  const borderColor = useColorModeValue('gray.200', 'white/10');
  const textColor = useColorModeValue('gray.600', 'gray.400');
  const hoverBorderColor = useColorModeValue('purple.500', 'purple.400');

  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState<'right' | 'left'>(
    'right'
  );
  const displayedPortfolios = portfolios.slice(0, 4);

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

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideDirection('right');
      setCurrentSlide(prev => (prev + 1) % displayedPortfolios.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [displayedPortfolios.length]);

  const nextSlide = () => {
    setSlideDirection('right');
    setCurrentSlide(prev => (prev + 1) % displayedPortfolios.length);
  };

  const prevSlide = () => {
    setSlideDirection('left');
    setCurrentSlide(
      prev =>
        (prev - 1 + displayedPortfolios.length) % displayedPortfolios.length
    );
  };

  const truncate = (text: string, limit: number) => {
    return text.length > limit ? text.slice(0, limit) + '...' : text;
  };

  const PortfolioCard = ({
    portfolio
  }: {
    portfolio: (typeof portfolios)[0];
  }) => (
    <Box
      bg={cardBg}
      borderRadius="2xl"
      overflow="hidden"
      border="1px solid"
      borderColor={borderColor}
      cursor="pointer"
      transition="all 0.3s ease"
      _hover={{
        borderColor: hoverBorderColor,
        transform: 'translateY(-4px)',
        boxShadow: 'xl'
      }}
      onClick={() => navigate(`/portfolio/${portfolio.slug}`)}>
      <Box h="240px" overflow="hidden" position="relative">
        <Image
          src={portfolio.image}
          alt={portfolio.title}
          w="full"
          h="full"
          objectFit="cover"
          loading="lazy"
          transition="transform 0.5s ease"
          _groupHover={{ transform: 'scale(1.05)' }}
          css={{
            '.chakra-ui-dark &': { opacity: 0.9 }
          }}
        />
      </Box>
      <Box p={6}>
        <Heading size="lg" mb={2} color={titleColor} lineHeight="short">
          {portfolio.title}
        </Heading>
        <Text color={textColor} fontSize="md" lineHeight="relaxed">
          {truncate(portfolio.shortDescription, 120)}
        </Text>
      </Box>
    </Box>
  );

  return (
    <Box
      id="portfolio"
      ref={containerRef}
      as="section"
      py={{ base: 20, md: 32 }}
      position="relative">
      <Container maxW="5xl" px={{ base: 6, md: 12 }}>
        <style>
          {`
            @keyframes slideInRight {
              from { opacity: 0; transform: translateX(20px); }
              to { opacity: 1; transform: translateX(0); }
            }
            @keyframes slideInLeft {
              from { opacity: 0; transform: translateX(-20px); }
              to { opacity: 1; transform: translateX(0); }
            }
          `}
        </style>
        <SectionHeading>featured works.</SectionHeading>

        <Box
          display={{ base: 'block', md: 'none' }}
          position="relative"
          mb={10}
          overflow="hidden"
          px={1}
          py={2}>
          <Box
            position="relative"
            key={currentSlide}
            animation={`${
              slideDirection === 'right' ? 'slideInRight' : 'slideInLeft'
            } 0.4s ease-out`}>
            <PortfolioCard portfolio={displayedPortfolios[currentSlide]} />

            <Flex
              position="absolute"
              top="50%"
              left="0"
              right="0"
              transform="translateY(-50%)"
              justify="space-between"
              px={2}
              pointerEvents="none">
              <IconButton
                aria-label="Previous Project"
                onClick={e => {
                  e.stopPropagation();
                  prevSlide();
                }}
                pointerEvents="auto"
                rounded="full"
                colorPalette="purple"
                variant="solid"
                size="sm"
                opacity={0.8}
                _hover={{ opacity: 1 }}>
                <LuChevronLeft />
              </IconButton>
              <IconButton
                aria-label="Next Project"
                onClick={e => {
                  e.stopPropagation();
                  nextSlide();
                }}
                pointerEvents="auto"
                rounded="full"
                colorPalette="purple"
                variant="solid"
                size="sm"
                opacity={0.8}
                _hover={{ opacity: 1 }}>
                <LuChevronRight />
              </IconButton>
            </Flex>
          </Box>

          <Flex justify="center" gap={2} mt={4}>
            {displayedPortfolios.map((_, idx) => (
              <Box
                key={idx}
                w={idx === currentSlide ? '24px' : '8px'}
                h="8px"
                bg={idx === currentSlide ? 'purple.500' : 'gray.300'}
                borderRadius="full"
                transition="all 0.3s ease"
              />
            ))}
          </Flex>
        </Box>

        <SimpleGrid
          display={{ base: 'none', md: 'grid' }}
          columns={{ base: 1, md: 2 }}
          gap={8}
          mb={10}>
          {displayedPortfolios.map((portfolio, index) => (
            <PortfolioCard key={index} portfolio={portfolio} />
          ))}
        </SimpleGrid>

        <Flex justify="flex-end">
          <ChakraLink
            asChild
            fontWeight="bold"
            fontSize="lg"
            color="purple.500"
            _hover={{ textDecoration: 'none', color: 'purple.400' }}
            display="inline-flex"
            alignItems="center"
            gap={2}>
            <RouterLink to="/portfolio">
              See All Projects <LuArrowRight />
            </RouterLink>
          </ChakraLink>
        </Flex>
      </Container>
    </Box>
  );
};
