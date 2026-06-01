import { useRef } from 'react';
import {
  Box,
  Heading,
  Text,
  Image,
  VStack,
  HStack,
  Badge,
  SimpleGrid,
  Separator
} from '@chakra-ui/react';
import { useParams, Navigate } from 'react-router-dom';
import { portfolios } from '@/data/portfolios';
import { useColorModeValue } from '@/components/ui/color-mode';
import { BackButton } from '@/components/BackButton';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { StarItem } from './components/StarItem';

export default function PortfolioDetail() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { slug } = useParams();
  const portfolio = portfolios.find(p => p.slug === slug);

  const titleColor = useColorModeValue('purple.500', 'purple.400');
  const sectionTitleColor = useColorModeValue('gray.800', 'white');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const starBg = useColorModeValue('gray.50', 'white/5');

  useGSAP(
    () => {
      gsap.from(containerRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out'
      });
    },
    { scope: containerRef }
  );

  if (!portfolio) {
    return <Navigate to="/portfolio" replace />;
  }

  return (
    <Box ref={containerRef}>
      <VStack gap={8} align="start" w="full">
        <VStack align="start" gap={3} w="full">
          <BackButton to="/portfolio" />
          <Heading as="h1" size="3xl" color={titleColor} fontWeight="bold">
            {portfolio.title}
          </Heading>
          <HStack gap={2} flexWrap="wrap">
            {portfolio.techStack.map((tech, index) => (
              <Badge key={index} colorPalette="purple" variant="surface">
                {tech}
              </Badge>
            ))}
          </HStack>
        </VStack>

        <Image
          src={portfolio.image}
          alt={portfolio.title}
          borderRadius="2xl"
          w="full"
          maxH="500px"
          objectFit="cover"
          boxShadow="2xl"
        />

        <Box w="full">
          <Heading size="xl" mb={4} color={sectionTitleColor}>
            About the Project
          </Heading>
          <Text
            fontSize="lg"
            lineHeight="relaxed"
            color={textColor}
            textAlign="justify">
            {portfolio.shortDescription}
          </Text>
        </Box>

        <Separator />

        <Box w="full">
          <Heading size="xl" mb={8} color={sectionTitleColor}>
            Project Journey (S.T.A.R)
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
            <StarItem
              title="Situation"
              content={portfolio.star.situation}
              bg={starBg}
              textColor={textColor}
              titleColor={titleColor}
            />
            <StarItem
              title="Task"
              content={portfolio.star.task}
              bg={starBg}
              textColor={textColor}
              titleColor={titleColor}
            />
            <StarItem
              title="Action"
              content={portfolio.star.action}
              bg={starBg}
              textColor={textColor}
              titleColor={titleColor}
            />
            <StarItem
              title="Result"
              content={portfolio.star.result}
              bg={starBg}
              textColor={textColor}
              titleColor={titleColor}
            />
          </SimpleGrid>
        </Box>
      </VStack>
    </Box>
  );
}
