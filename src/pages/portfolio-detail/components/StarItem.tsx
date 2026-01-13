import { Box, Heading, Text } from '@chakra-ui/react';

export const StarItem = ({
  title,
  content,
  bg,
  textColor,
  titleColor
}: {
  title: string;
  content: string;
  bg: string;
  textColor: string;
  titleColor: string;
}) => (
  <Box
    p={6}
    borderRadius="xl"
    bg={bg}
    h="full"
    borderWidth="1px"
    borderColor="transparent"
    transition="all 0.3s"
    _hover={{ borderColor: titleColor }}>
    <Heading
      size="md"
      mb={4}
      color={titleColor}
      textTransform="uppercase"
      letterSpacing="widest">
      {title}
    </Heading>
    <Text
      fontSize="md"
      lineHeight="relaxed"
      color={textColor}
      textAlign="justify">
      {content}
    </Text>
  </Box>
);
