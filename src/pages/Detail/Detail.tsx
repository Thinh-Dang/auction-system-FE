import ProductContainer from "./components/ProductContainer";

const product = {
   id: "1",
   img: "../../../public/images/products/antiqueclock.png",
   productName: "Roman Statues",
   year: 1192,
   type: "Weapons",
   price: 123,
   bids: 14,
   endDate: "2022-12-25",
};

const Detail = () => {
   return (
      <section className="heading-title w-full">
         <div className="title flex flex-col items-center justify-center">
            <h2 className="font-semibold text-[3.8rem] leading-[6rem]">
               Antique Detail
            </h2>
            <p className="description text-2xl">
               See the detail of the antique you interested
            </p>
         </div>
         <ProductContainer product={product} />
      </section>
   );
};

export default Detail;
