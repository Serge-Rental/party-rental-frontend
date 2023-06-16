import React, { useState, useEffect } from 'react';
import './Contact.css'
import { useForm } from "react-hook-form";

function Contact(props) {
    const {
        register,
        handleSubmit,
        reset,
        formState,
        formState: { errors, isSubmitSuccessful },
      } = useForm();
      const [contactInfo, setContactInfo] = useState([])

      const onSubmit = (data) => {
        console.log("contact-form data", data)
        setContactInfo(data)
      };
      useEffect(() => {
        if (formState.isSubmitSuccessful) {
          reset({
            firstName:"",
            lastName:"",
            email: "",
            message:""
            
          });
        }
      }, [formState, contactInfo, reset]);
    //   console.log("form", contactInfo.length)
    return (
        <div className="contact">
            <h1>We want to hear from you</h1>
            <div className="contact-image-text">
                <div className="contact-image"></div>
                 <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                    {errors.firstName?.type === 'required' && <p role="alert">*First name is required</p>} 
                    <input
                    className={`${
                        errors.firstName?.type === "required" && "error-control"
                    }`}
                    {...register("firstName", { required: true, maxLength: 20 })}
                    placeholder="First Name"
                    aria-invalid={errors.firstName ? "true" : "false"}
                    />
                    
                    <input
                    className={`${
                        errors.lastName?.type === "required" && "error-control"
                    }`}
                    {...register("lastName", { required: true, maxLength: 20 })}
                    placeholder="Last Name"
                    aria-invalid={errors.firstName ? "true" : "false"}
                    />
                    {/* {errors.firstName?.type === 'required' && <p role="alert">*Last name is required</p>} */}

                    <input
                    className={`${
                        errors.email?.type === "required" && "error-control"
                    }`}
                    {...register("email", { required: true, maxLength: 25 })}
                    placeholder="Email"
                    />
                    <textarea
                    className={`${
                        errors.message?.type === "required" && "error-control"
                    }`}
                    {...register("message", { required: true, maxLength: 25 })}
                    placeholder="message"
                    rows={5}
                    />
                    <input type="submit" />
                    {/* <button type="submit">
                        Confirm and Save
                    </button> */}
                    {isSubmitSuccessful &&
                    <p className="contact-sucess">Message Sent Successfuly</p>
                    // <p className="contact-sucess">Oops! Something went wrong</p>
                    }
                </form>
            </div>
           
        </div>
    );
}

export default Contact;