const ImgSlider = ({ product }: any) => {
   return (
      <div className="img-slider w-[55%] flex flex-row gap-8">
         <div className="main-img flex w-[75%] h-[450px]">
            <img
               src="https://cdn.pixabay.com/photo/2013/09/23/20/28/goddess-185457_960_720.jpg"
               // src="../../../public/images/products/antiqueclock.png"
               alt="DetailImage"
               className="w-full h-full object-cover rounded-lg"
            />
         </div>

         <div className="child-img h-[450px] w-[20%] flex flex-col gap-12 items-center">
            <img
               src="https://cdn.pixabay.com/photo/2015/05/20/00/10/angel-774554_960_720.jpg"
               alt=""
               className="w-[90px] h-[90px] rounded-lg hover:scale-110 transition-all ease-in-out 
               duration-150"
            />

            <img
               src="https://cdn.pixabay.com/photo/2015/05/20/00/10/angel-774554_960_720.jpg"
               alt=""
               className="w-[90px] h-[90px] rounded-lg hover:scale-110 transition-all ease-in-out 
               duration-150"
            />

            <img
               src="https://cdn.pixabay.com/photo/2015/05/20/00/10/angel-774554_960_720.jpg"
               alt=""
               className="w-[90px] h-[90px] rounded-lg hover:scale-110 transition-all ease-in-out 
               duration-150"
            />
         </div>
      </div>
   );
};

export default ImgSlider;
