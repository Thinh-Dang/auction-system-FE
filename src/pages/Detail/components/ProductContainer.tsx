import { MdOutlineAttachMoney } from "react-icons/md";
import TimeAgo from "timeago-react";
import { Button } from "../../../components";
import Content from "./Content";
import Description from "./Description";
import ImgSlider from "./ImgSlider";

const ProductContainer = ({ product }: IProductDetailContainerProps) => {
   return (
      // <div className="product-detail-container w-full flex justify-between pt-[4rem] md:pt-[9rem]">
      //    {/* UI for PC & tablet */}
      //    <div className="w-full hidden justify-between md:flex">
      //       <div className="w-[45%] h-[40rem]">
      //          <img
      //             src={product.img}
      //             alt="imgDetail"
      //             className="w-full h-full object-contain"
      //          />
      //       </div>
      //       <div className="product-detail w-[50%] flex flex-col gap-10">
      //          <h2 className="product-title text-4xl font-semibold">
      //             {product.productName}
      //          </h2>
      //          <div className="flex w-full justify-start text-3xl md:gap-10 lg:gap-24 ">
      //             <p>
      //                <span>$ </span>
      //                {product.price}
      //             </p>
      //             <p>{product.bids} bids so far</p>
      //             <a
      //                href="#"
      //                className="underline hover:text-blue-400 text-2xl"
      //             >
      //                See all
      //             </a>
      //          </div>
      //          <p className="text-3xl font-semibold">
      //             Year <span className="font-normal">{product.year}</span>
      //          </p>
      //          <p className="text-3xl font-semibold">
      //             Time left{" "}
      //             <span className="font-normal">
      //                closes{" "}
      //                <TimeAgo
      //                   datetime={new Date(product.endDate)}
      //                   locale="en"
      //                />
      //             </span>
      //          </p>
      //          <div className="flex items-start md:gap-10 lg:gap-28">
      //             <p
      //                className="before:-bottom-2 before:absolute before:bg-gradient-to-tr
      //               before:bg-orange-500 before:content before:h-1 before:left-0 before:rounded-lg
      //               before:w-full capitalize duration-100 ease-in-out font-semibold from-orange-400
      //               relative text-3xl text-black to-orange-600 transition-all cursor-pointer"
      //             >
      //                Description
      //             </p>
      //             <p
      //                className="text-3xl cursor-pointer transition-all ease-in-out duration-100
      //             hover:font-semibold"
      //             >
      //                Delivery & Return
      //             </p>
      //          </div>
      //          <div className="text-xl md:w-full lg:w-[85%]">
      //             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi
      //             magni vero quae temporibus ducimus beatae voluptates obcaecati
      //             quos hic fugit quod, error, eos consequuntur soluta itaque!
      //             Sunt odio temporibus dolor!
      //          </div>
      //          <p className="text-2xl font-semibold underline cursor-pointer">
      //             Read more
      //          </p>
      //          <div className="flex items-start">
      //             <div className="relative w-[20rem] h-[5rem]">
      //                <input
      //                   type="number"
      //                   className="w-full h-full border border-solid rounded-xl
      //            border-gray-400 shadow-lg focus:border-2focus:border-blue-500
      //            focus-within:border-main-light_blue outline-none text-2xl p-5 pr-10"
      //                />
      //                <MdOutlineAttachMoney className="text-3xl absolute right-0 top-0 bottom-0 m-auto mr-3" />
      //             </div>
      //             <Button
      //                classes="text-2xl bg-main-blue text-white rounded-xl px-16 ml-8 md:"
      //                content="Bid"
      //             />
      //          </div>
      //       </div>
      //    </div>
      //    {/* UI for mobile */}
      //    <div className="w-full flex flex-col justify-between md:hidden">
      //       <div className="img-container ">
      //          <img
      //             src={product.img}
      //             alt="imgDetail"
      //             className="w-full h-[40rem] object-contain"
      //          />
      //       </div>
      //       <div className="product-detail w-full flex flex-col gap-10">
      //          <h2 className="product-title text-4xl font-semibold">
      //             {product.productName}
      //          </h2>
      //          <div className="flex w-full justify-start text-3xl gap-12 ">
      //             <p className="font-semibold">
      //                <span>$ </span>
      //                {product.price}
      //             </p>
      //             <p>{product.bids} bids so far</p>
      //             <a
      //                href="#"
      //                className="underline hover:text-blue-400 text-2xl"
      //             >
      //                See all
      //             </a>
      //          </div>
      //          <p className="text-3xl font-semibold">
      //             Year <span className="font-normal">{product.year}</span>
      //          </p>
      //          <p className="text-3xl font-semibold">
      //             Time left{" "}
      //             <span className="font-normal">
      //                closes{" "}
      //                <TimeAgo
      //                   datetime={new Date(product.endDate)}
      //                   locale="en"
      //                />
      //             </span>
      //          </p>
      //          <div className="flex items-start gap-12">
      //             <p
      //                className="before:-bottom-2 before:absolute before:bg-gradient-to-tr
      //               before:bg-orange-500 before:content before:h-1 before:left-0 before:rounded-lg
      //               before:w-full capitalize duration-100 ease-in-out font-semibold from-orange-400
      //               relative text-3xl text-black to-orange-600 transition-all cursor-pointer"
      //             >
      //                Description
      //             </p>
      //             <p className="text-3xl cursor-pointer">Delivery & Return</p>
      //          </div>
      //          <div className="text-xl md:w-full lg:w-[75%]">
      //             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi
      //             magni vero quae temporibus ducimus beatae voluptates obcaecati
      //             quos hic fugit quod, error, eos consequuntur soluta itaque!
      //             Sunt odio temporibus dolor!
      //          </div>
      //          <p className="text-2xl font-semibold underline cursor-pointer">
      //             Read more
      //          </p>
      //          <div className="flex items-start">
      //             <div className="relative w-[20rem] h-[5rem]">
      //                <input
      //                   type="number"
      //                   className="w-full h-full border border-solid rounded-xl
      //            border-gray-400 shadow-lg focus:border-2focus:border-blue-500
      //            focus-within:border-main-light_blue outline-none text-2xl p-5 pr-8"
      //                />
      //                <MdOutlineAttachMoney className="text-3xl absolute right-0 top-0 bottom-0 m-auto mr-3" />
      //             </div>
      //             <Button
      //                classes="text-2xl bg-main-blue text-white rounded-xl ml-8"
      //                content="Bid"
      //             />
      //          </div>
      //       </div>
      //    </div>
      // </div>
      <div className="product-detail-container w-full flex flex-col pt-[4rem] pb-[16rem]">
         <div className="flex flex-row justify-between ">
            <ImgSlider />
            <Content product={product} />
         </div>
         <Description />
      </div>
   );
};

export default ProductContainer;
