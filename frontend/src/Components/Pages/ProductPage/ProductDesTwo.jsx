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
            Advance Plan (Fixed Return, High Investment):
          </h1>
          <p className=" font-light">
            This plan is tailored for those looking to invest a larger amount for greater returns. With the highest interest rate among all plans, the Advance Plan guarantees fixed returns, making it an excellent option for investors aiming for maximum financial growth.
          </p>
        </div>
      </div>
      <div className="sm:-mt-40 -mt-10">
        <CardRotate />
      </div>

      <div className='lg:hidden block'>
        <div className="mr-2 flex flex-col gap-5 sm:mt-0 -mt-40 ">
          <h1 className=" text-[#18dae4] font-semibold text-3xl lg:mb-3 mt-4">
            Advance Plan (Fixed Return, High Investment):
          </h1>

          <p className=" font-light">
            This plan is tailored for those looking to invest a larger amount for greater returns. With the highest interest rate among all plans, the Advance Plan guarantees fixed returns, making it an excellent option for investors aiming for maximum financial growth.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductDesTwo
