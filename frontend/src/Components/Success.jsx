import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function Success({ containt, btn, access }) {
  const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
      
    };
  const handleShow = () => setShow(true);

    
  return (
    <>
      <Button variant="primary" onClick={access ? handleShow : handleClose}>
        {btn}
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{containt}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
