import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { GetLocal } from "../Utils/localstorage";
import swal from "sweetalert";

const update_data = async (data, auth) => {
  return await axios.patch(
    "https://pleasant-foal-cloak.cyclic.app/users/singleuser",
    data,
    {
      headers: {
        token: `Bearer ${auth}`,
      },
    }
  );
};
export default function ModalOpen({ data, profile }) {
  const initialState = {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    phone: data.phone,
  };
  const [user, setUser] = useState(initialState);
  const [show, setShow] = useState(false);
  const Token = GetLocal("auth");
  const handleChnage = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      user.firstName == "" ||
      user.lastName == "" ||
      user.email == "" ||
      user.phone == ""
    ) {
      swal({
        title: "Don't Keep empty boxes !",
        icon: "error",
      });
    } else if (!user.email.includes("@")) {
      swal({
        title: "Please Enter valid email !",
        icon: "error",
      });
    } else {
      try {
        let res = await update_data(user, Token);
        swal({
          title: "Profile Data Updated !",
          icon: "success",
        }).then(() => profile());
        handleClose();
      } catch (err) {
        swal({
          title: "Profile Data Updated Failed !",
          icon: "error",
        }).then(() => profile());
        handleClose();
      }
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="primary"
        style={{ backgroundColor: "#DD2085", border: "none" }}
        onClick={handleShow}
      >
        Edit Profile
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Profile Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                name="firstName"
                value={user.firstName}
                autoFocus
                onChange={handleChnage}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                placeholder="Name"
                value={user.lastName}
                autoFocus
                onChange={handleChnage}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Name"
                name="email"
                value={user.email}
                autoFocus
                onChange={handleChnage}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Mobile Number"
                name="phone"
                value={user.phone}
                autoFocus
                onChange={handleChnage}
              />
            </Form.Group>
            {/* <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>About</Form.Label>
              <Form.Control as="textarea" value={about} rows={3} />
            </Form.Group> */}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            style={{ backgroundColor: "#DD2085", border: "none" }}
            onClick={handleSubmit}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
