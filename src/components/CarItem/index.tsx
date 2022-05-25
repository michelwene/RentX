import {
  Box,
  Flex,
  GridItem,
  Heading,
  HStack,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";

type CarTypes = {
  title: string;
  price: number;
  name: string;
  image: string;
  id?: number;
};

interface CarItemProps {
  car: CarTypes;
  onClick?: () => void;
}

export function CarItem({ car, onClick }: CarItemProps) {
  return (
    <GridItem
      bg="white"
      boxShadow="md"
      cursor="pointer"
      display="flex"
      flexDirection="column"
    >
      <Image src={car.image} alt={car.name} />
      <HStack spacing={16}>
        <Flex gap={8}>
          <Box>
            <Text>{car.title}</Text>
            <Heading as="h2" fontSize={18} fontWeight={500}>
              {car.name}
            </Heading>
          </Box>
          <Box>
            <Text>Ao dia</Text>
            <Text>{car.price}</Text>
          </Box>
        </Flex>
        <Icon />
      </HStack>
    </GridItem>
  );
}
