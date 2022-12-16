import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";
import styles from "./Footer.module.css";

export default function App() {
  return (
    <MDBFooter className="text-center" color="white" bgColor="dark">
      <MDBContainer className="p-4">
        {/*newsletter */}
        <section className="mb-5">
          <form action="">
            <MDBRow className="d-flex justify-content-center">
              <MDBCol>
                <MDBBtn
                  outline
                  color="danger"
                  floating
                  className="m-1"
                  href="#!"
                  role="button"
                >
                  <MDBIcon fab icon="cc-visa" />
                </MDBBtn>

                <MDBBtn
                  outline
                  color="danger"
                  floating
                  className="m-1"
                  href="#!"
                  role="button"
                >
                  <MDBIcon fab icon="cc-mastercard" />
                </MDBBtn>

                <MDBBtn
                  outline
                  color="danger"
                  floating
                  className="m-1"
                  href="#!"
                  role="button"
                >
                  <MDBIcon fab icon="cc-amex" />
                </MDBBtn>

                <MDBBtn
                  outline
                  color="danger"
                  floating
                  className="m-1"
                  href="#!"
                  role="button"
                >
                  <MDBIcon fab icon="cc-amazon-pay" />
                </MDBBtn>
              </MDBCol>
              <MDBCol size="auto">
                <p className="pt-2">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md="5" start>
                <MDBInput
                  // contrast
                  type="email"
                  label="Email address"
                  // className="mb-4"
                  className={styles.input}
                />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color="light" type="submit" className="mb-4">
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className="" >
          <MDBRow>
            <MDBCol lg="3" md="8" className="mb-4 mb-md-0">
              <h5 className="text-uppercase fw-bold ">CONTACT INFO</h5>
              <p style={{color:"#dd0285" , marginBottom: "20px" }}>------------------</p>

              <ul className={styles.ul} style={{ lineHeight: "50px" }}>
                <li>
                  <a href="#!">(+91) 7877061041</a>
                </li>
                <li>
                  <a href="#!">sales@beautybebo.com</a>
                </li>
                <li>
                  <a href="#!">Open time: 10:00AM - 7:00PM</a>
                </li>
                <MDBCol className="mb-4">
                  <MDBBtn
                    outline
                    color="danger"
                    floating
                    className="m-1"
                    href="#!"
                    role="button"
                  >
                    <MDBIcon fab icon="facebook-f" />
                  </MDBBtn>

                  <MDBBtn
                    outline
                    color="danger"
                    floating
                    className="m-1"
                    href="#!"
                    role="button"
                  >
                    <MDBIcon fab icon="twitter" />
                  </MDBBtn>

                  <MDBBtn
                    outline
                    color="danger"
                    floating
                    className="m-1"
                    href="#!"
                    role="button"
                  >
                    <MDBIcon fab icon="google" />
                  </MDBBtn>

                  <MDBBtn
                    outline
                    color="danger"
                    floating
                    className="m-1"
                    href="#!"
                    role="button"
                  >
                    <MDBIcon fab icon="instagram" />
                  </MDBBtn>
                </MDBCol>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase  fw-bold ">QUIK LINKS</h5>
              <p style={{color:"#dd0285" , marginBottom: "20px" }}>------------------</p>

              <ul className={styles.ul}>
                <li>
                  <a href="#!">Abount Us</a>
                </li>
                <li>
                  <a href="#!">Contact Us</a>
                </li>
                <li>
                  <a href="#!">Terms & Condition</a>
                </li>
                <li>
                  <a href="#!">Privacy Policy</a>
                </li>
                <li>
                  <a href="#!">Return & Refund Policy</a>
                </li>
                <li>
                  <a href="#!">Shipping Policies</a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase  fw-bold ">CUSOTMER INFORMATION</h5>
              <p style={{color:"#dd0285" , marginBottom: "20px" }}>------------------------------</p>

              <ul className={styles.ul}>
                <li>
                  <a href="#!">My Account</a>
                </li>
                <li>
                  <a href="#!">Track Your Order</a>
                </li>
                <li>
                  <a href="#!">Order Reuturn</a>
                </li>
                <li>
                  <a href="#!">Wishlist</a>
                </li>
                <li>
                  <a href="#!">News & Events</a>
                </li>
                <li>
                  <a href="#!">FAQ</a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase  fw-bold ">CATEGORIES</h5>
              <p style={{color:"#dd0285" , marginBottom: "20px" }}>-----------------</p>

              <ul className={styles.ul}>
                <li>
                  <a href="#!">Makeup</a>
                </li>
                <li>
                  <a href="#!">Skin</a>
                </li>
                <li>
                  <a href="#!">Hair</a>
                </li>
                <li>
                  <a href="#!">Personal Care</a>
                </li>
                <li>
                  <a href="#!">Mom and Baby Care</a>
                </li>
                <li>
                  <a href="#!">Fragarance</a>
                </li>
                <li>
                  <a href="#!">Ayurveda</a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2020 Copyright:
        <a className="text-white" href="/">
         PreetyPink.com
        </a>
      </div>
    </MDBFooter>
  );
}
