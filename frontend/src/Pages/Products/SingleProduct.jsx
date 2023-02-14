import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { HiHeart } from "react-icons/hi";
import { GoStar } from "react-icons/go";
import style from "./Products.module.css";
import { useDispatch } from "react-redux";
import { ADD_CARD_DATA } from "../../Redux/CartReducer/CartAction";
import swal from "sweetalert";
import { GetLocal } from "../../Utils/localstorage";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../../Components/CartProductCard/Loading";
import { Center, Flex } from "@chakra-ui/react";
import Aos from "aos";

const SingleProduct = () => {
  const [Load, setLoad] = useState(false);
  const Token = GetLocal("auth") || false;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const item = location.state.data;
  const handleCartClick = (e) => {
    e.preventDefault();
    let val = item.price.split(".");
    val[0].unshift();
    setLoad(true);
    if (Token) {
      const data = {
        image: item.image,
        price: +val[0],
        name: item.description,
      };

      dispatch(ADD_CARD_DATA(data,Token)).then((res) => {
        if (res.payload === "Error") {
         swal({
           title: "Product added Failed !",
           text: "something went wrong",
           icon: "error",
           button: "ok",
         }); 
        } else {
          swal({
          title: "Product added Successfully !",
          text: "",
          icon: "success",
          button: "ok",
        });
        }
        
        setLoad(false);
      });
    } else {
      setLoad(false);
      swal({
        title: "You are Not Login  !",
        text: "Please Login Click ok",
        icon: "error",
        button: "ok",
      }).then(() => navigate("/login"));
    }
  };

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Center w={["80%", "60%", "35%", "25%"]} m="auto">
      {Load ? (
        <Loading />
      ) : (
        <div
          id={style.makeup_main_div}
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1200"
        >
          <div id={style.makeup_img_div}>
            <img src={item.image} alt="" />
          </div>
          <div id={style.makeup_name_div}>
            <p>{item.name}</p>
          </div>
          <Center textAlign="center">
            <p> {item.description}</p>
          </Center>
          <div id={style.go_star_div}>
            <GoStar />
            <GoStar />
            <GoStar />
            <GoStar />
            <GoStar />
          </div>
          <div id={style.price_pink_div}>
            <h4>{"₹ " + item.price}</h4>
          </div>
          <div id={style.main_add_cart_div}>
            <div id={style.add_to_cart_div} onClick={handleCartClick}>
              <FaShoppingBasket />
              <p>Add To Cart</p>
            </div>
            <div id={style.hrt_div}>
              <HiHeart color="white" />
            </div>
          </div>
        </div>
      )}
    </Center>
  );
};

export default SingleProduct;
