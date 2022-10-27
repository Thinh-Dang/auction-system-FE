import { MdAlternateEmail } from "react-icons/md";
import { HiLockClosed } from "react-icons/hi";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

const signInSchema = Yup.object().shape({
   email: Yup.string().email("Invalid email").required("Required"),
   password: Yup.string()
      .min(8, "Your password must contain at least 8 characters")
      .required("Required"),
});
const Signin = () => {
   return (
      <section className="w-full h-screen pt-[4rem] flex px-[9rem]">
         <div className="w-full flex flex-col items-center">
            <div className="min-w-[40rem] flex flex-col items-center gap-4">
               <h2 className="text-6xl font-semibold">Welcome Back!</h2>
               <p className="text-2xl text-gray-600">
                  Login to see the biggest Antique Collection Website
               </p>
               <Formik
                  initialValues={{
                     email: "",
                     password: "",
                  }}
                  validationSchema={signInSchema}
                  onSubmit={(values) => console.log(values)}
               >
                  {({ errors, touched }) => (
                     <Form className="w-full">
                        <div className="w-full flex flex-col gap-3 my-8 relative">
                           <label htmlFor="email" className="text-2xl">
                              Email:
                           </label>
                           <Field
                              name="email"
                              placeholder="Enter your email address"
                              className="w-full h-[4.5rem] border border-solid rounded-xl border-gray-400 shadow-lg focus:border-2 
                      focus:border-blue-500 focus-within:border-main-light_blue outline-none text-2xl p-5 pr-20"
                           />
                           <MdAlternateEmail className="text-4xl absolute right-8 bottom-4" />
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
                      focus:border-blue-500 focus-within:border-main-light_blue outline-none text-2xl p-5 pr-20"
                           />
                           <HiLockClosed className="text-4xl absolute right-8 bottom-4" />
                        </div>
                        {errors.password && touched.password ? (
                           <p className="text-red-500 text-xl -mt-5">
                              {errors.password}
                           </p>
                        ) : null}

                        <div className="w-full flex items-center justify-between my-5">
                           <div className="w-1/2 flex gap-3">
                              <input type="checkbox" />
                              <p className="text-xl">Remember Me</p>
                           </div>
                           <div className="text-xl group">
                              {" "}
                              <a
                                 href="#"
                                 className="group-hover:text-main-light_blue transition-all ease-in-out duration-150"
                              >
                                 Recovery Password
                              </a>
                           </div>
                        </div>

                        <div className="w-full group">
                           <Button
                              classes="w-full mt-8 bg-main-orange group-hover:bg-[#ff7b29db] text-white text-[1.6rem]  font-medium
              transition-all ease-in-out duration-400 text-3xl text-h2 justify-center "
                              content="Login"
                              type="submit"
                           />
                        </div>

                        <div className="w-4/5 bg-gray-500 h-1 my-10 mx-auto"></div>

                        <div className="w-full flex items-center justify-center text-xl">
                           <p>
                              Don't have an account yet?{" "}
                              <Link to="/signup">
                                 <span className="text-blue-400 cursor-pointer hover:underline">
                                    Sign up
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
export default Signin;
