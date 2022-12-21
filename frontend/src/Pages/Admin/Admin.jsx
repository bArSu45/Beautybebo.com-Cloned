import { Flex, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_users } from "../../Redux/AdminReducer/AdminAction";
import styles from "./Admin.module.css";
import Dashboard from "./Dashboard";
import Products from "./Products";
import User from "./User";

export default function Admin() {
  const [page, setPage] = useState("dashboard");
// const { users, user_auth } = useSelector((store) => store.AdminUserReducer);
  const handleClick = (data) => {
    setPage(data);
  }

  // const handleClick2 = (e) => {
  //   e.preventDefault()
  //   setPage("user")
  // }

  useEffect(() => {
 
},[])


  //  const handleClick3 = (e) => {
  //    e.preventDefault();
  //    setPage("user");
  //  };
  
  
    return (
      <div>
        <Flex>
          <div className={styles.AdminSidebar}>
            <Heading fontSize={["14px", "15px", "18px", "28px"]} mb="24px">
              Admin{" "}
            </Heading>
            <div
              className={styles.handlePoint}
              onClick={() => handleClick("dashboard")}
            >
              <Heading
                fontSize={["10px", "10px", "14px", "24px"]}
                mt="35%"
                mb="15px"
              >
                Dashboard
              </Heading>
              <hr className={styles.line} />
            </div>
            <div
              onClick={() => handleClick("user")}
              className={styles.handlePoint}
            >
              <Heading mb="18px" fontSize={["10px", "10px", "14px", "24px"]}>
                Users
              </Heading>
              <hr className={styles.line} />
            </div>
            <div
              className={styles.handlePoint}
              onClick={() => handleClick("product")}
            >
              <Heading mb="18px" fontSize={["10px", "10px", "14px", "24px"]}>
                Products
              </Heading>
              <hr className={styles.line} />
            </div>
          </div>
          <div className={styles.AdminRightebar}>
            {page === "dashboard" ? (
              <Dashboard />
            ) : (
              <div>
                {page === "product" ? (
                  <Products />
                ) : (
                  <div> {page === "user" ? <User /> : <Dashboard />} </div>
                )}{" "}
              </div>
            )}
          </div>
        </Flex>
      </div>
    );
}
