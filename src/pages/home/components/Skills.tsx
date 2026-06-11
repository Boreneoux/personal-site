import { Box, Container, Flex, Text, Icon } from '@chakra-ui/react';
import { useColorModeValue } from '@/components/ui/color-mode';
import { SectionHeading } from '@/components/SectionHeading';
import { skills } from '@/data/skills';

const MarqueeRow = ({
  items,
  reverse = false
}: {
  items: typeof skills;
  reverse?: boolean;
}) => {
  const iconColor = useColorModeValue('gray.400', 'whiteAlpha.400');
  const textColor = useColorModeValue('gray.600', 'gray.400');

  return (
    <Box
      position="relative"
      w="full"
      overflow="hidden"
      css={{
        maskImage:
          'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage:
          'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
      }}>
      <Box
        display="flex"
        gap="2.5rem"
        css={{
          width: 'max-content',
          animation: `${reverse ? 'marquee-scroll-reverse' : 'marquee-scroll'} 50s linear infinite`,
          paddingTop: '0.75rem',
          paddingBottom: '0.75rem',
          '&:hover': {
            animationPlayState: 'paused'
          }
        }}>
        {[...items, ...items].map((skill, index) => (
          <Flex
            key={index}
            align="center"
            gap={3}
            flexShrink={0}
            role="group"
            cursor="default"
            transition="transform 0.3s"
            _hover={{ transform: 'scale(1.1)' }}>
            <Icon
              as={skill.icon}
              boxSize={{ base: 7, md: 9 }}
              color={iconColor}
              filter="grayscale(100%)"
              transition="all 0.3s ease"
              _groupHover={{ filter: 'grayscale(0%)', color: 'purple.400' }}
            />
            <Text
              fontSize={{ base: 'sm', md: 'lg' }}
              fontWeight="bold"
              color={textColor}
              transition="color 0.3s">
              {skill.name}
            </Text>
          </Flex>
        ))}
      </Box>
    </Box>
  );
};

export const Skills = () => {
  const bgColor = useColorModeValue('gray.50', 'bg.canvas');

  const row1 = skills.slice(0, Math.ceil(skills.length / 2));
  const row2 = skills.slice(Math.ceil(skills.length / 2));

  return (
    <Box
      id="skills"
      as="section"
      bg={bgColor}
      py={{ base: 12, md: 20 }}
      overflow="hidden">
      <Container maxW="7xl" px={{ base: 6, md: 12 }}>
        <SectionHeading>skills stack.</SectionHeading>
        <Flex direction="column" gap={4}>
          <MarqueeRow items={row1} />
          <MarqueeRow items={row2} reverse />
        </Flex>
      </Container>
    </Box>
  );
};
