import "./ValidationForm.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  password: "",
};

const ValidationForm = () => {
  const [fields, setFields] = useState(initialState);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (
      fields.firstName !== "" ||
      fields.lastName !== "" ||
      fields.email !== "" ||
      fields.phone !== "" ||
      fields.password !== ""
    ) {
      axios
        .post(
          "https://repulsive-nightgown-colt.cyclic.app/users/signup",
          fields
        )
        .then(() => {
          window.alert("Register successful");
          navigate("/login");
        })
        .catch((err) => {
          console.log(err);
          window.alert("Something went wrong. Please try again");
        });
    } else {
      window.alert("Please add required fields !");
    }
  };

  return (
    <div className="validation_form">
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
    </div>
  );
};

export default ValidationForm;
