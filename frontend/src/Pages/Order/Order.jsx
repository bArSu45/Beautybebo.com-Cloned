import { Center, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ButtonComponent from "../../Components/ButtonComponent";
import Loading from "../../Components/CartProductCard/Loading";
import OderCart from "../../Components/OderCart";
import { GET_ORDER } from "../../Redux/OrderReducer/OrderAction";
import { GetLocal } from "../../Utils/localstorage";

export default function Order() {
  const [order, setOrder] = useState([]);
  const [load, setLoad] = useState(false);
  const dispatch = useDispatch();
  const Token = GetLocal("auth");

  const get_data = async () => {
    setLoad(true);
    let x = await dispatch(GET_ORDER(Token));
    setOrder(x);
    setLoad(false);
  };

  useEffect(() => {
    get_data();
  }, []);

  return (
    <div>
      <Center>
        
        <ButtonComponent Title="Product Oders" buttonColor="pink" />
        
      </Center>

      <div>
        <Center mt="15px" mb="20px">
          {load ? (
            <Loading />
          ) : (
            <div>
              {order.length == 0 ? (
                <p>You have No order.</p>
              ) : (
                <div>
                  {order.map((el) => (
                    <OderCart key={el._id} data={el} />
                  ))}
                </div>
              )}
            </div>
          )}
        </Center>
      </div>
    </div>
  );
}
