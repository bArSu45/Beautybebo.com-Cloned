import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React, { memo, useEffect, useState } from "react";
import swal from "sweetalert"
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ButtonComponent from "../../Components/ButtonComponent";
import Loading from "../../Components/CartProductCard/Loading";
import ProductCard from "../../Components/CartProductCard/ProductCard";
import {
  EDIT_CARD_DELETE,
  GET_CARD_DATA,
} from "../../Redux/CartReducer/CartAction";

import styles from "./Cart.module.css";
import axios from "axios";
import { GetLocal } from "../../Utils/localstorage";

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 1000));
}

function Cart() {
  const [data, setData] = useState({ CardItem: [], total: 0, render: false });
  const { Cart_Items, loading, auth, error } = useSelector(
    (store) => store.CartReducer
  );
  const { loading2, auth2 } = useSelector((store) => store.CartUpdateReducer);
  const shpping_carge = 57;
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const Token = GetLocal("auth");


  const handleDelete = async (id) => {
    
    await axios
      .delete(`https://pleasant-foal-cloak.cyclic.app/carts/${id}`, {
        headers: {
          token: `Bearer ${Token}`,
        },
      })
      .then((res) => {
        setData({ ...data, render: true });
        swal({
          title: "Product Removed Successfully !",
          text: "",
          icon: "success",
          button: "ok",
        })
        
      })
      .catch((err) =>
        swal({
          title: "Product Removed Failed !",
          text: "Try again",
          icon: "error",
          button: "ok",
        })
      );
 
  };

  const UpdateCart = () => {
    simulateNetworkRequest().then(() => setData({ ...data, render: true }));
  };

  const getCard_data = () => {
    dispatch(GET_CARD_DATA())
      .then((res) => {
        const total_val = Cart_Items.reduce((sum, a) => {
          return sum + a.price * a.quantity;
        }, 0);
        setData({
          ...data,
          CardItem: Cart_Items,
          total: total_val,
          render: false,
        });
      })
      .catch((err) =>
        swal({
          title: "Something Went wrong",
          text: "Please reload page again !",
          icon: "error",
          button: "ok",
        })
      );    
  };

  const handleCheckout = () => {
    Navigate("/checkout", {
      state: { total_price: data.total},
    });
  };

  useEffect(() => {
    getCard_data();
  }, [auth,auth2, data.total,data.render]);

  return (
    <div className={styles.Cart}>
      <Box>
        <Heading fontSize="25px">SHOPPING CART </Heading>
      </Box>
      {loading || data.render || loading2 ? (
        <div className={styles.Loading}>
          <Loading />
        </div>
      ) : (
        <div>
          {data.CardItem.length === 0 ? (
            <div>
              <Text p="5px" >You have no items in your shopping cart.</Text>
              <Text p="5px" mb="15px"  >
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
                    <div key={card._id}>
                      <ProductCard
                        image={card.image}
                        desc={card.name}
                        price={card.price}
                        qty={card.quantity}
                        id={card._id}
                        handleDelete={() => handleDelete(card._id)}
                        getCard_data={UpdateCart}
                      />
                      <div className={styles.EditComponent}></div>
                      <hr className={styles.line} />
                    </div>
                  ))}
                  <div>
                    <hr className={styles.line2} />
                    <Flex justifyContent="space-between" p="15px" >
                      <Link to="/">
                        {" "}
                        <ButtonComponent
                          Title={"CONTINUE SHOPPING"}
                          txtColor={"white"}
                          bgColor={"grey"}
                          buttonColor={"pink"}
                        />{" "}
                      </Link>

                      <ButtonComponent
                        Title={"UPDATE SHOPPING CART"}
                        txtColor={"white"}
                        bgColor={"grey"}
                        buttonColor={"pink"}
                        handleClick={UpdateCart}
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
                    handleClick={handleCheckout}
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

export default Cart;
