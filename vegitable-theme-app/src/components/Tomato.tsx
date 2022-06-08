import { Link, Text } from "@chakra-ui/react";
import Card from "../shared/Card";

const TomatoComp = () => {
  return (
    <Card bgGradient="linear(to-r, tomato, mashroom)" borderRadious="sm">
      <Text
        as="mark"
        borderRadius={8}
        px={2}
        bgGradient="linear(to-r, mashroom, tomato)"
        color="blue"
        fontSize={32}
      >
        tomato
      </Text>
      <p>
        The tomato is the taproot portion of a beet plant, usually known in
        North America as beets while the vegetable is referred to as tomato in
        British English, and also known as the table beet, garden beet, red
        beet, dinner beet or golden beet.
      </p>
      <Link href="https://en.wikipedia.org/wiki/tomato">Learn more</Link>
    </Card>
  );
};

export default TomatoComp;
