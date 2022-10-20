import { MdAlternateEmail } from "react-icons/md";
import { HiLockClosed } from "react-icons/hi";
import Button from "../../components/Button";

const Signin = () => {
  const handleLogin = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };
  return (
    <section className="w-full h-screen pt-[4rem] flex px-[9rem]">
      <div className="w-full flex flex-col items-center">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-6xl font-semibold">Welcome Back!</h2>
          <p className="text-2xl text-gray-600">
            Login to see the biggest Antique Collection Website
          </p>

          <form className="w-full">
            <div className="w-full flex flex-col gap-3 my-8 relative">
              <label htmlFor="email" className="text-2xl">
                Email:
              </label>
              <input
                type="emailInput"
                required
                id="emailInput"
                size={20}
                placeholder="Enter your email address"
                className="w-full h-[4.5rem] border border-solid rounded-xl border-gray-400 shadow-lg focus:border-2 
          focus:border-blue-500 focus-within:border-main-light_blue outline-none text-h2 p-5"
              />
              <MdAlternateEmail className="text-4xl absolute right-8 bottom-4" />
            </div>

            <div className="w-full flex flex-col gap-3 my-8 relative">
              <label htmlFor="passwordInput" className="text-2xl">
                Password:
              </label>
              <input
                type="password"
                required
                id="passwordInput"
                size={30}
                placeholder="Enter your password here"
                className="w-full h-[4.5rem] border border-solid rounded-xl border-gray-400 shadow-lg focus:border-2 
          focus:border-blue-500 focus-within:border-main-light_blue outline-none text-h2 p-5"
              />
              <HiLockClosed className="text-4xl absolute right-8 bottom-4" />
            </div>

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
                  onClick={handleLogin}
                >
                  Recovery Password
                </a>
              </div>
            </div>

            <div className="w-full group">
              <Button
                classes="mt-8 bg-gradient-to-tr from-orange-400 to-orange-500 group-hover:from-blue-400 group-hover:to-main-light_blue
              transition-all ease-in-out duration-400 text-3xl"
                content="Login"
              />
            </div>

            <div className="w-4/5 bg-gray-500 h-1 my-10 mx-auto"></div>

            <div className="w-full flex items-center justify-center text-xl">
              <p>
                Don't have an account yet?{" "}
                <span className="text-blue-400 cursor-pointer hover:underline">Sign up</span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Signin;
