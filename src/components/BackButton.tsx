import { Link as ChakraLink } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { LuArrowLeft } from 'react-icons/lu';

interface BackButtonProps {
  to: string;
  label?: string;
  mb?: number | object;
}

export const BackButton = ({ to, label = 'Back', mb = 6 }: BackButtonProps) => {
  return (
    <ChakraLink
      asChild
      display={{ base: 'none', md: 'inline-flex' }}
      alignItems="center"
      gap={2}
      color="purple.500"
      fontWeight="bold"
      fontSize="sm"
      transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
      px={4}
      py={2}
      borderRadius="full"
      border="1px solid"
      borderColor="purple.500/30"
      bg="purple.500/5"
      _hover={{
        textDecoration: 'none',
        color: 'white',
        bg: 'purple.500',
        borderColor: 'purple.500',
        transform: 'translateX(-4px)',
        boxShadow: '0 4px 12px rgba(128, 90, 213, 0.3)'
      }}
      mb={mb}>
      <RouterLink to={to}>
        <LuArrowLeft /> {label}
      </RouterLink>
    </ChakraLink>
  );
};
