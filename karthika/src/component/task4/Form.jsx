import { useState } from "react"

const UserForm =()=>{
    const [formData,setFormData]= useState({
        Name:"",
        Email:"",
        Message:""

});
const [isDisabled, setIsDisabled] = useState(true);
const onChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value
    }));
    if (validateForm()) {
        setFormData((prevFormData) => ({
          ...prevFormData
        }));
        setIsDisabled(false);
      } else {
        setIsDisabled(true);
        console.log("INVALID FORM!!");
      }
  };
  
  const submitForm = (event) => {
    event.preventDefault();
    console.log(formData);
        setFormData((prevFormData) => ({
          ...prevFormData
        }));
  
  };
  const validateForm = () => {
    let isValid = true;
     if (formData.Name.trim().length < 3) {
        isValid = false;
        setFormData((prevFormData) => ({
            ...prevFormData
          }));
     }
   
     if (formData.Message.trim().length < 3) {
        
        isValid = false;
        setFormData((prevFormData) => ({
            ...prevFormData
          }));
     }
     let regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     if(!regEmail.test(formData.Email)){
        isValid = false;
        setFormData((prevFormData) => ({
            ...prevFormData
          }));
      }
     
    return isValid;
  };


    return(
        <>
         <form onSubmit={submitForm}>
            <div >
                Name:<input type="text"
                value ={formData.Name}
                onChange={onChange}
                name="Name">
                </input>
            </div>
            <div>
                Email:<input type="text"
                value ={formData.Email}
                name="Email"
               onChange={onChange}
               >
                </input>
            </div>
            <div>
                Message:<textarea 
                type="text"
                value={formData.Message}
                onChange={onChange}
                name="Message"
                >

                </textarea>
            </div>
            <button disabled={isDisabled} type="submit">Submit Form</button>
        </form>
        </>
    )
}

export {UserForm}