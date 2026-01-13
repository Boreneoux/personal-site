import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Box } from '@chakra-ui/react';
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const MainLayout = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [hash]);

  return (
    <Box minH="100vh">
      <Navbar />
      <Box as="main">
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default MainLayout;
