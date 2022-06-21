import { Flex, Link, Text } from '@chakra-ui/react';
import Card from '../shared/Card';

type Items = {
  title: string;
  subtitle: string;
  link: string;
};

const NavigateItem = ({ title, subtitle, link }: Items) => {
  return (
    <Flex
      direction="column"
      bgGradient={`linear(to-r, ${title}, mashroom)}`}
      p={2}
      textOverflow="ellipsis"
    >
      <Text
        as="mark"
        borderRadius={8}
        textTransform="capitalize"
        p={2}
        bgClip="text"
        color="blue"
        fontSize={32}
        mb={4}
      >
        {title}
      </Text>
    </Flex>
  );
};

export default NavigateItem;
