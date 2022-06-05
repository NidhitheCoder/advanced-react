import { Flex } from "@chakra-ui/react";
import OnionComp from "../components/Onion";
import Card from "../shared/Card";


const Homepage = () => {
  return (
    <Flex bg="cucumbar" p={8} h="full" w="full" alignItems="center" justifyContent="space-around">
      <OnionComp />
      <Card>two</Card>
      <Card>three</Card>
      <Card>four</Card>
    </Flex>
  )
}

export default Homepage;