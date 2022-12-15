import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React, { memo, useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ButtonComponent from "../../Components/ButtonComponent";
import Loading from "../../Components/CartProductCard/Loading";
import ProductCard from "../../Components/CartProductCard/ProductCard";
import { GET_CARD_DATA } from "../../Redux/CartReducer/CartAction";

import styles from "./Cart.module.css";

function Cart() {
  const [data, setData] = useState({CardItem:[],total:0});
  const { Cart_Items, loading, auth, error } = useSelector(
    (store) => store.CartReducer
  );
  const shpping_carge = 57;
  const dispatch = useDispatch();

  const getCard_data = () => {
    dispatch(GET_CARD_DATA());
     const total_val = Cart_Items.reduce((sum, a) => {
       return sum + a.price*a.qty;
     }, 0);
    setData({ ...data,CardItem: Cart_Items, total:total_val});
  };
  
 

  useEffect(() => {
    getCard_data();
    
  }, [auth]);

 

  return (
    <div className={styles.Cart}>
      <Box>
        <Heading fontSize="25px">SHOPPING CART </Heading>
      </Box>
      {loading ? (
        <div className={styles.Loading} ><Loading /> </div>
        
      ) : (
        <div>
          {data.CardItem.length === 0 ? (
            <div>
              <Text>You have no items in your shopping cart.</Text>
              <Text>
                <Link to="/"> Click here to continue shopping.</Link>
              </Text>
            </div>
          ) : (
            <div className={styles.SubCart}>
              <div className={styles.Containt}>
                <div className={styles.Heading}>
                  <div>
                    <Text fontSize={["10px", "12px", "12px", "14px"]}>
                      ITEM
                    </Text>
                  </div>
                  <div className={styles.SubHeading2}>
                    <Text fontSize={["10px", "12px", "12px", "14px"]}>
                      PRICE
                    </Text>
                    <Text fontSize={["10px", "12px", "12px", "14px"]}>QTY</Text>
                    <Text fontSize={["10px", "12px", "12px", "14px"]}>
                      SUBTOTAL
                    </Text>
                  </div>
                </div>
                <hr className={styles.line} />
                <div>
                  {data.CardItem.map((card) => (
                    <>
                      <ProductCard
                        image={card.image}
                        desc={card.desc}
                        price={card.price}
                        qty={card.qty}
                        id={card.id}
                      />
                      <div className={styles.EditComponent}></div>
                      <hr className={styles.line} />
                    </>
                  ))}
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
                  <Flex justifyContent="space-between">
                    <Text p="5px">Subtotal</Text>
                    <Text>₹{data.total}.00</Text>
                  </Flex>
                </div>
                <div>
                  <hr className={styles.line2} />
                  <Flex justifyContent="space-between">
                    <Text p="5px" fontSize="15px">
                      Shipping (Best Way - Max 7 Business days)
                    </Text>
                    <Text>
                      {data.total >= 500 ? "FREE" : `₹${shpping_carge}.00`}
                    </Text>
                  </Flex>
                </div>
                <div>
                  <hr className={styles.line2} />
                  <Flex justifyContent="space-between">
                    <Text p="5px">Order Total Incl. GST</Text>
                    <Text>
                      ₹
                      {data.total >= 500
                        ? data.total
                        : data.total + shpping_carge}
                      .00
                    </Text>
                  </Flex>

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
          )}
        </div>
      )}
    </div>
  );
}

export default memo(Cart);
