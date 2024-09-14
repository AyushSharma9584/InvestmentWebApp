import { CardRotate } from '../../ui/CardRotate';

const ProductDesOne = () => {
  return (
    <div className="mt-[6em] w-full grid lg:grid-cols-2 grid-cols-1">
      <div className="sm:-mt-40 -mt-10">
        <CardRotate />
      </div>
      <div className="mr-2 flex flex-col gap-5 sm:mt-0 -mt-40">
        <h1 className=" text-[#18dae4] font-semibold text-3xl lg:mb-3 mt-4">
          Primary Plan : <span className="text-white font-light text-xl s:ml-0 md:ml-3">Start Small, Grow Big with Fixed Returns
          </span>
        </h1>
        <p className=" font-light">
          The Primary Plan is perfect for investors looking to begin their journey with an investment between ₹2,000 and ₹59,999. With an attractive annual interest rate of 38%, this plan offers fixed, guaranteed returns that are not influenced by market volatility. It’s a one-time investment that requires no active management or updates, allowing you to relax while your money grows steadily. Sarte Infosoft & Solution ensures 100% safety and security of your investment, making it a zero-risk option. This plan is ideal for those who want to earn passive income while ensuring their capital is protected. Trust us to deliver steady, reliable returns without any hassle.        </p>
      </div>
    </div>
  );
}

export default ProductDesOne
