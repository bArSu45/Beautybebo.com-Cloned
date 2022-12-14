import { Flex, Text } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import styles from "./ProductCard.module.css";
import ButtonComponent from "../ButtonComponent";
export default function ProductCard() {
  return (
    <div>
      <div className={styles.productCard}>
        <div className={styles.ImageTable}>
          <img
            src="https://www.beautybebo.com/pub/media/catalog/product/cache/c9615af5e5a6f27d0b9239c1928d8610/u/n/untitled-124.jpg"
            alt="product"
          />
        </div>
        <div className={styles.SubHeading2}>
          <div>
            <Text fontSize={["8px", "12px", "12px", "14px"]}>
              {" "}
              TRESEMME PROPURE MOISTURE BOOST - SHAMPOO + CONDITIONER + SERUM
              COMBO
            </Text>
          </div>
          <div>
            <Text fontSize={["10px", "12px", "12px", "14px"]}>₹1,300.00</Text>
          </div>
          <div className={styles.QtyBox}>
            <Text fontSize={["10px", "12px", "12px", "14px"]}>1</Text>
          </div>
          <div>
            <Text fontSize={["10px", "12px", "12px", "14px"]}>₹1,300.00</Text>
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
