import { MdOutlineAttachMoney } from "react-icons/md";

const ProductContainer = ({ product }: IProductDetailContainerProps) => {
   return (
      <div className="product-detail-container w-full flex justify-between py-[9rem]">
         <img
            src={product.img}
            alt="imgDetail"
            className="w-[45%] h-[40rem] object-contain"
         />
         <div className="product-detail w-[45%] flex flex-col gap-10">
            <h2 className="product-title text-4xl font-semibold">
               {product.productName}
            </h2>
            <div className="flex justify-start text-3xl">
               <p className="font-semibold mr-52">
                  <span>$ </span>
                  {product.price}
               </p>
               <p className="mr-40">{product.bids} bids so far</p>
               <a href="#" className="underline hover:text-blue-400 text-2xl">
                  See all
               </a>
            </div>
            <p className="text-3xl font-semibold">
               Year <span className="font-normal">{product.year}</span>
            </p>
            <div className="flex items-start">
               <p
                  className="before:-bottom-2 before:absolute before:bg-gradient-to-tr
                    before:bg-orange-500 before:content before:h-1 before:left-0 before:rounded-lg
                    before:w-full capitalize duration-100 ease-in-out font-semibold from-orange-400 
                    relative text-3xl text-black to-orange-600 transition-all mr-52 cursor-pointer"
               >
                  Description
               </p>
               <p className="text-3xl cursor-pointer">Delivery & Return</p>
            </div>
            <div className="text-xl">
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi
               magni vero quae temporibus ducimus beatae voluptates obcaecati
               quos hic fugit quod, error, eos consequuntur soluta itaque! Sunt
               odio temporibus dolor!
            </div>
            <p className="text-2xl font-semibold underline cursor-pointer">
               Read more
            </p>
            <div className="flex items-start">
               <div className="relative">
                  <input
                     type="number"
                     className="w-[20rem] h-[4.5rem] border border-solid rounded-xl
                 border-gray-400 shadow-lg focus:border-2focus:border-blue-500 
                 focus-within:border-main-light_blue outline-none text-2xl p-5"
                  />
                  <MdOutlineAttachMoney className="text-3xl absolute right-0 top" />
               </div>
            </div>
         </div>
      </div>
   );
};

export default ProductContainer;
