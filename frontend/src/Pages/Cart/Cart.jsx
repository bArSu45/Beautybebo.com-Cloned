import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import ButtonComponent from "../../Components/ButtonComponent";
import ProductCard from "../../Components/ProductCard/ProductCard";
import styles from "./Cart.module.css";

export default function Cart() {
  return (
    <div className={styles.Cart}>
      <Box>
        <Heading fontSize="25px">SHOPPING CART </Heading>
      </Box>
      {/* <div>
        <Text>You have no items in your shopping cart.</Text>
        <Text>Click here to continue shopping.</Text>
      </div> */}
      <div className={styles.SubCart}>
        <div className={styles.Containt}>
          <div className={styles.Heading}>
            <div>
              <Text fontSize={["10px", "12px", "12px", "14px"]}>ITEM</Text>
            </div>
            <div className={styles.SubHeading2}>
              <Text fontSize={["10px", "12px", "12px", "14px"]}>PRICE</Text>
              <Text fontSize={["10px", "12px", "12px", "14px"]}>QTY</Text>
              <Text fontSize={["10px", "12px", "12px", "14px"]}>SUBTOTAL</Text>
            </div>
          </div>
          <hr className={styles.line} />
          <div>
            <ProductCard styles={styles} />
            <div>
              <hr className={styles.line2} />
              <Flex justifyContent="space-between">
                <ButtonComponent
                  Title={"CONTINUE SHOPPING"}
                  txtColor={"white"}
                  bgColor={"grey"}
                  buttonColor={"pink"}
                />

                <ButtonComponent
                  Title={"UPDATE SHOPPING CART"}
                  txtColor={"white"}
                  bgColor={"grey"}
                  buttonColor={"pink"}
                />
              </Flex>{" "}
            </div>
          </div>
        </div>
        <div className={styles.Payment}>
          <Heading fontSize="20px">SUMMARY</Heading>
          <div className={styles.PaymentBox}>
            <Heading fontSize="15px">ESTIMATE SHIPPING AND TAX </Heading>
          </div>

          <div>
            <hr className={styles.line2} />
            <Text p="5px">Subtotal</Text>
          </div>
          <div>
            <hr className={styles.line2} />
            <Text p="5px">Shipping (Best Way - Max 7 Business days)</Text>
          </div>
          <div>
            <hr className={styles.line2} />
            <Text p="5px">Order Total Incl. GST</Text>
            <hr className={styles.line2} />
          </div>

          <div className={styles.PaymentBox}>
            <Heading fontSize="15px">APPLY DISCOUNT CODE</Heading>
          </div>
          <div className={styles.button1}>
            <ButtonComponent
              Title="PROCEED TO CHECKOUT"
              txtColor={"white"}
              bgColor={"grey"}
              buttonColor="pink"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
