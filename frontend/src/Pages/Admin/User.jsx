import { Box, Text, Flex, Button } from "@chakra-ui/react";

export default function User({ name, email, id }) {
  const userDelete = () => {};

  return (
    <div>
      <Box border="1px solid black" p="10px" textAlign="center" color="white">
        <Text mt="8px">Name: {name}</Text>
        <Text mt="8px">Email: {email}</Text>
        <Button mt="8px" colorScheme="red" onClick={userDelete}>
          Delete
        </Button>
      </Box>
    </div>
  );
}
