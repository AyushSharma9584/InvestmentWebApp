import { CardRotate } from "../../ui/CardRotate";

const ProductDesThree = () => {
  return (
    <div className="mt-[5em] w-full grid lg:grid-cols-2 grid-cols-1 lg:-mt-16">
      <div className="sm:-mt-40 -mt-10">
        <CardRotate />
      </div>
      <div className="mr-2 flex flex-col gap-5 sm:mt-0 -mt-40">
        <h1 className=" text-[#18dae4] font-semibold text-3xl lg:mb-3 mt-4">
          Advance Plan (Fixed Return, High Investment):
        </h1>

        <p className=" font-light">
          This plan is tailored for those looking to invest a larger amount for greater returns. With the highest interest rate among all plans, the Advance Plan guarantees fixed returns, making it an excellent option for investors aiming for maximum financial growth.
        </p>
      </div>
    </div>
  );
};

export default ProductDesThree;
