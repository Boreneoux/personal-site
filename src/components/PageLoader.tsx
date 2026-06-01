import { Center, Spinner } from '@chakra-ui/react';

export const PageLoader = () => {
  return (
    <Center minH="100vh">
      <Spinner size="xl" color="purple.500" borderWidth="4px" />
    </Center>
  );
};
