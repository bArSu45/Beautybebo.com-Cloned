import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { FaShoppingBasket } from "react-icons/fa"
import { HiHeart } from "react-icons/hi"
import { GoStar } from "react-icons/go"
import { ADD_CARD_DATA } from "../../Redux/CartReducer/CartAction";
import swal from "sweetalert";
import { GetLocal } from "../../Utils/localstorage";
import style from "./Products.module.css"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Loading from '../../Components/CartProductCard/Loading';
import { Box, Flex } from '@chakra-ui/react'



function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 1000));
}
export default function MakeupData() {
    const [makeup, setmakeup] = useState([])
  const [Load, setLoad] = useState(false);
  const Token = GetLocal("auth") || false;
  const navigate = useNavigate();
  const dispatch = useDispatch();
    const makeupData = () => {
        axios.get(`https://repulsive-nightgown-colt.cyclic.app/products?category=makeup`)
          .then((res) => {
            setmakeup(res.data)
    
          }).catch((e) => {
            console.log(e)
          })
  }
    const Get_update = () => {
      setLoad(true);
      simulateNetworkRequest().then((res) => setLoad(false));
    };
  const handleCartClick = (image, price, name) => {
    setLoad(true);
    if (Token) {
      const data = {
        image,
        price,
        name,
      };

      dispatch(ADD_CARD_DATA(data)).then((res) => {
        swal({
          title: "Product added Successfully !",
          text: "",
          icon: "success",
          button: "ok",
        });
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
        makeupData()
     Get_update();
      }, [])
  return (
    <div style={{display:"flex",width:"80%",margin:"auto"}}>
        {/* <div style={{width:"25%",border:"1px solid grey"}}>
        </div> */}
      {Load ? (
        <Flex alignItems="center" justifyContent="center" p="30px" > 
        <Loading /></Flex>
      ) :
        <div id={style.makeup_main_container}>
          {makeup.length > 0 && makeup.map((item) => {
            return (
              <div id={style.makeup_main_div}>
                <div id={style.makeup_img_div}>
                  <img src={item.image} alt="" />
                </div>
                <div id={style.makeup_name_div}>
                  <p>{item.name}</p>
                </div>
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
                  <div
                    id={style.add_to_cart_div}
                    onClick={() =>
                      handleCartClick(item.image, item.price, item.name)
                    }
                  >
                    <FaShoppingBasket />
                    <p>Add To Cart</p>
                  </div>
                  <div id={style.hrt_div}>
                    <HiHeart color="white" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>}
    </div>
  )
}
