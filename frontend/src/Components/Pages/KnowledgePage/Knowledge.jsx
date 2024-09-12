import { motion } from "framer-motion";
import know from "../../../assets/Know/know.jpg";
import Wrapper from "../../Wrapper";
import KnowFaq from "./KnowFaq";
import BlogsCard from "../BlogPage/BlogsCard";

const Knowledge = () => {
  return (
    <div className="mb-10">
      <div className="h-[50vh] w-full bg-dot-white/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 sm:flex hidden items-center justify-center bg-[#100f10] [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]"></div>
        <img
          className="h-full w-full object-cover md:px-[6em] px-[2em] md:py-10 py-5"
          src={know}
          alt=""
        />
      </div>
      <Wrapper>
        <div>
          <h1 className="flex flex-col items-center text-center justify-center sm:text-5xl text-3xl overflow-hidden">
            <motion.span
              initial={{ y: "70%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ ease: [0.22, 1, 0.36, 1], duration: 1.2 }}
            >
              {" "}
              <h1>Introduction</h1>
            </motion.span>
            <motion.span
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "8%", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ ease: [0.22, 1, 0.36, 1], duration: 1.2 }}
              className="sm:border-2 border-[1.5px] border-[#18dae4] w-0 sm:mb-5 rounded-md"
            ></motion.span>
          </h1>
          <p>
            Cryptocurrency is a digital currency based on decentralized blockchain technology, allowing secure, transparent transactions without banks. Unlike traditional currencies, cryptocurrencies like Bitcoin and Ethereum are not controlled by central authorities, making them resistant to government interference and inflation. They use cryptography for security, verification, and creation of new units. Offering fast, global, and low-cost transactions, cryptocurrency is reshaping finance with new opportunities for investment and payments.
          </p>
        </div>
        <div className="mt-10">
          <h1 className="flex flex-col items-center text-center justify-center sm:text-5xl text-3xl overflow-hidden">
            <motion.span
              initial={{ y: "70%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ ease: [0.22, 1, 0.36, 1], duration: 1.2 }}
            >
              <h1>CryptoCurrencies</h1>
            </motion.span>
            <motion.span
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "8%", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ ease: [0.22, 1, 0.36, 1], duration: 1.2 }}
              className="sm:border-2 border-[1.5px] border-[#18dae4] w-0 sm:mb-5 rounded-md"
            ></motion.span>
          </h1>
          <div className="flex flex-col gap-4 mb-4" >
            <p>
              Cryptocurrency mining is the process of validating and adding new transactions to the blockchain ledger by solving complex mathematical problems, which also creates new units of the cryptocurrency.
            </p>
            <p>

              Cryptocurrency mining involves validating and recording new transactions on the blockchain by solving intricate mathematical puzzles. Miners use powerful computers to compete in solving these problems, ensuring the integrity and security of the blockchain network. As a reward for their efforts, miners earn newly created cryptocurrency units and transaction fees from the network. This process is crucial for maintaining the decentralized nature of cryptocurrencies, as it prevents double-spending and fraud while securing the network against malicious attacks. With the increasing complexity of mining algorithms, specialized hardware and significant computational power are often required to remain competitive in this field.
            </p>

          </div>
        </div>
      </Wrapper>
      <BlogsCard />
      <KnowFaq />
    </div>
  );
};

export default Knowledge;
