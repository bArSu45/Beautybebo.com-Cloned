import { Flex } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import Loading from "../../Components/CartProductCard/Loading";
import ModalOpen from "../../Components/Modal";
import { GetLocal } from "../../Utils/localstorage";
import Styles from "./Profile.module.css";
// import CircumIcon from "@klarr-agency/circum-icons-react";

const get_data = async (auth) => {
  console.log(auth);
  let res = await axios.get(
    "https://pleasant-foal-cloak.cyclic.app/users/singleuser",
    {
      headers: {
        token: `Bearer ${auth}`,
      },
    }
  );
  console.log(res);
  return res;
};

export default function Profile() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const naviagte = useNavigate();
  const Token = GetLocal("auth") || false;
  const { Cart_Items, auth, error } = useSelector((store) => store.CartReducer);

  const profile = async () => {
    setLoading(true);
    try {
      let res = await get_data(Token);
      setUser(res.data);
      setLoading(false);
    } catch (err) {
      swal({
        title: "Something went wrong !",
        icon: "error",
      }).then(() => setLoading(true));
    }
  };

  useEffect(() => {
    profile();
  }, []);

  return (
    <div className={Styles.container}>
      {loading ? (
        <Loading />
      ) : (
        <div className={Styles.middle}>
          <div className={Styles.back}></div>

          <div className={Styles.background}>
            {/* <img src="./pretty.png" alt="logo" /> */}
            <div className={Styles.prflImage}>
              <img src="./icon2.png" alt="Avatar" />
            </div>
          </div>
          <div className={Styles.About}>
            <div className={Styles.profileBtn}>
              <div>
                <ModalOpen data={user} profile={profile} />
                <h1>{user.firstName + " " + user.lastName}</h1>
                <h1>Email : {user.email} </h1>
                <h1>Mobile: {user.phone}</h1>
              </div>

              <div>
                <div className={Styles.frn}>
                  <h1>0</h1>
                  <h2>Orders</h2>
                </div>
                <div className={Styles.frn}>
                  <h1>{Cart_Items.length}</h1>
                  <Link to="/cart">
                    <h2>Carts</h2>{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={Styles.container}>
            <div>
              <h1>About</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus perferendis explicabo optio magni! Quasi ipsa in, nam
                cum sed facilis est eligendi fuga accusamus, autem dignissimos?
                Similique, itaque. Distinctio, ab.
              </p>
            </div>
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
}
