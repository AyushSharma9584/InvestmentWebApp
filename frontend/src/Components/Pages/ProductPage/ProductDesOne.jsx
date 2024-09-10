import { CardRotate } from '../../ui/CardRotate';

const ProductDesOne = () => {
  return (
    <div className="mt-[6em] w-full grid lg:grid-cols-2 grid-cols-1">
      <div className="sm:-mt-40 -mt-10">
        <CardRotate />
      </div>
      <div className="mr-2 flex flex-col gap-5 sm:mt-0 -mt-40">
        <h1 className=" text-[#18dae4] font-semibold text-3xl lg:mb-3 mt-4">
          Primary Plan (Fixed Return, Low Investment):
        </h1>
        <p className=" font-light">
          This plan is perfect for those looking to start their investment journey with a smaller amount. It offers a fixed return with a competitive interest rate, making it an ideal choice for cautious investors seeking steady growth.
        </p>
      </div>
    </div>
  );
}

export default ProductDesOne
