import { Flex, Text } from "@chakra-ui/react";
import { memo, useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import { useDispatch } from "react-redux";
import ButtonComponent from "../ButtonComponent";
import styles from "./EditComponent.module.css";

function EditComponent({ image, qty, price,desc, open, handleOpen }) {
  const [data, setData] = useState({ Price: price, Qty: qty });

  const dispatch = useDispatch();

  const handleClick = (e) => {
    // e.preventDefault();
    if (data.Qty <= 5 && data.Price <= 3000) {
      let new_value = data.Qty + 1;
      setData({ ...data, Price: new_value * price, Qty: new_value });
    } else {
      window.alert("Maxmimum Limit Exceed");
    }
  };

  const handleClick2 = (e) => {
    // e.preventDefault();
    if (data.Qty > 1 && data.Price > 1) {
      let new_value = data.Qty - 1;
      setData({ ...data, Price: new_value * price, Qty: new_value });
    } else {
      window.alert("Minimum 1 Quantity");
    }
  };
  return (
    <>
      <div className={open ? styles.EditContainer2 : styles.EditContainer1}>
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
      </div>
    </>
  );
}

export default memo(EditComponent);
