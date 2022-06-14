import { Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";


const Homepage = () => {
  return (
    <Flex bg="cucumbar" p={8} h="full" w="full" alignItems="center" justifyContent="space-around" flexWrap="wrap">
     <Link to="/list">ListPage</Link>
    </Flex>
  )
}

export default Homepage;