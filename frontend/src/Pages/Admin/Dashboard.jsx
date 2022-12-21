import { Flex, Box, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../../Components/CartProductCard/Loading";
import { GetLocal } from "../../Utils/localstorage";
export default function Dashboard() {

  const [data, setData] = useState(0);
  const [user, setUser] = useState(0);
  const [product, setProduct] = useState(0);
  const [auth, setAuth] = useState(true);
  const Token = GetLocal("auth");
  const get_data = async () => {
    
    await axios
      .get("https://pleasant-foal-cloak.cyclic.app/users/count", {
        headers: {
          token: `Bearer ${Token}`,
        },
      })
      .then((res) => setUser(res.data))
      .catch((err) => window.alert("Something Went wrong"));


    await axios
      .get("https://pleasant-foal-cloak.cyclic.app/products/count", {
        headers: {
          token: `Bearer ${Token}`,
        },
      })
      .then((res) => setData(res.data))
      .catch((err) => window.alert("Something Went wrong"));
    
    
    await axios
      .get("https://pleasant-foal-cloak.cyclic.app/products/count", {
        headers: {
          token: `Bearer ${Token}`,
        },
      })
      .then((res) => setProduct(res.data))
      .catch((err) => window.alert("Something Went wrong"));
    
    setAuth(false);
  }
  useEffect(() => {
  get_data()
},[auth])

  return (
    <div>
      {auth ? (
        <Loading />
      ) : (
        <Flex justifyContent="space-around" flexWrap="wrap">
          <Box
            w="20%"
            textAlign="center"
            border="1px solid black"
            bgColor="blue.300"
          >
            <Flex justifyContent="center">
              {" "}
              <Image
                src="/user_logo.png"
                w={["60%", "60%", "100%", "100%"]}
              />{" "}
            </Flex>
            <Text mt="15px" fontSize={["10px", "10px", "14px", "24px"]}>
              {user} Users Active
            </Text>
          </Box>
          <Box
            w="20%"
            textAlign="center"
            border="1px solid black"
            bgColor="blue.300"
          >
            <Flex justifyContent="center">
              <Image
                src="/product_logo.png"
                w={["60%", "60%", "100%", "100%"]}
              />
            </Flex>
            <Text mt="15px" fontSize={["10px", "10px", "14px", "24px"]}>
              {data} Total Products
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
              <Image
                src="/product_logo.png"
                w={["60%", "60%", "100%", "100%"]}
              />{" "}
            </Flex>
            <Text
              color="green"
              mt="15px"
              fontSize={["10px", "10px", "14px", "24px"]}
            >
              {product} Products In Our Stock
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
              <Image
                src="/product_logo.png"
                w={["60%", "60%", "100%", "100%"]}
              />{" "}
            </Flex>
            <Text
              color="red"
              mt="15px"
              fontSize={["10px", "10px", "14px", "24px"]}
            >
              {data - product} Products Out of Stock
            </Text>
          </Box>
        </Flex>
      )}
    </div>
  );
}
