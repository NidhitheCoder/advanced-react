import { Flex, Grid, Text } from "@chakra-ui/react";
import ItemCard from "../components/ItemCard";
import { cardItems } from "../config/constants/constant";

const Listpage = () => {
  return (
    <Flex alignItems="center" direction="column">
      <Text fontSize="md" p={8}>Vegitables</Text>
      <Grid templateColumns="repeat(4, 1fr)" gap={6} p={8}>
        {cardItems?.map((item) => {
          return (
            <ItemCard
              title={item.name}
              subtitle={item.description}
              link={item.url}
            />
          );
        })}
      </Grid>
    </Flex>
  );
};

export default Listpage;
