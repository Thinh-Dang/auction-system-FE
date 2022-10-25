import { FaUserAlt } from "react-icons/fa";
import { HiLockClosed } from "react-icons/hi";
import { MdAlternateEmail, MdPhone } from "react-icons/md";
import { Button } from "../../components";

const Signup = () => {
  return (
    <section className="w-full h-screen pt-[4rem] flex px-[9rem] justify-center">
      <div className="w-full flex flex-col items-center">
        <div className="w-[40rem] flex flex-col items-center gap-4">
          <h2 className="text-6xl font-semibold">Create Account!</h2>
          <p className="text-2xl text-gray-600">
            Exploring various unique Antique in our Website
          </p>
          <form className="w-full">
            <div className="w-full flex flex-col gap-3 my-8 relative">
              <label htmlFor="username" className="text-2xl">
                Username:
              </label>
              <input
                type="username"
                required
                id="username"
                size={20}
                placeholder="Enter your username..."
                className="w-full h-[4.5rem] border border-solid rounded-xl border-gray-400 shadow-lg focus:border-2 
          focus:border-blue-500 focus-within:border-main-light_blue outline-none text-h2 p-5"
              />
              <FaUserAlt className="text-3xl absolute right-4 bottom-5" />
            </div>
            <div className="w-full flex flex-col gap-3 my-8 relative">
              <label htmlFor="emailInput" className="text-2xl">
                Email:
              </label>
              <input
                type="emailInput"
                required
                id="emailInput"
                placeholder="Enter your email address"
                className="w-full h-[4.5rem] border border-solid rounded-xl border-gray-400 shadow-lg focus:border-2 
          focus:border-blue-500 focus-within:border-main-light_blue outline-none text-h2 p-5"
              />
              <MdAlternateEmail className="text-4xl absolute right-4 bottom-4" />
            </div>
            <div className="w-full flex flex-col gap-3 my-8 relative">
              <label htmlFor="passwordInput" className="text-2xl">
                Password:
              </label>
              <input
                type="password"
                required
                id="passwordInput"
                placeholder="Enter your password here"
                className="w-full h-[4.5rem] border border-solid rounded-xl border-gray-400 shadow-lg focus:border-2 
          focus:border-blue-500 focus-within:border-main-light_blue outline-none text-h2 p-5"
              />
              <HiLockClosed className="text-4xl absolute right-4 bottom-4" />
            </div>
            <div className="w-full flex flex-col gap-3 my-8 relative">
              <label htmlFor="phoneNumber" className="text-2xl">
                Phone Number:
              </label>
              <input
                type="password"
                required
                id="phoneNumber"
                placeholder="Enter your phone number"
                className="w-full h-[4.5rem] border border-solid rounded-xl border-gray-400 shadow-lg focus:border-2 
          focus:border-blue-500 focus-within:border-main-light_blue outline-none text-h2 p-5"
              />
              <MdPhone className="text-4xl absolute right-4 bottom-4" />
            </div>
            <div className="w-4/5 bg-gray-500 h-1 my-10 mx-auto"></div>
            <div className="w-full group">
              <Button
                classes="mt-8 bg-main-orange group-hover:bg-[#ff7b29db] text-white text-[1.6rem]  font-medium
              transition-all ease-in-out duration-400 text-3xl text-h2 justify-center "
                content="Register"
              />
            </div>
            <div className="w-full flex items-center justify-center text-xl mt-8">
              <p>
                Already have an account?{" "}
                <span className="text-blue-400 cursor-pointer hover:underline">
                  Sign in
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
