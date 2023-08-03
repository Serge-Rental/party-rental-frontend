import React, { useState, useEffect } from "react";
import "./Contact.css";
import "./Home.css";
import "./Googlemap.css";
import { useForm } from "react-hook-form";
import Googlemap from "./Googlemap";

function Contact(props) {
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors, isSubmitSuccessful },
  } = useForm();
  const [contactInfo, setContactInfo] = useState([]);

  const onSubmit = (data) => {
    console.log("contact-form data", data);
    setContactInfo(data);
  };
  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
    }
  }, [formState, contactInfo, reset]);
  //   console.log("form", contactInfo.length)
  return (
    <div className="contact">
      <h1>We want to hear from you</h1>
      <div className="contact-image-text">
        
        {/* <div className="contact-image"></div> */}
        <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="errors-container">
            {errors.firstName?.type === "required" && (
              <p role="alert">*First name is required</p>
            )}
            {errors.lastName?.type === "required" && (
              <p role="alert">*Last name is required</p>
            )}
            {errors.email?.type === "required" && (
              <p role="alert">*Email is required</p>
            )}
            {errors.message?.type === "required" && (
              <p role="alert">*Message is required</p>
            )}
          </div>
        
          <input
            className={`${
              errors.firstName?.type === "required" && "error-style"
            }`}
            {...register("firstName", { required: true, maxLength: 20 })}
            placeholder="First Name"
            type="text"
            aria-invalid={errors.firstName ? "true" : "false"}
          />

          <input
            className={`${
              errors.lastName?.type === "required" && "error-style"
            }`}
            {...register("lastName", { required: true, maxLength: 20 })}
            placeholder="Last Name"
            type="text"
            aria-invalid={errors.lastName ? "true" : "false"}
          />
          {/* {errors.firstName?.type === 'required' && <p role="alert">*Last name is required</p>} */}

          <input
            className={`${
              errors.email?.type === "required" && "error-style"
            }`}
            {...register("email", { required: true, maxLength: 25})}
            placeholder="Email"
            type="email"
            aria-invalid={errors.email ? "true" : "false"}
          />
          <textarea
            className={`${
              errors.message?.type === "required" && "error-style"
            }`}
            {...register("message", { required: true, maxLength: 50 })}
            placeholder="Message"
            rows={5}
            type="text"
            aria-invalid={errors.message ? "true" : "false"}
          />
          <input type="submit" />
          {/* <button type="submit">
                        Confirm and Save
                    </button> */}
          {
            isSubmitSuccessful && (
              <p className="contact-sucess">Message Sent Successfuly</p>
            )
            // <p className="contact-sucess">Oops! Something went wrong</p>
          }
        </form>
        <div className="home-contact bckgr-col">
          <div className="general-contact">
            <h2>Contact Us</h2>
            <h3>We’d love to work with you to make your next event amazing!</h3>
            <p>Our phone number is: (212) 062-2080</p>
            <p>Our showroom is located at: 4518 S 500 W New York, NY 84123</p>
            <ul>
              <li>Mon - Fri 8:00am - 5:30pm</li>
              <li>Saturday 8:00am - 4:30pm</li>
              <li>Closed Sundays</li>
            </ul>
          </div>
          <Googlemap />
        </div>
      </div>
      {/* <div className="home-contact bckgr-col">
      
        
        
        <div className="general-contact">
          <h2>Contact Us</h2>
          <h3>We’d love to work with you to make your next event amazing!</h3>
          <p>Our phone number is: (212) 062-2080</p>
          <p>Our showroom is located at: 4518 S 500 W New York, NY 84123</p>
          <ul>
            <li>Mon - Fri 8:00am - 5:30pm</li>
            <li>Saturday 8:00am - 4:30pm</li>
            <li>Closed Sundays</li>
          </ul>
        </div>
        <Googlemap />
      </div> */}
    </div>
  );
}

export default Contact;
