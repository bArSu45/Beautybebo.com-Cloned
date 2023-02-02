import styles from "./nav.module.css";
import React from "react";
import image from "./Logo_Pretty.png";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { ImHeart } from "react-icons/im";
import { RiAccountPinCircleFill } from "react-icons/ri";
import Navinput from "./Navinput";
import { Link, useNavigate } from "react-router-dom";
import { GetLocal, SetRemove } from "../../Utils/localstorage";
import { useEffect } from "react";
import { useState } from "react";
import swal from "sweetalert";

const Topnav = () => {
  const isAdmin = JSON.parse(localStorage.getItem("isAdmin")) || false;
  const Token = GetLocal("auth") || false;
  const [Load, setLoad] = useState(Token);
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("isAdmin");
    SetRemove("auth");
    swal({
      title: "Logout Successfully !",
      text: "Go to Main Page",
      icon: "success",
      button: "ok",
    }).then(() => {
      setLoad(Token);
      navigate("/");
    });
  };

  useEffect(() => {}, [Load]);
  const handleAdmin = () => {
    if (isAdmin) {
      navigate("/admin");
    } else {
      swal({
        title: "Admin!",
        text: "You are not Authrized",
        icon: "error",
        button: "ok",
      });
    }
  };
  return (
    <div className={styles.top}>
      <div className={styles.imagediv}>
        <Link to="/">
          <img
            src={image}
            alt="Pretty In Pink Logo"
            className={styles.image}
          ></img>
        </Link>
      </div>
      <div className={styles.navin}>
        <Navinput />{" "}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className={styles.mediaaccount}
      >
        <div className={styles.icon} style={{ border: "1px solid black" }}>
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
                <Link to="/login">
                  {Token ? (
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  ) : (
                    <MenuItem>Login</MenuItem>
                  )}
                </Link>
                {Token ? (
                  <Link to="/profile">
                    <MenuItem>Profile</MenuItem>
                  </Link>
                ) : (
                  <Link to="/signup">
                    <MenuItem>Register</MenuItem>
                  </Link>
                )}

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
