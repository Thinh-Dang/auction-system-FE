const Signin = (props: IProps) => {
  return (
    <section className="w-full h-screen pt-20 flex">
      <div className="w-6/12 h-full bg-main-blue"></div>
      <div className="w-6/12 flex flex-col">
        <img src="" alt="" />
        <h1 className="text-h1 text-black text-center">Hello Again!</h1>
        <p className="text-2xl text-center pt-2">
          Login to see the world biggest Antique Collection Website
        </p>
        <div>
          <label htmlFor="emailInput" className="text-2xl">
            Email:
          </label>
          <input type="text" id="emailInput" className="w-[45.7rem] h-[5rem]" />
        </div>
      </div>
    </section>
  );
};
export default Signin;
