import { Heading, Text, Box, Flex, Radio } from "@chakra-ui/react";

import React, { useState } from "react";
import InputComponent from "../../Components/InputComponent";
import styles from "./Checkout.module.css";
import { initialState, InputArray, inputs } from "../../Utils/localData";
import ButtonComponent from "../../Components/ButtonComponent";

export default function Checkout() {
  const [data, setData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <div className={styles.Checkout}>
      <div>
        <Heading mt="15px" fontSize="25px">
          Shipping Address
        </Heading>
        <div>
          <div>
            <form>
              {InputArray.map((input, index) => (
                <Box mt="10px" key={index}>
                  <Flex gap="7px" ml="2px">
                    <Text>{inputs[index]}</Text>
                    <Text color="red">*</Text>
                  </Flex>

                  <InputComponent
                    width="60%"
                    placeholder={`Enter Your ${inputs[index]}`}
                    type="text"
                    name={input}
                    value={data.input}
                    handleFunction={handleChange}
                  />
                </Box>
              ))}
            </form>
          </div>
        </div>
        <Heading mt="45px" ml="3px" fontSize="20px">
          Delivery Charges
        </Heading>
        <hr className={styles.line} />
        <Flex justifyContent="space-between" alignItem="center">
          <Flex justifyContent="center" alignItem="center">
            <Radio colorScheme="pink" defaultChecked value="1"></Radio>
            <Text mt="18px" ml="10px">
              Max 7 Business days
            </Text>
          </Flex>

          <ButtonComponent
            Title="Next"
            buttonColor={"pink"}
            txtColor={"white"}
            bgColor={"grey"}
          />
        </Flex>
      </div>
    </div>
  );
}
