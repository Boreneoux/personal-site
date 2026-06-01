import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Box, Container } from '@chakra-ui/react';
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const PortfolioLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Navbar simple />
      <Container maxW="5xl" py={12} flex="1">
        <Box as="main">
          <Outlet />
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default PortfolioLayout;
