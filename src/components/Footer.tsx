import { Box, Container, Text } from '@chakra-ui/react';
import { useColorModeValue } from '@/components/ui/color-mode';

export const Footer = () => {
  const borderColor = useColorModeValue('purple.500', 'white');
  const textColor = useColorModeValue('gray.600', 'gray.400');
  const year = new Date().getFullYear();

  return (
    <Box as="footer" py={8}>
      <Container maxW="7xl">
        <Box borderTop="1px solid" borderColor={borderColor} mb={8} />
        <Text textAlign="center" fontSize="sm" color={textColor}>
          &copy; {year} Boreneoux. All Rights Reserved.
        </Text>
      </Container>
    </Box>
  );
};
