import { CardRotate } from "../../ui/CardRotate";

const ProductDesThree = () => {
  return (
    <div className="mt-[5em] w-full grid lg:grid-cols-2 grid-cols-1 lg:-mt-16">
      <div className="sm:-mt-40 -mt-10">
        <CardRotate />
      </div>
      <div className="mr-2 flex flex-col gap-5 sm:mt-0 -mt-40">
        <h1 className=" text-[#18dae4] font-semibold text-3xl lg:mb-3 mt-4">
          Advance Plan :  <span className="text-white font-light text-xl s:ml-0 md:ml-3">Maximize Wealth with Guaranteed Security
          </span>
        </h1>

        {/* <h1 className=" text-[#18dae4] font-semibold text-3xl mb-2  mt-4">
          Advance Plan : <span className="text-white font-light text-xl s:ml-0 md:ml-3">Maximize Wealth with Guaranteed Security
          </span>
        </h1> */}

        <p className=" font-light">
          The Advance Plan is tailored for seasoned investors looking to invest between ₹3,00,000 and ₹10,00,000, with an outstanding annual interest rate of 46%. This plan provides high fixed returns, unaffected by market volatility, ensuring absolute safety for your capital. Once you invest, there’s no need for further management—just sit back and enjoy the benefits. Designed for those who seek maximum financial growth, this plan guarantees a secure, passive income stream, with no risk of loss. Sarte Infosoft & Solution offers a perfect solution for individuals looking to enhance their wealth while maintaining complete peace of mind and security.        </p>
      </div>
    </div>
  );
};

export default ProductDesThree;
