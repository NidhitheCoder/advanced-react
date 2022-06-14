import { Flex } from "@chakra-ui/react";
import ItemCard from "../components/ItemCard";
import { cardItems } from "../config/constants/constant";

const Listpage = () => {
  return (
    <Flex justifyContent="center" gap={4} alignItems="center">
      {cardItems?.map((item) => {
        return (
          <ItemCard
            title={item.name}
            subtitle={item.description}
            link={item.url}
          />
        );
      })}
    </Flex>
  );
};

export default Listpage;
