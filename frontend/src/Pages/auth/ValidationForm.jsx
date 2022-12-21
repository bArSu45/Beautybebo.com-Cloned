import "./ValidationForm.css";
import { Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Loading from "../../Components/CartProductCard/Loading";
import swal from "sweetalert"
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  password: "",
};

const ValidationForm = () => {
  const [fields, setFields] = useState(initialState);
   const [Load, setload] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();


    if (fields.password.length !== 6) {
      swal({
        title: "Register Failed !",
        text: "Password must be 6 letters",
        icon: "error",
        button: "ok",
      });
    }
      else if (
        fields.firstName !== "" ||
        fields.lastName !== "" ||
        fields.email !== "" ||
        fields.phone !== "" ||
        fields.password !== ""
      ) {
        setload(true);
        axios
          .post(
            "https://repulsive-nightgown-colt.cyclic.app/users/signup",
            fields
          )
          .then(() => {
            swal({
              title: "Register successful !",
              text: "Go to Login",
              icon: "success",
              button: "ok",
            }).then(() => {
              setload(false);
              navigate("/login");
            });
          })
          .catch((err) => {
            swal({
              title: "Register Failed !",
              text: "Please Try again",
              icon: "error",
              button: "ok",
            }).then(() => {
              setload(false);
            });
          });
      } else {
        swal({
          title: "Register Failed !",
          text: "Please add required fields !",
          icon: "error",
          button: "ok",
        }).then(() => {
          setload(false);
        });
      }
  };

  return (
    <div className="validation_form">
      {Load ? (
        <Loading />
      ) : (
        <form
          className="myForm"
          noValidate
          autoComplete="off"
          onSubmit={onSubmit}
        >
          {/* First Name */}
          <p className="title_validation">
            <label>
              * First Name
              <br />
              <input
                className="validation_input"
                type="text"
                name="firstName"
                value={fields.firstName}
                onChange={handleChange}
              />
            </label>
          </p>

          {/* Last Name */}
          <p className="title_validation">
            <label>
              * Last Name
              <br />
              <input
                className="validation_input"
                type="text"
                name="lastName"
                value={fields.lastName}
                onChange={handleChange}
              />
            </label>
          </p>

          {/* Email Address */}
          <p className="title_validation">
            <label>
              * Email address
              <br />
              <input
                className="validation_input"
                type="email"
                name="email"
                value={fields.email}
                onChange={handleChange}
              />
            </label>
          </p>

          {/* Phone Number */}
          <p className="title_validation">
            <label>
              * Cell Phone Number
              <br />
              <input
                className="validation_input"
                type="tel"
                name="phone"
                value={fields.phone}
                onChange={handleChange}
              />
            </label>
          </p>

          {/* Password */}
          <p className="title_validation">
            <label>
              * Password
              <br />
              <input
                className="validation_input"
                type="password"
                name="password"
                value={fields.password}
                onChange={handleChange}
              />
            </label>
            <br />
            <Text mt="5px" color="red" display={fields.password.length===6 ? "none":"flex"} > Password must be 6 Letters</Text>
          </p>

          {/* Confirm password */}
          {/* <p className="title_validation">
          <label>
            * Confirm Password
            <br />
            <input
              className="validation_input"
              type="password"
              name="confirm_password"
              onBlur={form.handleBlurEvent}
              onChange={form.handleChangeEvent}
              value={fields.confirm_password}
            />
          </label>
          <br />
          <label className="error">
            {errors.confirm_password ? errors.confirm_password : ""}
          </label>
        </p> */}

          <p>
            <button className="signup_continue" type="submit">
              CREATE AN ACCOUNT
            </button>
          </p>
        </form>
      )}
    </div>
  );
};

export default ValidationForm;
