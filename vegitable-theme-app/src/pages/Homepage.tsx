import { Flex } from "@chakra-ui/react";
import BeetrootComp from "../components/Beetroot";
import BrinjalComp from "../components/Brinjal";
import ItemCard from "../components/ItemCard";
import OnionComp from "../components/Onion";
import TomatoComp from "../components/Tomato";
import { cardItems } from "../config/constants/constant";


const Homepage = () => {
  return (
    <Flex bg="cucumbar" p={8} h="full" w="full" alignItems="center" justifyContent="space-around">
      {cardItems?.map((item) => {
        return <ItemCard  title={item.name} subtitle={item.description} link={item.url}/>
      })}
      <OnionComp />
      <BeetrootComp />
      <BrinjalComp />
      <TomatoComp />
    </Flex>
  )
}

export default Homepage;