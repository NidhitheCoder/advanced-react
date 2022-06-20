import { SearchIcon } from '@chakra-ui/icons';
import { Flex, List, ListItem, Text } from '@chakra-ui/react';

const Navbar = () => {
    return (
        <Flex justifyContent="space-between" w="full" bg="orange">
            <List
                display="flex"
                flexDirection="row"
                listStyleType="none"
                alignItems="center"
            >
                <ListItem px={4}>
                    <Text fontSize="xl" fontWeight="bold">
                        Company Name
                    </Text>
                </ListItem>
                <ListItem px={4}>insights</ListItem>
                <ListItem px={4}>Services</ListItem>
                <ListItem px={4}>industries</ListItem>
            </List>
            <Flex justifyContent="center" alignItems="center">
                <Flex
                    p={4}
                    borderRight={1}
                    borderRightColor="gray"
                    borderRightStyle="solid"
                    borderBottom={4}
                    borderBottomColor="transparent"
                    borderBottomStyle="solid"
                    _hover={{ borderBottom: '4px solid blue' }}
                >
                    <SearchIcon fontWeight="400" />
                </Flex>
                <Flex
                    p={4}
                    borderRight={1}
                    borderRightColor="gray"
                    borderRightStyle="solid"
                    borderBottom={4}
                    borderBottomColor="transparent"
                    borderBottomStyle="solid"
                    _hover={{ borderBottom: '4px solid blue' }}
                >
                    <Text fontSize="xs">SIGN IN</Text>
                </Flex>
                <Flex
                    p={4}
                    borderBottom={4}
                    borderBottomColor="transparent"
                    borderBottomStyle="solid"
                    _hover={{ borderBottom: '4px solid blue' }}
                >
                    <Text>Flag</Text>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Navbar;
