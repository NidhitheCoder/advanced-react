import { Link, Text } from "@chakra-ui/react";
import Card from "../shared/Card";

const BeetrootComp = () => {
  return (
    <Card bgGradient="linear(to-r, beetroot, mashroom)" borderRadious="sm">
      <Text
        as="mark"
        borderRadius={8}
        px={2}
        // bgGradient="linear(to-r, mashroom, beetroot)"
        color="blue"
        fontSize={32}
      >
        beetroot
      </Text>
      <p>
        The beetroot is the taproot portion of a beet plant, usually known in
        North America as beets while the vegetable is referred to as beetroot in
        British English, and also known as the table beet, garden beet, red
        beet, dinner beet or golden beet.
      </p>
      <Link href="https://en.wikipedia.org/wiki/Beetroot">Learn more</Link>
    </Card>
  );
};

export default BeetrootComp;
