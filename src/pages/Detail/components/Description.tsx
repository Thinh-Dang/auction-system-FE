const Description = ({ product }: any) => {
   return (
      <div className="product-description flex flex-col mt-16 gap-12">
         <div className="description-menu flex flex-row gap-10 items-center justify-center">
            <p
               className="before:-bottom-2 before:absolute before:bg-gradient-to-tr
                     before:bg-orange-500 before:content before:h-1 before:left-0 before:rounded-lg
                    before:w-full capitalize duration-150 ease-in-out font-semibold from-orange-400
                    relative text-2xl text-black to-orange-600 transition-all cursor-pointer
                    "
            >
               Description
            </p>

            <p
               className="text-2xl font-semibold cursor-pointer text-gray-600
            transition-all ease-in-out duration-150 hover:text-black"
            >
               Additional Information
            </p>
            <p
               className="text-2xl font-semibold cursor-pointer text-gray-600
            transition-all ease-in-out duration-150 hover:text-black"
            >
               Shipping Rates
            </p>
         </div>
         <p className="w-full h-0.5 bg-gray-300 mt-5"></p>
         <div className="description-content">
            <p className="text-2xl text-gray-600">
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
               inventore quo porro amet. Pariatur, vitae molestiae ipsa omnis
               temporibus eveniet quasi, eos explicabo eum illum veniam et
               corrupti ratione facilis? Lorem ipsum dolor sit amet consectetur
               adipisicing elit. Est amet hic asperiores repudiandae possimus
               repellat, veniam odio eaque. Modi sint molestias corrupti
               deleniti dicta tempore fugiat! Magni deserunt illum cupiditate?
               Lorem ipsum, dolor sit amet consectetur adipisicing elit.
               Reprehenderit, quo, assumenda eum voluptas maxime at repellat
               fuga ea doloremque doloribus dolores quas explicabo. Vel
               molestiae nobis perferendis quaerat quibusdam ratione?
            </p>
         </div>
         <p className="w-full h-0.5 bg-gray-300 mt-5"></p>
      </div>
   );
};

export default Description;
