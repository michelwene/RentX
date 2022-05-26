import { Box, Flex, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import { ReactElement } from "react";

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
  icon: ReactElement;
}

export function CarItem({ car, icon, onClick }: CarItemProps) {
  return (
    <GridItem
      bg="white"
      boxShadow="md"
      cursor="pointer"
      display="flex"
      flexDirection="column"
      onClick={onClick}
      justifyContent="space-between"
    >
      <Image src={car.image} alt={car.name} p={8} />
      <Flex
        justifyContent="space-between"
        px={6}
        py={3}
        borderTop="1px"
        borderColor="gray.100"
      >
        <Flex gap={8}>
          <Box>
            <Text color="#AEAEB3">{car.title}</Text>
            <Heading as="h2" fontSize={18} fontWeight={500}>
              {car.name}
            </Heading>
          </Box>
          <Box>
            <Text color="#AEAEB3">Ao dia</Text>
            <Text color="red" fontWeight={600}>
              {car.price}
            </Text>
          </Box>
        </Flex>
        <Flex align="center">{icon}</Flex>
      </Flex>
    </GridItem>
  );
}
