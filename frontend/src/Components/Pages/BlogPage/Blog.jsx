import blog from "../../../assets/blog/blog.jpg";
import { motion } from "framer-motion";
import BlogsCard from "./BlogsCard";
import Wrapper from "../../Wrapper";
import BlogDesOne from "./BlogDesOne";
import BlogDesTwo from "./BlogDesTwo";

const Blog = () => {
  return (
    <div className="mb-10">
      <div className="h-[50vh] w-full bg-dot-white/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 sm:flex hidden items-center justify-center bg-[#100f10] [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]"></div>
        <img
          className="h-full w-full object-cover md:px-[6em] px-[2em] md:py-10 py-5"
          src={blog}
          alt=""
        />
      </div>
      <Wrapper>
        <div className="flex flex-col items-center text-center justify-center overflow-hidden">
          <motion.span
            initial={{ y: "70%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 1.2 }}
          >
            {" "}
            <h1 className="sm:text-5xl text-3xl">Blog</h1>
          </motion.span>
          <motion.span
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "8%", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 1.2 }}
            className="sm:border-2 border-[1.5px] border-[#18dae4] w-0 sm:mb-2 mt-1 rounded-md"
          ></motion.span>
          <motion.p
            initial={{ y: "70%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 1.2 }}
            className="sm:text-2xl font-semibold"
          >

          </motion.p>
        </div>
        {/* <BlogsCard /> */}
        <BlogDesOne />
        <BlogDesTwo />
      </Wrapper>
    </div>
  );
};

export default Blog;