import { MdOutlineAttachMoney } from "react-icons/md";

import TimeAgo from "timeago-react";
import { Button } from "../../../components";

const Content = ({ product }: any) => {
   return (
      <div className="product-detail-container content-container w-[42%] flex flex-col gap-10">
         <div className="content-container title">
            <h2 className="text-5xl font-medium">{product.productName}</h2>
            <p className="text-2xl pt-5 text-main-base_grey">
               Highest Bid{" "}
               <span className="font-medium text-main-gray">
                  ${product.price}
               </span>
            </p>
         </div>

         <div className="content-container infomation flex flex-col gap-5">
            <p className="text-2xl font-medium">Antique Infomation</p>
            <p className="text-2xl text-main-light_grey">
               <span className="text-gray-800 font-medium">Type</span>{" "}
               {product.type}
            </p>
            <p className="text-2xl text-main-light_grey">
               <span className="text-gray-800 font-medium">Year</span>{" "}
               {product.year}
            </p>
            <div className="flex flex-row text-2xl gap-5">
               <p className="text-main-light_grey">
                  <span className="text-gray-800 font-medium">Bids</span>{" "}
                  {product.bids} bids so far
               </p>
               <a
                  href="#"
                  className="underline hover:text-blue-400 transition-all ease-in-out duration-100"
               >
                  See all
               </a>
            </div>
            <span className="text-2xl text-main-light_grey">
               <span className="text-gray-800 font-medium">End time</span>{" "}
               closes{" "}
               <TimeAgo datetime={new Date(product.endDate)} locale="en" />
            </span>
         </div>

         <div className="content-container product-seller">
            <p className="text-2xl font-medium">Seller</p>
            <div className="flex gap-5 mt-5">
               <img
                  src="https://res.cloudinary.com/demo/image/twitter_name/BillClinton.jpg"
                  alt="sellerImage"
                  className="w-14 min-w-[30px] h-14 min-h-[30px] rounded-full shadow-xl cursor-pointer 
                  hover:scale-125 transition-all ease-in-out duration-150"
               />
            </div>
         </div>

         <div className="content-container input-bid">
            <p className="text-2xl font-medium">Place your bid</p>
            <div className="w-full h-[5rem] flex mt-5">
               <div className="relative">
                  <input
                     type="number"
                     className="w-full h-full border border-solid rounded-xl
                 border-gray-400 shadow-lg focus:border-2focus:border-blue-500
                 focus-within:border-main-light_blue outline-none text-2xl p-5 pr-8"
                  />
                  <MdOutlineAttachMoney className="text-3xl absolute right-0 top-0 bottom-0 m-auto mr-3" />
               </div>
               <Button
                  classes="text-2xl bg-main-blue text-white rounded-xl ml-8"
                  content="Bid"
               />
            </div>
         </div>

         <div className="content-container product-tag flex flex-col gap-5 border border-y-gray-500 text-2xl">
            <p className="w-full h-0.5 bg-gray-300"></p>
            <div className="flex gap-5">
               <p className="font-medium">
                  Category:{" "}
                  <span className="cursor-pointer text-main-light_blue">
                     {product.type}
                  </span>
               </p>
               <p className="font-medium">
                  Tags:{" "}
                  <span className="cursor-pointer text-main-light_blue">
                     Statues, Roman, Old, Antique,...
                  </span>
               </p>
            </div>
            <p className="w-full h-0.5 bg-gray-300"></p>
         </div>
      </div>
   );
};

export default Content;
