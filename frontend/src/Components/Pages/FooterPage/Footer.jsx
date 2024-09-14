import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Wrapper from "../../Wrapper";
import PrivacyModal from "./PrivacyModal";
import TermModal from "./TermModal";

const Footer = () => {
  return (
    <footer className="bg-[#141314] text-white pt-14 pb-3">
      <Wrapper className="flex justify-between flex-col md:flex-row gap-[50px] md:gap-0">
        {/* LEFT START */}
        <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] flex-col md:flex-row">
          {/* MENU START */}
          <div className="flex flex-col gap-3 shrink-1 md:w-[70%]">
            <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
              <h1 className=" text-2xl font-semibold">About</h1>
              <p>
                At Sarte Infosoft & Solution, we are committed to offering innovative investment solutions and IT services that empower our clients to achieve financial security and growth. Our focus is on delivering transparent, secure, and personalized investment opportunities that cater to the diverse needs of individuals and businesses alike. We believe in creating a future where finances are managed with integrity and reliability, ensuring our clients earn passive income while securing a stable financial future.
              </p>
            </div>
          </div>
          {/* MENU END */}

          {/*   
          <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] shrink-0">
      
            <div className="flex flex-col gap-3">
              <div className="font-oswald font-medium uppercase">
                <h1>get help</h1>
              </div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                Order Status
              </div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                Delivery
              </div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                Returns
              </div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                Payment Options
              </div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                Contact Us
              </div>
            </div>
         

     
            <div className="flex flex-col gap-3">
              <div className="font-oswald font-medium uppercase text-sm">
                About Sarte
              </div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                News
              </div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                Careers
              </div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                Investors
              </div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                Sustainability
              </div>
            </div>
         
          </div> */}

        </div>


        {/* RIGHT START */}
        <div className="flex gap-4 justify-center md:justify-start">
          <div
            onClick={() => {
              window.open("https://www.instagram.com/", "_blank");
            }}
            className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
          >
            <a href="https://www.instagram.com/sarte.investments?igsh=dXQ0MmFrZmxzN2Nj" target="_blank" rel="noopener noreferrer"><FaInstagram size={20} /></a>
          </div>
          <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
            <a href="https://www.facebook.com/profile.php?id=61563795818355&mibextid=kFxxJD" target="_blank" rel="noopener noreferrer"><FaFacebookF size={20} /></a>
          </div>
          <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
            <FaYoutube size={20} />
          </div>
          <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
            <FaTwitter size={20} />
          </div>
        </div>
        {/* RIGHT END */}
      </Wrapper>
      <Wrapper className="flex justify-between mt-10 flex-col md:flex-row gap-[10px] md:gap-0">
        {/* LEFT START */}
        <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer text-center md:text-left">
          © 2024 Sarte info soft & solutions, Inc. All Rights Reserved
        </div>
        {/* LEFT END */}

        {/* RIGHT START */}

        <div className="flex gap-2 md:gap-5 text-center md:text-left flex-wrap justify-center">
          {/* <div className=" font-semibold text-white/[0.5] hover:text-white cursor-pointer">
            Guides
          </div> */}
          <div className="font-semibold text-white/[0.5] hover:text-white cursor-pointer mr-3">
            <TermModal />
          </div>
          <div className=" font-semibold text-white/[0.5] hover:text-white cursor-pointer">
            <PrivacyModal />
          </div>
        </div>
        {/* RIGHT END */}
      </Wrapper>
    </footer>
  );
};

export default Footer;
