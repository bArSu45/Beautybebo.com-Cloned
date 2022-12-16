import { Flex, Box, Image, Text } from "@chakra-ui/react";

export default function Dashboard() {
  return (
    <div>
      <Flex justifyContent="space-around" flexWrap="wrap">
        <Box
          w="20%"
          textAlign="center"
          border="1px solid black"
          bgColor="blue.300"
        >
          <Flex justifyContent="center">
            {" "}
            <Image src="/user_logo.png" />{" "}
          </Flex>
          <Text mt="15px">100 Users Active</Text>
        </Box>
        <Box
          w="20%"
          textAlign="center"
          border="1px solid black"
          bgColor="blue.300"
        >
          <Flex justifyContent="center">
            <Image src="/product_logo.png" />
          </Flex>
          <Text mt="15px">200 Total Products</Text>
        </Box>
        <Box
          w="20%"
          textAlign="center"
          border="1px solid black"
          bgColor="blue.300"
        >
          <Flex justifyContent="center">
            {" "}
            <Image src="/product_logo.png" />{" "}
          </Flex>
          <Text color="green" mt="15px">
            100 Products In Our Stock
          </Text>
        </Box>
        <Box
          w="20%"
          textAlign="center"
          border="1px solid black"
          bgColor="blue.300"
        >
          <Flex justifyContent="center">
            {" "}
            <Image src="/product_logo.png" />{" "}
          </Flex>
          <Text color="red" mt="15px">
            100 Products Out of Stock
          </Text>
        </Box>
      </Flex>
    </div>
  );
}
