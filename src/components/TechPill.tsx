import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import { useColorModeValue } from '@/components/ui/color-mode';
import { skills } from '@/data/skills';
import {
  SiNextdotjs,
  SiDocker,
  SiVercel,
  SiJest,
  SiCloudinary,
  SiLeaflet,
  SiFastapi,
  SiMysql,
  SiCodeigniter,
  SiBun,
  SiCloudflare
} from 'react-icons/si';
import { FaPhp } from 'react-icons/fa';
import type { ElementType } from 'react';

const extraIcons: Record<string, ElementType> = {
  'Next.js': SiNextdotjs,
  'Docker': SiDocker,
  'Vercel': SiVercel,
  'Jest': SiJest,
  'Cloudinary': SiCloudinary,
  'Leaflet': SiLeaflet,
  'FastAPI': SiFastapi,
  'MySQL': SiMysql,
  'CodeIgniter 4': SiCodeigniter,
  'Bun': SiBun,
  'Cloudflare R2': SiCloudflare,
  'PHP': FaPhp
};

const skillIconMap: Record<string, ElementType> = Object.fromEntries(
  skills.map(s => [s.name, s.icon])
);

const iconMap: Record<string, ElementType> = { ...skillIconMap, ...extraIcons };

export const TechPill = ({ tech }: { tech: string }) => {
  const IconComponent = iconMap[tech];
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100');
  const bg = useColorModeValue('white', 'whiteAlpha.50');
  const textColor = useColorModeValue('gray.700', 'gray.300');

  return (
    <Flex
      align="center"
      gap={2}
      px={3}
      py={2}
      borderRadius="lg"
      border="1px solid"
      borderColor={borderColor}
      bg={bg}
      cursor="default"
      transition="all 0.2s ease"
      role="group"
      _hover={{
        borderColor: 'purple.400',
        transform: 'translateY(-2px)',
        boxShadow: '0 4px 12px rgba(168, 85, 247, 0.15)'
      }}>
      {IconComponent && (
        <Icon
          as={IconComponent}
          boxSize={4}
          color="gray.400"
          filter="grayscale(100%)"
          transition="all 0.2s ease"
          _groupHover={{ color: 'purple.400', filter: 'grayscale(0%)' }}
        />
      )}
      <Text
        fontSize="xs"
        fontWeight="600"
        color={textColor}
        whiteSpace="nowrap"
        letterSpacing="tight">
        {tech}
      </Text>
    </Flex>
  );
};

export const TechPillList = ({
  techStack,
  max
}: {
  techStack: string[];
  max?: number;
}) => {
  const visible = max ? techStack.slice(0, max) : techStack;
  const overflow = max ? techStack.length - max : 0;
  const textColor = useColorModeValue('gray.500', 'gray.400');

  return (
    <Flex flexWrap="wrap" gap={2} align="center">
      {visible.map((tech, i) => (
        <TechPill key={i} tech={tech} />
      ))}
      {overflow > 0 && (
        <Box
          px={3}
          py={2}
          borderRadius="lg"
          border="1px dashed"
          borderColor="gray.300"
          cursor="default">
          <Text fontSize="xs" fontWeight="600" color={textColor}>
            +{overflow} more
          </Text>
        </Box>
      )}
    </Flex>
  );
};
