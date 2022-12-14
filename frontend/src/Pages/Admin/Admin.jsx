import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import styles from "./Admin.module.css";

export default function Admin() {
    return (
      <div>
        <Flex>
          <div className={styles.AdminSidebar}>
            <Heading mb="24px">Admin </Heading>
            <div>
              <Heading mt="35%" mb="15px" fontSize="20px">
                Dashboard
              </Heading>
              <hr className={styles.line} />
            </div>
            <div>
              <Heading mb="18px"  fontSize="20px">
                Users
              </Heading>
              <hr className={styles.line} />
            </div>
            <div>
              <Heading mb="18px"  fontSize="20px">
                Products
              </Heading>
              <hr className={styles.line} />
            </div>
          </div>
          <div className={styles.AdminRightebar}></div>
        </Flex>
      </div>
    );
}
