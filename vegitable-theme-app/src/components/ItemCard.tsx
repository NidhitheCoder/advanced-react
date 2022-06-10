import { Link, Text } from "@chakra-ui/react";
import Card from "../shared/Card";

type Items = {
  title: string;
  subtitle: string;
  link: string;
};

const ItemCard = ({ title, subtitle, link }: Items) => {
  return (
    <Card bgGradient={`linear(to-r, ${title}, mashroom)}`} borderRadious="sm">
      <Text
        as="mark"
        borderRadius={8}
        px={2}
        bgGradient={`linear(to-r, mashroom, ${title})`}
        color="blue"
        fontSize={32}
      >
        {title}
      </Text>
      <p>{subtitle}</p>
      <Link href={link}>Learn more</Link>
    </Card>
  );
};

export default ItemCard;
