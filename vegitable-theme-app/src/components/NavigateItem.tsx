import { Flex, Link, Progress, Text } from '@chakra-ui/react';
import Card from '../shared/Card';

type Items = {
  title: string;
  progress: number;
};

const NavigateItem = ({ title, progress }: Items) => {
  return (
    <Flex
      direction="row"
      justifyContent="center"
      alignItems="center"
      bgGradient={`linear(to-r, ${title}, mashroom)}`}
      p={2}
      minW="300px"
      textOverflow="ellipsis"
    >
      <Flex bg="green" height="full" w={progress}>
        <Text
          as="mark"
          borderRadius={8}
          textTransform="capitalize"
          p={2}
          bgClip="text"
          color="blue"
          fontSize={14}
          mb={4}
        >
          {title}
        </Text>
      </Flex>
    </Flex>
  );
};

export default NavigateItem;
