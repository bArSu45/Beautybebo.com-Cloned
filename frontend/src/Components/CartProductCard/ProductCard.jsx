import { Flex, Text } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import styles from "./ProductCard.module.css";
import ButtonComponent from "../ButtonComponent";
// import { useDispatch } from "react-redux";
import EditComponent from "../EditCardComponet/EditComponent";
import { useState } from "react";
export default function ProductCard({ image, desc, price, qty, id }) {
  // const dispatch = useDispatch();
  const [open, SetOpen] = useState(false);
  const handleOpen = (e) => {
    SetOpen(!open);
  };

  return (
    <div key={id} className={styles.main}>
      <EditComponent
        image={image}
        desc={desc}
        price={price}
        qty={qty}
        id={id}
        open={open}
        handleOpen={handleOpen}
      />
      <div className={styles.productCard}>
        <div className={styles.ImageTable}>
          <img src={image} alt="product" />
        </div>
        <div className={styles.SubHeading2}>
          <div>
            <Text fontSize={["8px", "12px", "12px", "14px"]}>{desc}</Text>
          </div>
          <div>
            <Text fontSize={["10px", "12px", "12px", "14px"]}>₹{price}.00</Text>
          </div>
          <div className={styles.QtyBox}>
            <Text fontSize={["10px", "12px", "12px", "14px"]}>{qty}</Text>
          </div>
          <div>
            <Text fontSize={["10px", "12px", "12px", "14px"]}>
              ₹{price * qty}.00
            </Text>
          </div>
        </div>
      </div>
      <hr className={styles.line} />
      <Flex gap="20px">
        <ButtonComponent
          Title={"Edit"}
          txtColor={"white"}
          bgColor={"rgb(245, 13, 156)"}
          icon={<EditIcon />}
          handleClick={handleOpen}
        />
        <ButtonComponent
          Title={"Remove"}
          txtColor={"white"}
          bgColor={"rgb(245, 13, 156)"}
          icon={<DeleteIcon />}
        />
      </Flex>
    </div>
  );
}
