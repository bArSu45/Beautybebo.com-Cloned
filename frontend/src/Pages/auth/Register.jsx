import "./Register.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import ValidationForm from "./ValidationForm";
// import swal from "sweetalert";

function Register() {
  return (
    <div className="register_page">
      <div className="register_auth">
        <div className="signup_fb_google">
          <p className="about_you">About You</p>
          <p className="sign_up_with">Sign Up With</p>

          <div className="facebook_google">
            <div className="facebook">
              <FacebookIcon
                style={{
                  color: "blue",
                  width: "30px",
                  height: "30px",
                }}
              />
              <p className="facebook_name">Facebook</p>
            </div>
            <div className="google">
              <GoogleIcon
                style={{
                  color: "#f73c02",
                  width: "30px",
                  height: "30px",
                }}
              />
              <p className="google_name">Google</p>
            </div>
          </div>

          <hr
            style={{
              marginTop: "40px",
              color: "1px solid gray",
            }}
          />
        </div>

        <div className="signup_form">
          <p className="create_email_text">Or create an email account</p>

          <ValidationForm />
        </div>
      </div>
    </div>
  );
}

export default Register;
