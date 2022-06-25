import { Flex } from "@chakra-ui/react";

const SectionContainer = (children: any) => {
  return (
    <Flex p={4} bg="green" height="w-full">
      {children}
    </Flex>
  )
}

export default SectionContainer;