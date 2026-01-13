import { Box, Flex, HStack, Link as ChakraLink } from '@chakra-ui/react';
import { NavLink as RouterLink } from 'react-router-dom';
import { ColorModeButton } from './ui/color-mode';

const NavLink = ({
  to,
  children,
  isBrand = false
}: {
  to: string;
  children: React.ReactNode;
  isBrand?: boolean;
}) => (
  <ChakraLink
    asChild
    fontWeight={'600'}
    textDecoration="none"
    color={isBrand ? 'purple.500' : 'fg.muted'}
    _hover={{
      textDecoration: 'none',
      color: 'purple.400',
      transform: isBrand ? 'scale(1.05)' : 'translateY(-1px)'
    }}
    transition="all 0.2s"
    fontSize={isBrand ? 'xl' : 'sm'}
    letterSpacing={isBrand ? 'tight' : 'normal'}>
    <RouterLink
      to={to}
      style={({ isActive }) => ({
        color:
          isActive && !isBrand ? 'var(--chakra-colors-purple-500)' : undefined,
        fontWeight: isActive && !isBrand ? '700' : undefined
      })}>
      {children}
    </RouterLink>
  </ChakraLink>
);

export const Navbar = ({ simple = false }: { simple?: boolean }) => {
  return (
    <Box
      as="nav"
      py={{ base: 3, md: 5 }}
      px={{ base: 5, md: 10 }}
      position="sticky"
      top={0}
      zIndex="sticky"
      bg="bg.canvas/80"
      backdropFilter="blur(16px)"
      borderBottom="1px solid"
      borderColor="border.muted">
      <Flex justify="space-between" align="center" maxW="7xl" mx="auto">
        <Box display={{ base: 'block', md: simple ? 'block' : 'none' }}>
          <NavLink to="/" isBrand>
            Boreneoux
          </NavLink>
        </Box>

        {!simple && (
          <HStack
            gap={10}
            display={{ base: 'none', md: 'flex' }}
            flex="1"
            justify="center">
            <NavLink to="/#experience">Journey</NavLink>
            <NavLink to="/#portfolio">Portfolio</NavLink>
            <NavLink to="/" isBrand>
              Boreneoux
            </NavLink>
            <NavLink to="/#skills">Skills</NavLink>
            <NavLink to="/#contact">Contact</NavLink>
          </HStack>
        )}

        <HStack
          display={{ base: 'flex', md: simple ? 'flex' : 'none' }}
          gap={5}>
          {!simple && <NavLink to="/portfolio">Work</NavLink>}
          <ColorModeButton />
        </HStack>

        {!simple && (
          <Box display={{ base: 'none', md: 'block' }}>
            <ColorModeButton />
          </Box>
        )}
      </Flex>
    </Box>
  );
};
