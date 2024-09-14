import { CardRotate } from '../../ui/CardRotate';

const ProductDesTwo = () => {
  return (
    // <div className="grid lg:grid-cols-2 items-center overflow-y-auto overflow-x-hidden gap-5 lg:-mt-40">
    //   <div className="lg:block hidden">
    //     <h1 className=" text-[#18dae4] font-semibold text-3xl lg:mb-3 mt-4">
    //       Intermediate Plan (Fixed Return, Medium Investment):
    //     </h1>
    //     <p className="mb-10">
    //       The Intermediate Plan is designed for investors ready to commit a moderate amount of capital. It offers a higher interest rate compared to the Primary Plan, ensuring balanced growth and steady returns over time.

    //     </p>

    //   </div>
    //   <div className="">
    //     <CardRotate />
    //   </div>
    //   <div className="lg:hidden block -mt-36">
    //     <h1 className=" text-[#18dae4] font-semibold text-3xl lg:mb-3 mt-4">
    //       Intermediate Plan (Fixed Return, Medium Investment):
    //     </h1>
    //     <p className="mb-10">
    //       The Intermediate Plan is designed for investors ready to commit a moderate amount of capital. It offers a higher interest rate compared to the Primary Plan, ensuring balanced growth and steady returns over time.

    //     </p>
    //     <div className="mb-5 sm:text-2xl text-xs">
    //       <p>🗸 Professionally Loaded Team</p>
    //       <p>🗸 Offering Premium Investment Solutions</p>
    //       <p>🗸 Ensuring 100% Client Satisfaction</p>
    //       <p>🗸 We are Fully Bonded and Insured</p>
    //     </div>
    //     <button className="bg-[#18dae4] text-black font-medium py-2 px-4 rounded transition-all hover:bg-[#0b9198] hover:text-white active:scale-95">
    //       Find a class
    //     </button>
    //   </div>
    // </div>

    <div className="mt-[5em] w-full grid lg:grid-cols-2 grid-cols-1 lg:-mt-16">
      {/* <div className="sm:-mt-40 -mt-10">
        <CardRotate />
      </div> */}
      <div className='lg:block  hidden'>
        <div className="mr-2 flex flex-col gap-5 sm:mt-0 -mt-40 ">
          <h1 className=" text-[#18dae4] font-semibold text-3xl lg:mb-3 mt-4">
            Intermediate Plan :  <span className="text-white font-light text-xl s:ml-0 md:ml-3">Balanced Investment, Higher Returns
            </span>

          </h1>
          <p className=" font-light">
            The Intermediate Plan is designed for those ready to invest between ₹60,000 and ₹2,99,999. Offering a higher annual interest rate of 42%, this plan is ideal for investors seeking stable and substantial returns without the worry of market fluctuations. Your one-time investment works for you, providing a consistent stream of income over time. With no need for continuous updates or adjustments, you can enjoy a stress-free experience. This plan is 100% safe and secure, ensuring that your money is protected and that you earn a passive income with zero risks involved. Sarte Infosoft & Solution delivers a reliable financial growth opportunity tailored to your needs.          </p>
        </div>
      </div>
      <div className="sm:-mt-40 -mt-10">
        <CardRotate />
      </div>

      <div className='lg:hidden block'>
        <div className="mr-2 flex flex-col gap-5 sm:mt-0 -mt-40 ">
          <h1 className=" text-[#18dae4] font-semibold text-3xl lg:mb-3 mt-4">
            Intermediate Plan :  <span className="text-white font-light text-xl s:ml-0 md:ml-3">Balanced Investment, Higher Returns
            </span>

          </h1>

          <p className=" font-light">
            The Intermediate Plan is designed for those ready to invest between ₹60,000 and ₹2,99,999. Offering a higher annual interest rate of 42%, this plan is ideal for investors seeking stable and substantial returns without the worry of market fluctuations. Your one-time investment works for you, providing a consistent stream of income over time. With no need for continuous updates or adjustments, you can enjoy a stress-free experience. This plan is 100% safe and secure, ensuring that your money is protected and that you earn a passive income with zero risks involved. Sarte Infosoft & Solution delivers a reliable financial growth opportunity tailored to your needs.          </p>

        </div>
      </div>
    </div >
  );
}

export default ProductDesTwo
