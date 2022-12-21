import {
  border,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  Box,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useState } from "react";
import styles from "./nav.module.css";
import axios from "axios";
import { Link } from "react-router-dom";

const getData = (data) => {
  return axios.get(
    `https://repulsive-nightgown-colt.cyclic.app/navbars?q=${data}`
  );
};

const Navinput = () => {
  const [q, setQ] = useState("");
  const [suggestion, setSuggestion] = useState([]);

  const handleText = (data) => {
    setQ(data);
  };
  useEffect(() => {
    let timeout = setTimeout(() => {
      if (q === "") {
        setSuggestion([]);
      } else {
        getData(q)
          .then((res) => {
            setSuggestion(res.data);
          })
          .catch((e) => {
            console.log(e);
          });
      }
    }, 800);
    return () => clearTimeout(timeout);
  }, [q]);

  console.log("here suggestion", suggestion);

  return (
    <>
      <InputGroup width="800px" className={styles.medianavinput}>
        <div className={styles.medianavinputmenu}>
          <Menu>
            <MenuButton
              h="48px"
              px={4}
              py={2}
              transition="all 0.2s"
              borderRadius="md"
              borderWidth="1px"
              width="16rem"
              color="grey"
            >
              All Categories <ChevronDownIcon />
            </MenuButton>
            <MenuList color="grey">
              <Link to="/products">
                {" "}
                <MenuItem>SKIN</MenuItem>
              </Link>
              <Link to="/makeup">
                {" "}
                <MenuItem>MAKEUP</MenuItem>
              </Link>
           <Link to="/products">   <MenuItem>HAIR</MenuItem></Link>
              <MenuItem>BABY ADN CARE</MenuItem>
              <MenuItem>PERSONAL CARE</MenuItem>

             <Link to="/products"> <MenuItem>FRAGRANCE</MenuItem></Link>
              <MenuItem>BRANDS</MenuItem>
            </MenuList>
          </Menu>
        </div>
        <Box>
          <Input
            size="lg"
            focusBorderColor="pink.400"
            color="grey"
            placeholder="Enter Your Search Here"
            onChange={(e) => handleText(e.target.value)}
            value={q}
            w={["70%", "70%", "100%", "40vw"]}
            className={styles.medianavinputsearch}
          />
          <InputRightElement width="3rem" height="3rem">
            <div className={styles.searchBtn}>
              <Button
                h="2.5rem"
                size="sm"
                color="white"
                bg="#dd0285"
                _hover={{
                  background: "white",
                  color: "#dd0285",
                }}
              >
                <FaSearch />
              </Button>
            </div>
          </InputRightElement>
          <div className={suggestion.length > 0 ? styles.suggestion : null}>
            {suggestion.length > 0
              ? suggestion.map((item, index) => {
                  return (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        padding: "15px",
                      }}
                    >
                      <Link to={`/products/${item._id}`}>
                        <img src={item.image} style={{ height: "40px" }} />
                        <h3>{item.description}</h3>
                      </Link>
                    </div>
                  );
                })
              : null}
          </div>
        </Box>
      </InputGroup>
    </>
  );
};

export default Navinput;
