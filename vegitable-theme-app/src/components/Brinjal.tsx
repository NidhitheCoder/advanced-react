import { Link, Text } from "@chakra-ui/react";
import Card from "../shared/Card";

const BrinjalComp = () => {
  return (
    <Card bgGradient="linear(to-r, brinjal, mashroom)" borderRadious="sm">
      <Text
        as="mark"
        borderRadius={8}
        px={2}
        // bgGradient="linear(to-r, mashroom, brinjal)"
        color="blue"
        fontSize={32}
      >
        Brinjal
      </Text>
      <p>
        The Brinjal is the taproot portion of a beet plant, usually known in
        North America as beets while the vegetable is referred to as Brinjal in
        British English, and also known as the table beet, garden beet, red
        beet, dinner beet or golden beet.
      </p>
      <Link href="https://en.wikipedia.org/wiki/Brinjal">Learn more</Link>
    </Card>
  );
};

export default BrinjalComp;
