import styles from "./nav.module.css";
import React from "react";
import image from "./Logo_Pretty.png";
import {
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
} from "@chakra-ui/react";
import { FaBeer, ImHeart } from "react-icons/im";
import { RiAccountPinCircleFill } from "react-icons/ri";
import Navinput from "./Navinput";
import { useNavigate } from "react-router-dom";

const Topnav = () => {
const isAdmin=JSON.parse(localStorage.getItem("isAdmin")) || false
const navigate=useNavigate()

  const handleAdmin=()=>{
if(isAdmin){
  navigate("/admin")
}else{
  window.alert("You are not Authorised")
}
  }
  return (
    <div className={styles.top}>
      <div className={styles.imagediv}>
        <img src={image} className={styles.image}></img>
      </div>

     <Navinput/>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          
          
        }}
        className={styles.mediaaccount}
      >
        <div className={styles.icon} style={{border : "1px solid black"}}>
          <ImHeart size={20} />
        </div>
        <div className={styles.login}>
          <div className={styles.icon}>
            <RiAccountPinCircleFill size={25} />
          </div>
          <div>
            <Menu isLazy>
              <MenuButton>My Account</MenuButton>
              <MenuList>
                {/* MenuItems are not rendered unless Menu is open */}
                <MenuItem>Login</MenuItem>
                <MenuItem>Register</MenuItem>
                <MenuItem onClick={handleAdmin}>Admin</MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topnav;
