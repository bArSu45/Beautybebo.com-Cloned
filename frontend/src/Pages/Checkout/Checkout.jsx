import { Heading, Text, Box, Flex, Radio } from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import InputComponent from "../../Components/InputComponent";
import styles from "./Checkout.module.css";
import { initialState, InputArray, inputs } from "../../Utils/localData";
import ButtonComponent from "../../Components/ButtonComponent";
import { useLocation, useNavigate } from "react-router-dom";
import Confirm from "./Confirm";
import { useDispatch, useSelector } from "react-redux";
import { CARD_DELETE_ALL } from "../../Redux/CartReducer/CartAction";
import Loading from "../../Components/CartProductCard/Loading";
import Success from "../../Components/Success";

export default function Checkout() {
  const [data, setData] = useState(initialState);
  const { loading2, auth2 } = useSelector((store) => store.CartUpdateReducer);
 

  const location = useLocation();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  
  const handleDeleteMany =(e) => {
    dispatch(CARD_DELETE_ALL());
    
  }



  useEffect(() => {
    
  },[auth2])

  return (
    <div className={styles.Checkout}>
      {loading2 ? <Loading /> :
      <div>
        <Heading mt="15px" fontSize="25px">
          Shipping Address
        </Heading>
        <Flex justifyContent="space-between">
          <Box w="60%">
            <form>
              {InputArray.map((input, index) => (
                <Box mt="10px" key={index}>
                  <Flex gap="7px" ml="2px">
                    <Text>{inputs[index]}</Text>
                    <Text color="red">*</Text>
                  </Flex>

                  <InputComponent
                    placeholder={`Enter Your ${inputs[index]}`}
                    type="text"
                    name={input}
                    value={data.input}
                    handleFunction={handleChange}
                  />
                </Box>
              ))}
            </form>
          </Box>
          <div className={styles.Amount}>
            <Text>Total AMount:₹{location.state.total_price}.00</Text>
          </div>
        </Flex>
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
          
         { loading2 ? <Loading/> : 
          <Confirm
            handleDeleteMany={handleDeleteMany}
            amount={location.state.total_price}
          />}
        </Flex>
      </div> }
    </div>
  );
}
