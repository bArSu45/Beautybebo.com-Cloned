import { Flex, Text } from "@chakra-ui/react";
import { memo, useEffect, useState } from "react";
import { Image, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { EDIT_CARD_DATA } from "../../Redux/CartReducer/CartAction";
import ButtonComponent from "../ButtonComponent";
import Loading from "../CartProductCard/Loading";
import styles from "./EditComponent.module.css";
import swal from "sweetalert"
import axios from "axios";
import { GetLocal } from "../../Utils/localstorage";
function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}
function EditComponent({
  image,
  qty,
  price,
  desc,
  open,
  handleOpen,
  id,
  getCard_data,
}) {
  const { loading2, auth2 } = useSelector((store) => store.CartUpdateReducer);
  const [data, setData] = useState({ Price: price, Qty: qty });
  const [load, setLoad] = useState(false);
  const dispatch = useDispatch();
  const Token = GetLocal("auth") || "";

  const handleConfirm = async (e) => {
    e.preventDefault();
    const Value = { id: id, quantity: data.Qty };
   await axios
     .patch(
       `https://pleasant-foal-cloak.cyclic.app/carts/${Value.id}`,
       { quantity: Value.quantity },
       {
         headers: {
           token: `Bearer ${Token}`,
         },
       }
     )
     .then((res) => {
       getCard_data();
       swal({
         title: "Updated",
         text: "Cart updated Successfully",
         icon: "success",
         button: "ok",
       });
     })
     .catch((err) =>
       swal({
         title: "Updated Failed",
         text: "Cart updated Failed",
         icon: "error",
         button: "ok",
       })
     );
   
   
    // setLoad(true);
    
    // await simulateNetworkRequest().then((res) => setLoad(false));
   
  };

  useEffect(() => {}, [load]);

  const handleClick = (e) => {
    // e.preventDefault();
    if (data.Qty <= 5 && data.Price <= 3000) {
      let new_value = data.Qty + 1;
      setData({ ...data, Price: new_value * price, Qty: new_value });
    } else {
       swal({
         title: "Limit Exceed",
         text: "You can't add Maximum !",
         icon: "error",
         button: "ok",
       });
    }
  };

  const handleClick2 = (e) => {
    // e.preventDefault();
    if (data.Qty > 1 && data.Price > 1) {
      let new_value = data.Qty - 1;
      setData({ ...data, Price: new_value * price, Qty: new_value });
    } else {
       swal({
         title: "Minimum 1 Quantity Need !",
         text: "",
         icon: "error",
         button: "ok",
       });
    }
  };
  return (
    <Modal show={open}>
      <div className={open ? styles.EditContainer2 : styles.EditContainer1}>
        {load ? (
          <div className={styles.Loading}>
            <Loading />
          </div>
        ) : (
          <>
            <div className={styles.Cancel}>
              <button onClick={handleOpen}>X</button>
            </div>
            <div className={styles.Container}>
              <div className={styles.imageTable}>
                <Flex justifyContent="center" alignItems="center">
                  <Image mt="10px" src={image} />
                </Flex>
              </div>
              <Text fontSize="12px">{desc}</Text>
              <Flex
                justifyContent="center"
                mt="15px"
                gap="5px "
                alignItems="center"
              >
                <Text>QTY: </Text>
                <Flex border="1px solid grey" gap="5px" p="1">
                  <button onClick={handleClick}> +</button>
                  {data.Qty}
                  <button onClick={handleClick2}> -</button>
                </Flex>
              </Flex>
              <div>
                <Flex
                  justifyContent="center"
                  mt="15px"
                  gap="5px"
                  alignItems="center"
                >
                  <Text>Price: </Text>
                  <Text p="5px">₹{data.Price}.00</Text>
                </Flex>
              </div>
              <Flex mt="15px" gap="25px" justifyContent="space-between">
                <ButtonComponent
                  Title={"Update Cart"}
                  txtColor={"white"}
                  bgColor={"rgb(245, 13, 156)"}
                  buttonColor="pink"
                  size="sm"
                  handleClick={handleConfirm}
                />
                <ButtonComponent
                  Title={"Close"}
                  txtColor={"white"}
                  bgColor={"rgb(245, 13, 156)"}
                  buttonColor="red"
                  size="sm"
                  handleClick={handleOpen}
                />
              </Flex>
            </div>
          </>
        )}
      </div>
    </Modal>
  );
}

export default memo(EditComponent);
