import { Box } from '@chakra-ui/react';

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

export const SocialLink = ({ href, icon, label }: SocialLinkProps) => {
  return (
    <Box
      asChild
      color="fg.muted"
      transition="all 0.3s ease"
      _hover={{ color: 'purple.500', transform: 'translateY(-3px)' }}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}>
        {icon}
      </a>
    </Box>
  );
};
