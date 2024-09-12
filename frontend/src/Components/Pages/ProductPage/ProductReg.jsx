import { motion } from "framer-motion";

const ProductReg = () => {
  return (
    <div className="mt-[5em]">
      <div className="flex flex-col items-center text-center justify-center overflow-hidden">
        <motion.span
          initial={{ y: "70%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ease: [0.22, 1, 0.36, 1], duration: 1.2 }}
        >
          {" "}
          <h1 className="sm:text-5xl text-3xl">
            Get Smart The Best Investment Plan in Sarte Info Soft & Solutions
          </h1>
        </motion.span>
        <motion.span
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "8%", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ease: [0.22, 1, 0.36, 1], duration: 1.2 }}
          className="sm:border-2 border-[1.5px] border-[#18dae4] w-0 sm:mb-2 mt-1 rounded-md"
        ></motion.span>


      </div>

      <p className="sm:text-2xl font-semibold mt-5">
        Each of our plans ensures that your investment is protected, offering a fixed, reliable income stream without any risks or hidden fees. Choose the plan that fits your financial goals, and let Sarte Infosoft & Solution help you secure a prosperous future.
      </p>
      <div className="mr-2  gap-5 mb-4 ">
        <h1 className=" text-[#18dae4] font-semibold text-3xl mb-2  mt-4">
          Primary Plan : <span className="text-white font-light text-xl s-ml-0 md:ml-3">Start Small, Grow Big with Fixed Returns</span>
        </h1>
        <p className=" font-light">
          The Primary Plan is perfect for investors looking to begin their journey with an investment between ₹2,000 and ₹59,999. With an attractive annual interest rate of 38%, this plan offers fixed, guaranteed returns that are not influenced by market volatility. It’s a one-time investment that requires no active management or updates, allowing you to relax while your money grows steadily. Sarte Infosoft & Solution ensures 100% safety and security of your investment, making it a zero-risk option. This plan is ideal for those who want to earn passive income while ensuring their capital is protected. Trust us to deliver steady, reliable returns without any hassle.        </p>
      </div>

      <div className="mr-2  gap-5 mb-3 ">
        <h1 className=" text-[#18dae4] font-semibold text-3xl mb-2  mt-4">
          Intermediate Plan : <span className="text-white font-light text-xl s:ml-0 md:ml-3">Balanced Investment, Higher Returns </span>
        </h1>
        <p className=" font-light">
          The Intermediate Plan is designed for those ready to invest between ₹60,000 and ₹2,99,999. Offering a higher annual interest rate of 42%, this plan is ideal for investors seeking stable and substantial returns without the worry of market fluctuations. Your one-time investment works for you, providing a consistent stream of income over time. With no need for continuous updates or adjustments, you can enjoy a stress-free experience. This plan is 100% safe and secure, ensuring that your money is protected and that you earn a passive income with zero risks involved. Sarte Infosoft & Solution delivers a reliable financial growth opportunity tailored to your needs.       </p>
      </div>

      <div className="mr-2  gap-5 ">
        <h1 className=" text-[#18dae4] font-semibold text-3xl mb-2  mt-4">
          Advance Plan : <span className="text-white font-light text-xl s:ml-0 md:ml-3">Maximize Wealth with Guaranteed Security
          </span>
        </h1>
        <p className=" font-light">
          The Advance Plan is tailored for seasoned investors looking to invest between ₹3,00,000 and ₹10,00,000, with an outstanding annual interest rate of 46%. This plan provides high fixed returns, unaffected by market volatility, ensuring absolute safety for your capital. Once you invest, there’s no need for further management—just sit back and enjoy the benefits. Designed for those who seek maximum financial growth, this plan guarantees a secure, passive income stream, with no risk of loss. Sarte Infosoft & Solution offers a perfect solution for individuals looking to enhance their wealth while maintaining complete peace of mind and security.       </p>
      </div>

      <div className="flex  justify-center">
        <button className="bg-[#18dae4] text-black font-medium py-2 px-4 rounded transition-all hover:bg-[#0b9198] hover:text-white active:scale-95 mt-10">
          Registration
        </button>
      </div>
    </div>
  );
}

export default ProductReg
