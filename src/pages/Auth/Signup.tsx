import { FaUserAlt } from "react-icons/fa";
import { HiLockClosed } from "react-icons/hi";
import { MdAlternateEmail, MdPhone } from "react-icons/md";
import { Link } from "react-router-dom";
import { Button } from "../../components";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

const signUpSchema = Yup.object().shape({
   username: Yup.string()
      .min(4, "Username must be at least 4 characters")
      .required("Required"),
   email: Yup.string().email("Invalid email").required("Required"),
   password: Yup.string()
      .min(8, "Your password must contain at least 8 characters")
      .matches(
         new RegExp(
            "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&]{8,}"
         ),
         "Your password must contain at least one uppercase letter, one lowercase letter, one number and one special character"
      )
      .required("Required"),
   passwordConfirmation: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords do not match!"
   ),
   phoneNumber: Yup.string()
      .matches(
         new RegExp("(84|0[3|5|7|8|9])+([0-9]{8})"),
         "Invalid phone number"
      )
      .max(10, "Invalid phone number")
      .required("Required"),
});

const Signup = () => {
   return (
      <section className="w-full h-screen pt-[4rem] flex px-[9rem] justify-center">
         <div className="w-full flex flex-col items-center">
            <div className="w-[40rem] h-auto flex flex-col items-center gap-4">
               <h2 className="text-6xl font-semibold">Create Account!</h2>
               <p className="text-2xl text-gray-600">
                  Exploring various unique Antique in our Website
               </p>
               <Formik
                  initialValues={{
                     username: "",
                     email: "",
                     password: "",
                     passwordConfirmation: "",
                     phoneNumber: "",
                  }}
                  validationSchema={signUpSchema}
                  onSubmit={(values) => console.log(values)}
               >
                  {({ errors, touched }) => (
                     <Form className="w-full">
                        <div className="w-full flex flex-col gap-3 my-8 relative">
                           <label htmlFor="username" className="text-2xl">
                              Username:
                           </label>
                           <Field
                              type="username"
                              name="username"
                              placeholder="Enter your username..."
                              className="w-full h-[4.5rem] border border-solid rounded-xl border-gray-400 shadow-lg focus:border-2 
          focus:border-blue-500 focus-within:border-main-light_blue outline-none text-2xl p-5"
                           />
                           <FaUserAlt className="text-3xl absolute right-4 bottom-5" />
                        </div>
                        {errors.username && touched.username ? (
                           <p className="text-red-500 text-xl -mt-5">
                              {errors.username}
                           </p>
                        ) : null}
                        <div className="w-full flex flex-col gap-3 my-8 relative">
                           <label htmlFor="email" className="text-2xl">
                              Email:
                           </label>
                           <Field
                              name="email"
                              placeholder="Enter your email address"
                              className="w-full h-[4.5rem] border border-solid rounded-xl border-gray-400 shadow-lg focus:border-2 
          focus:border-blue-500 focus-within:border-main-light_blue outline-none text-2xl p-5"
                           />
                           <MdAlternateEmail className="text-4xl absolute right-4 bottom-4" />
                        </div>
                        {errors.email && touched.email ? (
                           <p className="text-red-500 text-xl -mt-5">
                              {errors.email}
                           </p>
                        ) : null}
                        <div className="w-full flex flex-col gap-3 my-8 relative">
                           <label htmlFor="password" className="text-2xl">
                              Password:
                           </label>
                           <Field
                              type="password"
                              name="password"
                              placeholder="Enter your password here"
                              className="w-full h-[4.5rem] border border-solid rounded-xl border-gray-400 shadow-lg focus:border-2 
          focus:border-blue-500 focus-within:border-main-light_blue outline-none text-2xl p-5"
                           />
                           <HiLockClosed className="text-4xl absolute right-4 bottom-4" />
                        </div>
                        {errors.password && touched.password ? (
                           <p className="text-red-500 text-xl -mt-5">
                              {errors.password}
                           </p>
                        ) : null}
                        <div className="w-full flex flex-col gap-3 my-8 relative">
                           <label
                              htmlFor="passwordConfirmation"
                              className="text-2xl"
                           >
                              Confirm Password:
                           </label>
                           <Field
                              type="password"
                              name="passwordConfirmation"
                              placeholder="Enter your password here"
                              className="w-full h-[4.5rem] border border-solid rounded-xl border-gray-400 shadow-lg focus:border-2 
          focus:border-blue-500 focus-within:border-main-light_blue outline-none text-2xl p-5"
                           />
                           <HiLockClosed className="text-4xl absolute right-4 bottom-4" />
                        </div>
                        {errors.passwordConfirmation &&
                        touched.passwordConfirmation ? (
                           <p className="text-red-500 text-xl -mt-5">
                              {errors.passwordConfirmation}
                           </p>
                        ) : null}
                        <div className="w-full flex flex-col gap-3 my-8 relative">
                           <label htmlFor="phoneNumber" className="text-2xl">
                              Phone Number:
                           </label>
                           <Field
                              name="phoneNumber"
                              placeholder="Enter your phone number"
                              className="w-full h-[4.5rem] border border-solid rounded-xl border-gray-400 shadow-lg focus:border-2 
          focus:border-blue-500 focus-within:border-main-light_blue outline-none text-2xl p-5"
                           />
                           <MdPhone className="text-4xl absolute right-4 bottom-4" />
                        </div>
                        {errors.phoneNumber && touched.phoneNumber ? (
                           <p className="text-red-500 text-xl -mt-5">
                              {errors.phoneNumber}
                           </p>
                        ) : null}
                        <div className="w-4/5 bg-gray-500 h-1 my-10 mx-auto"></div>
                        <div className="w-full group">
                           <Button
                              classes="w-full mt-8 bg-main-orange group-hover:bg-[#ff7b29db] text-white text-[1.6rem]  font-medium
              transition-all ease-in-out duration-400 text-3xl text-2xl justify-center "
                              content="Register"
                              type="submit"
                           />
                        </div>
                        <div className="w-full flex items-center justify-center text-xl mt-8">
                           <p>
                              Already have an account?{" "}
                              <Link to="/signin">
                                 <span className="text-blue-400 cursor-pointer hover:underline">
                                    Sign in
                                 </span>
                              </Link>
                           </p>
                        </div>
                     </Form>
                  )}
               </Formik>
            </div>
         </div>
      </section>
   );
};

export default Signup;
