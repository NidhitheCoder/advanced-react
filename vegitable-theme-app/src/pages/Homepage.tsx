import { Flex } from "@chakra-ui/react";
import ItemCard from "../components/ItemCard";
import { cardItems } from "../config/constants/constant";


const Homepage = () => {
  return (
    <Flex bg="cucumbar" p={8} h="full" w="full" alignItems="center" justifyContent="space-around" flexWrap="wrap">
      {cardItems?.map((item) => {
        return <ItemCard  title={item.name} subtitle={item.description} link={item.url}/>
      })}
    </Flex>
  )
}

export default Homepage;