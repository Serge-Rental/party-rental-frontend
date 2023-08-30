//unused component
import { useForm } from "react-hook-form";

const ShippingInfo = () => {
    const [shipping, setShipping] = useState([])
    const {
        register,
        handleSubmit,
        reset,
        formState,
        formState: { errors, isSubmitSuccessful },
      } = useForm();

      const onSubmit = (data) => {
        console.log("form data", data)
        setShipping(data)
      };
    
      // useEffect(() => {
      //   if (formState.isSubmitSuccessful) {
      //     reset({
      //       firstName:"",
      //       lastName:"",
      //       email: "",
      //       confirmEmail:"",
      //       street1: "",
      //       street2: "",
      //       city:"",
      //       state: "",
      //       zipCode: "",
      //       phone: ""
            
      //     });
      //   }
      // }, [formState, shipping, reset]);

    return (
        <div className="shipping">
        <p>Ship to</p>
        <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className={`${
            errors.firstName?.type === "required" && "error-control"
          }`}
          {...register("firstName", { required: true, maxLength: 20 })}
          placeholder="First Name"
          aria-invalid={errors.firstName ? "true" : "false"}
        />
        {/* {errors.firstName?.type === 'required' && <p role="alert">*First name is required</p>}  */}
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
        <input
          className={`${
            errors.confirmEmail?.type === "required" && "error-control"
          }`}
          {...register("confirmEmail", { required: true, maxLength: 25 })}
          placeholder="Confirm Email"
        />
        <input
          className={`${
            errors.street1?.type === "required" && "error-control"
          }`}
          {...register("street1", { required: true, maxLength: 20 })}
          placeholder="Street 1"
        />
        <input {...register("street2")} placeholder="Street 2 (optional)" />
        <input
            className={`${
                errors.city?.type === "required" && "error-control"
              }`}
          {...register("city", { required: true, maxLength: 20 })}
          placeholder="City"
        />
        <select
          className={`${
            errors.state?.type === "required" && "error-control"
          }`}
          {...register("state")}
        >
          <option value="newYork">New York</option>
          <option value="newJersey">New Jersey</option>
          <option value="connecticut">Connecticut</option>
        </select>
        <input
          className={`${
            errors.zipCode?.type === "required" && "error-control"
          }`}
          {...register("zipCode", { required: true, maxLength: 20 })}
          placeholder="Zip Code"
        />
        <input
          className={`${
            errors.phone?.type === "required" && "error-control"
          }`}
          {...register("phone", { required: true, maxLength: 20 })}
          placeholder="Phone Number"
        />
        <br></br>
        <button type="submit">
          Confirm and Save
        </button>
        {/* <input type="submit" /> */}
        </form>
        
      </div>
    )
}