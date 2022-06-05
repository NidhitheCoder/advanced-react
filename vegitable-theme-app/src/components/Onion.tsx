import { Text } from "@chakra-ui/react";
import Card from "../shared/Card";

const OnionComp = () => {
  return (
    <Card bgGradient='linear(to-r, onion, mashroom)' borderRadious='sm'>
      <Text as="mark" px={2} bgGradient='linear(to-r, mashroom, onion)' color="red" fontSize={32} >Onion</Text>
      <p>
        The onion, also known as the bulb onion or common onion, is a vegetable
        that is the most widely cultivated species of the genus Allium. The
        shallot is a botanical variety of the onion which was classified as a
        separate species until 2010. Its close relatives include garlic,
        scallion, leek, and chive.
      </p>
    </Card>
  );
};

export default OnionComp;
