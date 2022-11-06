import ProductsSection from "../../components/Products/ProductsSection";
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
const products = [
   {
      id: "1",
      img: "./images/products/romanstatues.png",
      productName: "Roman Statues",
      year: 1192,
      type: "Weapons",
      price: 123,
      bids: 14,
      endDate: "2022-10-30",
   },
   {
      id: "2",
      img: "./images/products/usknife.png",
      productName: "US Knife",
      year: 922,
      type: "Vases",
      price: 12,
      bids: 11,
      endDate: "2022-12-27",
   },
   {
      id: "3",
      img: "./images/products/vintageclock.png",
      productName: "Antique Vintage Watch",
      year: 11,
      type: "Weapons",
      price: 9999,
      bids: 14,
      endDate: "2022-12-29",
   },
   {
      id: "4",
      img: "./images/products/antiqueclock.png",
      productName: "Roman Clock",
      year: 1192,
      type: "Clocks",
      price: 123,
      bids: 16,
      endDate: "2022-12-30",
   },
   {
      id: "5",
      img: "./images/products/antiqueclock.png",
      productName: "Roman Clock",
      year: 1192,
      type: "Clocks",
      price: 123,
      bids: 16,
      endDate: "2022-12-30",
   },
];

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
         <ProductsSection
            title="Recently Added"
            description={
               "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget in mattis lacus urna, neque lectus ultrices. "
            }
            products={products}
         />
      </section>
   );
};

export default Detail;
