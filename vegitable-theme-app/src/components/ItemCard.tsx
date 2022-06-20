import { Flex, Link, Text } from '@chakra-ui/react';
import Card from '../shared/Card';

type Items = {
    title: string;
    subtitle: string;
    link: string;
};

const ItemCard = ({ title, subtitle, link }: Items) => {
    return (
        <Card
            bgGradient={`linear(to-r, ${title}, mashroom)}`}
            borderRadious="sm"
            display="flex"
            justifyContent="space-between"
            textAlign="center"
            boxShadow="md"
        >
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
                    // bgGradient={`linear(to-r, mashroom, mashroom, ${title})`}
                    color="blue"
                    fontSize={32}
                    mb={4}
                >
                    {title}
                </Text>
                <p>{subtitle}</p>
            </Flex>
            <Link
                bgGradient={`linear(to-r, mashroom, ${title})`}
                mt={2}
                w="full"
                borderRadius="sm"
                py={2}
                href={link}
                color="white"
            >
                Learn more
            </Link>
        </Card>
    );
};

export default ItemCard;
