import Button from '../Button'
import TimeAgo from 'timeago-react';
import * as timeago from 'timeago.js';
import en from 'timeago.js/lib/lang/en_US';
timeago.register('en', en);

const ProductsCard = ({product}: any) => {
  return (
    <div 
      className='flex p-8 flex-col min-w-[36rem] min-h-[50rem] 
      rounded-[1.2rem] justify-center items-center shadow-productCard'>
        <img 
          src={product.img} alt="antique" 
          className="product-img max-w-[32rem] w-[100%] h-auto object-cover" 
        />
        <div className="product-info flex flex-col gap-8 w-full mt-8">
            <span className='font-bold text-[2.2rem]'>{product.productName}</span>
            <div className='w-full flex justify-between'>
                <span className="product-year">Year {product.year}</span>
                <span className="product-year">{product.type}</span>
            </div>
            <div className="product-price w-full flex justify-between">
               <span>${product.price}</span>
               <Button content="Bid now" classes="bg-main-blue text-white" />
            </div>
            <div className="product-detail w-full flex justify-between">
                <span>{`${product.bids} ${product.bids > 1 ? 'bids' : 'bid'} so far`} </span>
                <span className='text-body-3 text-[#999999]'>
                  Bidding closes
                  <TimeAgo className='ml-2' datetime={new Date(product.endDate)} locale="en" />
                </span>
            </div>
         </div>
      </div>
   );
};

export default ProductsCard;
