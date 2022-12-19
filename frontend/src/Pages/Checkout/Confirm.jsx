import { Flex, Text } from "@chakra-ui/react";
import React, { memo, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Success from "../../Components/Success";
import swal from "sweetalert"
import { useNavigate } from "react-router-dom";

const IntialState = {
  box1: false,
  box2: false,
};

function ConfirmModal({ amount, handleDeleteMany }) {
  const [show, setShow] = useState(false);
  const [payment, setPayment] = useState(IntialState);
  const navigate = useNavigate();
  const handlePaymentChange = (e) => {
    const { name, checked } = e.target;
    setPayment({ ...payment, [name]: checked });
  };

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();
    if (payment.box1 === true && payment.box2 === false) {
      setPayment(IntialState);
      
      handleClose();
      handleDeleteMany()
       swal({
         title: "Product order Successfully !",
         text: "Go home page",
         icon: "success",
         button: "ok",
       }).then(()=> navigate("/"))
    } else if (payment.box1 === false && payment.box2 === true) {
      setPayment(IntialState);
      handleDeleteMany();
      handleClose();
    }
  };

  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button color="pink" variant="primary" onClick={handleShow}>
        Next
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Payment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Amount Need to Pay Rs.{amount}.00
          <Flex gap="15px" mt="15px">
            <input
              name="box1"
              type="checkbox"
              value={payment.box1}
              onChange={handlePaymentChange}
            />
            <Text>Cash on Delivery</Text>
          </Flex>
          <Flex mt="15px" gap="15px">
            <input
              name="box2"
              type="checkbox"
              value={payment.box2}
              onChange={handlePaymentChange}
            />
            <Text>Card Payment</Text>
          </Flex>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handlePaymentSubmit} variant="primary">
            ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default memo(ConfirmModal);
