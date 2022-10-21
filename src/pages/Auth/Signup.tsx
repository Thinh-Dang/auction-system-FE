import { FaUserAlt } from "react-icons/fa";
const Signup = () => {
  return (
    <section className="w-full h-screen pt-16 flex px-[9rem] items-center">
      <div className="w-full flex flex-col items-center">
        <div className="w-[40rem] flex flex-col items-center gap-4">
          <h2 className="text-6xl font-semibold">Create Account!</h2>
          <p className="text-2xl text-gray-600">
            Exploring various unique Antique in our Website
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
              <FaUserAlt className="text-4xl absolute right-8 bottom-4" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
