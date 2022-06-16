import { Flex, List, ListItem, Text } from "@chakra-ui/react";
import Card from "../shared/Card";

const Navbar = () => {
  return (
    <Flex justifyContent="space-between" w="full" bg="white" py={6}>
      <List display="flex" flexDirection="row" listStyleType="none">
        <ListItem px={4}>Name</ListItem>
        <ListItem px={4}>insights</ListItem>
        <ListItem px={4}>Services</ListItem>
        <ListItem px={4}>industries</ListItem>
      </List>
      <Flex>
        <Text>Search</Text>
        <Text>SIGN IN</Text>
        <Text>Flag</Text>
      </Flex>
    </Flex>
  );
};

export default Navbar;
