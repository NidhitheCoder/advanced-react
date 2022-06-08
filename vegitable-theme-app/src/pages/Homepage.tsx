import { Flex } from "@chakra-ui/react";
import BeetrootComp from "../components/Beetroot";
import BrinjalComp from "../components/Brinjal";
import OnionComp from "../components/Onion";
import TomatoComp from "../components/Tomato";


const Homepage = () => {
  return (
    <Flex bg="cucumbar" p={8} h="full" w="full" alignItems="center" justifyContent="space-around">
      <OnionComp />
      <BeetrootComp />
      <BrinjalComp />
      <TomatoComp />
    </Flex>
  )
}

export default Homepage;