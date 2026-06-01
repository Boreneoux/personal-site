import { Heading, type HeadingProps } from '@chakra-ui/react';

interface SectionHeadingProps extends HeadingProps {
  children: React.ReactNode;
}

export const SectionHeading = ({ children, ...props }: SectionHeadingProps) => {
  return (
    <Heading
      size={{ base: '4xl', md: '5xl' }}
      fontWeight="extrabold"
      textAlign="center"
      mb={16}
      bgGradient="to-r"
      gradientFrom="cyan.400"
      gradientVia="purple.400"
      gradientTo="pink.400"
      bgClip="text"
      letterSpacing="tighter"
      {...props}>
      {children}
    </Heading>
  );
};
