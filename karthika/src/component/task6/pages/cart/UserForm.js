import { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./UserForm.module.css"
const UserForm = () => {
    const navigate = useNavigate();
    const navigateToPaymentStep = () => {
        navigate("/payment-mode", {
          state: {
         ...loginData
          }
        });
      };
  const [enableButton, setEnableButton] = useState(true);
  const [loginData, setLoginData] = useState({
    firstname: null,
    email: null,
    address: null,
    city:null,
    mobile:null,
    errors: {
      firstname: "",
      email: "",
      address: "",
      city:"",
      mobile:""
    }
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    setEnableButton(true);
    alert(`SUCCESSFUL - NAME: ${loginData.firstname}`);
    setLoginData((prevLoginData) => ({
      ...prevLoginData,
      firstname: "",
      email: "",
      address: "",
      city:"",
      mobile:"",

      errors: {
        firstname: "",
        email: "",
        address: "",
        city:"",
        mobile:""
      }
    }));
  };
  const handleChange = (e) => {
    setLoginData((prevLoginData) => ({
      ...prevLoginData,
      [e.target.name]: e.target.value
    }));

    console.log(validate(loginData));

    if (validate(!loginData)) {
      setEnableButton(false);
    } else {
      setEnableButton(true);
    }
  };
  const validate = () => {
    let isValid = true;
    let regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(loginData.firstname, "name");
    if (loginData.firstname?.length < 2) {
      isValid = false;
      setLoginData((prevLoginData) => ({
        ...prevLoginData,
        errors: {
          ...prevLoginData.errors,
          firstname: "Full Name must be at least 4 characters long!"
        }
      }));
    } else if (loginData.firstname?.length > 1) {
      setLoginData((prevLoginData) => ({
        ...prevLoginData,
        errors: {
          ...prevLoginData.errors,
          firstname: ""
        }
      }));
      isValid = true;
    }
    if (loginData.email?.length < 2) {
      isValid = false;
      setLoginData((prevLoginData) => ({
        ...prevLoginData,
        errors: {
          ...prevLoginData.errors,
          email: "Email is required"
        }
      }));
    } else if (regEmail.test(loginData.email)
    ) {
      setLoginData((prevLoginData) => ({
        ...prevLoginData,
        errors: {
          ...prevLoginData.errors,
          email: "VAILD EMAIL !!"
        }
      }));

      isValid = true;
    }
    if (loginData.address?.length < 6) {
      isValid = false;
      setLoginData((prevLoginData) => ({
        ...prevLoginData,
        errors: {
          ...prevLoginData.errors,
          address: "address must be at least 8 characters long!"
        }
      }));
    } else if (loginData.address?.length > 3) {
      setLoginData((prevLoginData) => ({
        ...prevLoginData,
        errors: {
          ...prevLoginData.errors,
          address: ""
        }
      }));
      isValid = true;
    }
    return isValid;
  };

  return (
    <>
      <div className={classes.border}>
        <h2>Please Fill your Details before go to Order Confirmation Page:</h2>
        <div>
          <form onSubmit={handleSubmit} noValidate>
            <div>
              <label>Full Name</label>
              <input
                type="text"
                value={loginData.firstname}
                name="firstname"
                placeholder="firstname"
                onChange={handleChange}
                noValidate
              />
              {loginData.errors.firstname.length > 0 && (
                <span className="error">{loginData.errors.firstname}</span>
              )}
            </div>


            <div>
              <label>Address</label>
              <input
                type="text"
                value={loginData.address}
                name="address"
                placeholder="Address"
                onChange={handleChange}
                noValidate
              />
              {loginData.errors.address.length > 0 && (
                <span className="error">{loginData.errors.address}</span>
              )}
            </div>


            <div>
              <label>Email</label>
              <input
                type="email"
                value={loginData.email}
                name="email"
                placeholder="Enter the Email Address"
                onChange={handleChange}
                noValidate
              />
              {loginData.errors.email.length > 0 && (
                <span className="error">{loginData.errors.email}</span>
              )}
            </div>
            <div>
              <label>City</label>
              <input
                type="text"
                value={loginData.city}
                name="city"
                placeholder="City"
                onChange={handleChange}
                noValidate
              />
              {loginData.errors.city.length > 0 && (
                <span className="error">{loginData.errors.city}</span>
              )}
            </div>

            <div>
              <label>Mobile</label>
              <input
                type="number"
                value={loginData.mobile}
                name="mobile"
                placeholder="Mobile"
                onChange={handleChange}
                noValidate
              />
              {loginData.errors.mobile.length > 0 && (
                <span className="error">{loginData.errors.mobile}</span>
              )}
            </div>
            <div className="submit">
              <button type="submit" onClick={navigateToPaymentStep} disabled={enableButton}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserForm;
