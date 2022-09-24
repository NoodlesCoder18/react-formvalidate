import React, {useState} from 'react';
import '../Component/Form.css';

function Form (){
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password:'',
        confirmPassword:'',
        phonenumber:''
    });
    const [gender,setGender]=useState("");
    const [submitted, setSubmitted] = useState(false);
    // const [valid, setValid] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
const [error,isError]=useState();
const [passerror,passisError]=useState();
const [conpasserror,conpassisError]=useState();
const [phoneerror,phoneisError]=useState();
const [emailerror,emailisError]=useState();

    const handleFirstNameInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            firstName: event.target.value,
        }));
    };
    const handleLastNameInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            lastName: event.target.value,
        }));
    };

    
    const handleEmailInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            email: event.target.value,
        }));
    };
    
    const handlePasswordInputChange = (event) => {
        event.persist();
       
        setValues((values) => ({
            ...values,
            password: event.target.value,
         
        }));
    };
    console.log(values.password)

    const handleconfirmPasswordInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            confirmPassword: event.target.value,
        }));
    };
    const handlegenderInputChange = (event) => {
        event.persist();
        setGender(event.target.value)
    }

   const handlephonenumberInputChange =(event) =>{
    event.persist();
    setValues((values) => ({
        ...values,
        phonenumber: event.target.value,
    }));
   };

    const handleOnChange = () => {
        setIsChecked(!isChecked);
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        let regex=/^[a-zA-Z]{10}$/;
        let res=regex.test(values.firstName)
     if(values.firstName=="") {
            isError("First name required")
            }
             else if(!res){
                isError("Firstname should be less than 10 letter")
 }
 else{
isError("")
 }
 let regexpass=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
 let respass=regexpass.test(values.password)
 if(values.password==""){
    passisError("Please enter your password")
 }

else if(!respass) {
     passisError("Minimum eight characters, at least one uppercase letter, one lowercase letter and one number")
     }
 else{
    passisError("")
}
if(values.confirmPassword==""){
    conpassisError(" Please enter your confirm password")
}
else if(values.password !==values.confirmPassword){
conpassisError("Password does not match")
}

else{
    conpassisError("")
}
let regexphone=/^\d{10}$/;
let resphone=regexphone.test(values.phonenumber)
if(values.phonenumber==""){
    phoneisError("Enter your Phone number")
}
else if(!resphone){
    phoneisError("Phone number should be 10 number")
}
else{
    phoneisError("")
}
let regexemail=/^[A-Za-z]+@[a-z]+\.[a-z]+$/;
let resemail=regexemail.test(values.email)
if(values.email==""){
    emailisError("Email is required")
}
else if(!resemail){
    emailisError("Email should matches sample@gmail.com")
}
else{
    emailisError("")
}

        setSubmitted(true);
        }
        
return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>

      <input
    id="first-name"
    className="form-field"
    type="text"
    disabled={submitted}
    placeholder="First Name"
    name="firstName"
    autoComplete='off'
    value={values.firstName}
    onChange={handleFirstNameInputChange}
/>
{error &&<span id='first-name-error'>{error}</span>}        
<input
    id="last-name"
    className="form-field"
    type="text"
    autoComplete='off'
    placeholder="Last Name"
    name="lastName"
    value={values.lastName}
    onChange={handleLastNameInputChange}
/>
 {submitted&& !values.lastName && <span id='last-name-error'>Last name is required</span>}
 <input
    id="email"
    className="form-field"
    type="text"
    autoComplete='off'
    placeholder="Email"
    name="email"
    value={values.email}
    onChange={handleEmailInputChange}
/>
{emailerror && <span id='email-error'>{emailerror}</span>}

<input
    id="phonenumber"
    className="form-field"
  type="number"
    autoComplete='off'
    placeholder="Phone Number"
    name="phonenumber"
    value={values.phonenumber}
    onChange={handlephonenumberInputChange}
/>
{phoneerror&&<span id='phonenumber-error'>{phoneerror}</span>}
<input
    id="password"
    className="form-field"
    type="text"
    autoComplete='off'
    placeholder="Password"
    name="password"
    value={values.password}
    onChange={handlePasswordInputChange}
/>

{passerror&& <span id='password-error'>{passerror}</span>}
<input
    id="confirm-password"
    className="form-field"
    type="password"
    autoComplete='off'
    placeholder="Confirm Password"
    name="confirmPassword"
    value={values.confirmPassword}
    onChange={handleconfirmPasswordInputChange}
/>
{conpasserror&& <span id='confirmPassword-error'>{conpasserror}</span>}
<select value={gender} onChange={handlegenderInputChange} autoComplete='off' className="form-field">
       <option value="">Select a Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Others">Others</option>
      </select>
      {submitted && !values.gender && <span id='gender-error'>Please select gender</span>}
    
        <input
        className="topping"
          type="checkbox"
          id="topping"
          name="topping"
          value="Paneer"
          checked={isChecked}
          onChange={handleOnChange}
        />
        Accept terms and conditions
        {submitted && !isChecked&&<span id='checkbox-error'>Please tick the checkbox</span>}
      
        <button className="form-field" type="submit">
         Register
        </button>
      </form>
    </div>
  );
}
  export default Form