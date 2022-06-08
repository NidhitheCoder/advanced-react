import { Link, Text } from "@chakra-ui/react";
import Card from "../shared/Card";

const OnionComp = () => {
  return (
    <Card bgGradient="linear(to-r, onion, mashroom)" borderRadious="sm">
      <Text
        as="mark"
        borderRadius={8}
        px={2}
        bgGradient="linear(to-r, mashroom, onion)"
        color="blue"
        fontSize={32}
      >
        Onion
      </Text>
      <p>
        Eggplant, aubergine or brinjal is a plant species in the nightshade
        family Solanaceae. Solanum melongena is grown worldwide for its edible
        fruit. Most commonly purple, the spongy, absorbent fruit is used in
        several cuisines. Typically used as a vegetable in cooking, it is a
        berry by botanical definition.
      </p>
      <Link href="https://en.wikipedia.org/wiki/Onion">Learn more</Link>
    </Card>
  );
};

export default OnionComp;
