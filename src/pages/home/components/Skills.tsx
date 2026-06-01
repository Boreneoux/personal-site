import { Box, Container, Flex, Text, Icon } from '@chakra-ui/react';
import { useColorModeValue } from '@/components/ui/color-mode';
import { SectionHeading } from '@/components/SectionHeading';
import { skills } from '@/data/skills';

export const Skills = () => {
  const bgColor = useColorModeValue('gray.50', 'bg.canvas');
  const iconColor = useColorModeValue('gray.400', 'whiteAlpha.400');
  const textColor = useColorModeValue('gray.600', 'gray.400');

  return (
    <Box
      id="skills"
      as="section"
      bg={bgColor}
      py={{ base: 12, md: 20 }}
      overflow="hidden">
      <Container maxW="7xl" px={{ base: 6, md: 12 }}>
        <SectionHeading>skills stack.</SectionHeading>

        <Box
          position="relative"
          w="full"
          maxW="100%"
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
              animation: 'marquee-scroll 40s linear infinite',
              paddingTop: '1rem',
              paddingBottom: '1rem',
              '&:hover': {
                animationPlayState: 'paused'
              }
            }}>
            {[...skills, ...skills].map((skill, index) => (
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
                  boxSize={{ base: 8, md: 10 }}
                  color={iconColor}
                  filter="grayscale(100%)"
                  transition="all 0.3s ease"
                />
                <Text
                  fontSize={{ base: 'md', md: 'xl' }}
                  fontWeight="bold"
                  color={textColor}
                  transition="color 0.3s">
                  {skill.name}
                </Text>
              </Flex>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
