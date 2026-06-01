import { Box, Flex, Text, Image, Card, VStack } from '@chakra-ui/react';
import { useColorModeValue } from '@/components/ui/color-mode';
import { testimonials } from '@/data/testimonials';
import { SectionHeading } from '@/components/SectionHeading';

export const Testimonials = () => {
  const cardBg = useColorModeValue('white', 'white/5');
  const borderColor = useColorModeValue('gray.100', 'white/10');
  const textColor = useColorModeValue('gray.600', 'gray.400');
  const nameColor = useColorModeValue('gray.800', 'white');

  const MarqueeRow = ({
    items,
    direction = 'normal',
    duration = '40s'
  }: {
    items: typeof testimonials;
    direction?: 'normal' | 'reverse';
    duration?: string;
  }) => (
    <Box
      position="relative"
      w="full"
      overflow="hidden"
      _before={{
        content: '""',
        position: 'absolute',
        left: 0,
        top: 0,
        w: '100px',
        h: '100%',
        bgGradient: 'to-r',
        gradientFrom: useColorModeValue('white', 'gray.900'),
        gradientTo: 'transparent',
        zIndex: 2,
        pointerEvents: 'none'
      }}
      _after={{
        content: '""',
        position: 'absolute',
        right: 0,
        top: 0,
        w: '100px',
        h: '100%',
        bgGradient: 'to-l',
        gradientFrom: useColorModeValue('white', 'gray.900'),
        gradientTo: 'transparent',
        zIndex: 2,
        pointerEvents: 'none'
      }}>
      <Flex
        gap={6}
        w="max-content"
        animation={`marquee-scroll ${duration} linear infinite ${direction}`}
        _hover={{ animationPlayState: 'paused' }}
        px={3}>
        {[...items, ...items, ...items].map((t, i) => (
          <Card.Root
            key={i}
            w={{ base: '300px', md: '400px' }}
            flexShrink={0}
            bg={cardBg}
            borderRadius="xl"
            border="1px solid"
            borderColor={borderColor}
            boxShadow="sm">
            <Card.Body gap={4} p={6}>
              <Flex align="center" gap={4}>
                <Image
                  src={t.image}
                  alt={t.name}
                  boxSize="50px"
                  borderRadius="full"
                  objectFit="cover"
                  loading="lazy"
                />
                <Text fontWeight="bold" fontSize="lg" color={nameColor}>
                  {t.name}
                </Text>
              </Flex>
              <Text
                color={textColor}
                fontSize="md"
                fontStyle="italic"
                lineHeight="relaxed">
                "{t.quote}"
              </Text>
            </Card.Body>
          </Card.Root>
        ))}
      </Flex>
    </Box>
  );

  return (
    <Box as="section" py={{ base: 10, md: 16 }} overflow="hidden">
      <SectionHeading mb={12}>what they say.</SectionHeading>
      <VStack gap={8}>
        <MarqueeRow items={testimonials} duration="50s" />
        <MarqueeRow
          items={[...testimonials].reverse()}
          direction="reverse"
          duration="60s"
        />
      </VStack>
    </Box>
  );
};
