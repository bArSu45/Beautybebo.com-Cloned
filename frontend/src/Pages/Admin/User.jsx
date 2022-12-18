import { Box, Text, Flex, Button } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../../Components/CartProductCard/Loading";
import { GET_USER } from "../../Redux/AdminReducer/AdminAction";
import { GetLocal } from "../../Utils/localstorage";
import styles from "./Admin.module.css"
export default function User() {
  const [user, setUser] = useState([]);
  const [render, setrender] = useState(false);
  const { users, user_auth, isloading } = useSelector(
    (store) => store.AdminReducer
  );
 const Token = GetLocal("auth");
  const dispatch = useDispatch();
  const getALlUser = () => {
   
    dispatch(GET_USER(Token)).then(() => {
      setrender(false);
      setUser(users);
    });
  };

  const handleDelete = async (id) => {
    setrender(true);
    await axios.delete(`https://pleasant-foal-cloak.cyclic.app/users/${id}`, {
      headers: {
        token:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOTk3YjJiNmM2OWQyOWJiNGQ4ZjI0YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MTMwMTQ2NiwiZXhwIjoxNjcxNTYwNjY2fQ.FW4NW1DTHubI43Dqtyb82pSiJ8hk4lO9gs5Tk9PNjmQ",
      },
    }).then((res) => {
      window.alert(res.data)
      getALlUser();
    }).catch((err)=>window.alert("Something went wrong Please Try again"))
  }

  useEffect(() => {
    getALlUser();
  }, [user_auth,render]);

  return (
    <div className={styles.userContainer}>
      {render || isloading ? (
        <Loading />
      ) : (
        <>
          {user.map((singleUser) => (
            <Box
              border="1px solid black"
              p="10px"
              textAlign="center"
              color="white"
              key={singleUser._id}
            >
              <Text fontSize={["8px", "8px", "14px", "14px"]} mt="8px">
                First Name: {singleUser.firstName}
              </Text>
              <Text fontSize={["8px", "8px", "14px", "14px"]} mt="8px">
                Last Name: {singleUser.lastName}
              </Text>
              <Text fontSize={["8px", "8px", "14px", "14px"]} mt="8px">
                Email: {singleUser.email}
              </Text>
              <Text fontSize={["8px", "8px", "14px", "14px"]} mt="8px">
                Admin Access: {singleUser.isAdmin ? "YES" : "NO"}
              </Text>
              <Button
                mt="8px"
                colorScheme="red"
                onClick={() => handleDelete(singleUser._id)}
              >
                Delete
              </Button>
            </Box>
          ))}
        </>
      )}
    </div>
  );
}
