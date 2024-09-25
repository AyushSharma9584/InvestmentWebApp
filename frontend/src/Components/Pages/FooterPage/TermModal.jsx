/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";
import { useState } from "react";

const TermModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="grid place-content-center">
      <button onClick={() => setIsOpen(true)}>Terms & Conditions</button>
      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

const SpringModal = ({ isOpen, setIsOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-[#100f10] text-white p-6 rounded-lg  md:w-[70%] shadow-xl cursor-default relative text-start overflow-auto h-[80vh]"
          >
            <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0  -left-24" />
            <div className="relative z-10">
              <div className="bg-[#18dae4] w-16 h-16 mb-2 rounded-full text-3xl text-indigo-600 grid place-items-center mx-auto">
                <FiAlertCircle />
              </div>
              <h3 className="text-3xl font-bold text-center mb-2">
                Terms & Conditions
              </h3>
              <div>
                <div className="mr-2 flex flex-col  sm:mt-0 ">
                  <h1 className=" text-[#18dae4] font-semibold text-xl lg:mb-0 mt-4">
                    Agreement Overview
                  </h1>
                  <p className=" font-light">
                    By using the platform and services provided by Sarte Infosoft & Solution ("Owner"), you agree to these Terms and Conditions ("Terms"), along with our Privacy Policy and Disclaimer.
                  </p>


                  <h1 className=" text-[#18dae4] font-semibold text-xl lg:mb-0 mt-4">
                    Acceptance of Terms
                  </h1>
                  <p className=" font-light">
                    By accessing or purchasing from our platform, you agree to these Terms. These apply to all users, including browsers, third-parties, and content contributors. You also acknowledge that we use your personal information as described in our Privacy Policy.
                  </p>

                  <h1 className=" text-[#18dae4] font-semibold text-xl lg:mb-0 mt-4">
                    Definitions
                  </h1>
                  <p className=" font-light">
                    - Owner, Us, We : Refers to Sarte Infosoft & Solution and its employees and affiliates. <br />
                    - You, the User : Refers to anyone using our platform or services.<br />
                    - Parties : Refers to both the Owner and the User collectively
                  </p>


                  <h1 className=" text-[#18dae4] font-semibold text-xl lg:mb-0 mt-4">
                    Consent and Agreement
                  </h1>
                  <p className=" font-light">
                    By using the platform, you confirm that you have read and agreed to these Terms. If you disagree, please stop using the platform immediately. Additional terms may apply based on specific services you use.
                  </p>


                  <h1 className=" text-[#18dae4] font-semibold text-xl lg:mb-0 mt-4">
                    About This Site
                  </h1>
                  <p className=" font-light">
                    Our platform facilitates fundraising. We reserve the right to refuse service to anyone at any time for any reason. Use the platform lawfully and respect the rights of others.
                  </p>


                  <h1 className=" text-[#18dae4] font-semibold text-xl lg:mb-0 mt-4">
                    Acceptable Use
                  </h1>
                  <p className=" font-light">
                    You agree not to use the platform for illegal purposes or to harm the platform, services, or our business.
                  </p>

                  <h1 className=" text-[#18dae4] font-semibold text-xl lg:mb-0 mt-4">
                    Amendments
                  </h1>
                  <p className=" font-light">
                    We may update these Terms at any time without notice. The updated Terms will be effective immediately. Check these Terms regularly to stay informed of any changes.
                  </p>

                  <h1 className=" text-[#18dae4] font-semibold text-xl lg:mb-0 mt-4">
                    Communication
                  </h1>
                  <p className=" font-light">
                    By using the platform, you agree to receive communications from us about our services via phone or email. These communications are not spam under any law.
                  </p>

                  <h1 className=" text-[#18dae4] font-semibold text-xl lg:mb-0 mt-4">
                    Indemnification
                  </h1>
                  <p className=" font-light">
                    You agree to indemnify and hold us harmless against any legal claims arising from your use of the platform, your breach of these Terms, or your conduct.
                  </p>

                  <h1 className=" text-[#18dae4] font-semibold text-xl lg:mb-0 mt-4">
                    License to Use Platform
                  </h1>
                  <p className=" font-light">
                    We grant you a limited, non-exclusive, non-transferable, revocable license to use our platform. Unauthorized use will result in termination of access. We do not guarantee the platform's constant availability or accuracy of information.
                  </p>


                  <h1 className=" text-[#18dae4] font-semibold text-xl lg:mb-0 mt-4">
                    User Obligations
                  </h1>
                  <p className=" font-light">
                    You may need to register and provide accurate personal information. Keep your information secure and notify us if it is compromised.
                  </p>


                  <h1 className=" text-[#18dae4] font-semibold text-xl lg:mb-0 mt-4">
                    Payment
                  </h1>
                  <p className=" font-light">
                    If you register for paid services, you agree to pay the specified fees. Payments are processed through Cashfree. If a startup reaches its funding goal, you will receive a share certificate or a refund. If not, your money will be refunded.
                  </p>


                  <h1 className=" text-[#18dae4] font-semibold text-xl lg:mb-0 mt-4">
                    Privacy
                  </h1>
                  <p className=" font-light">
                    We prioritize your privacy and handle your information according to the Information Technology Act, 2000. We may share your information with affiliates or disclose it as required by law.
                  </p>


                  <h1 className=" text-[#18dae4] font-semibold text-xl lg:mb-0 mt-4">
                    Security and Reverse Engineering
                  </h1>
                  <p className=" font-light">
                    You agree not to reverse engineer or breach the security of the platform.

                  </p>

                  <h1 className=" text-[#18dae4] font-semibold text-xl lg:mb-0 mt-4">
                    Spam Policy
                  </h1>
                  <p className=" font-light">
                    Using our platform for illegal spam activities is strictly prohibited.

                  </p>


                  <h1 className=" text-[#18dae4] font-semibold text-xl lg:mb-0 mt-4">
                    Service Interruption
                  </h1>
                  <p className=" font-light">
                    We may interrupt your access for maintenance or emergencies. We are not liable for any loss due to downtime.
                  </p>


                  <h1 className=" text-[#18dae4] font-semibold text-xl lg:mb-0 mt-4">
                    Third-Party Links
                  </h1>
                  <p className=" font-light">
                    We may post links to third-party websites. We are not responsible for any loss or damage from using these third-party services.
                  </p>

                  <h1 className=" text-[#18dae4] font-semibold text-xl lg:mb-0 mt-4">
                    General Provisions
                  </h1>
                  <p className=" font-light">
                    - Governing Law and Jurisdiction : These Terms are governed by the laws of India and any disputes will be resolved in the courts of Indore.<br />
                    - Non-Waiver : Failure to enforce any right under these Terms does not waive that right.<br />
                    - Severability : If any part of these Terms is unenforceable, the rest will remain in effect.<br />
                    - Entire Agreement : These Terms constitute the entire agreement between the parties regarding the platform.<br />
                    - Termination : You or the Owner can terminate these Terms at any time. Termination may result in deletion of your account and content.

                  </p>

                  <h1 className=" text-[#18dae4] font-semibold text-xl lg:mb-0 mt-4">
                    Electronic Communication
                  </h1>
                  <p className=" font-light mb-8">
                    You agree to receive communications electronically. For any queries, email us at Support@sarteinfomining.com
                    .

                  </p>


                </div>

              </div>

              {/* <p className="text-center mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                aperiam vitae, sapiente ducimus eveniet in velit.
              </p> */}
              <div className="flex gap-2  justify-center">
                {/* <button
                  onClick={() => setIsOpen(false)}
                  className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                >
                  Nah, go back
                </button> */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-[#18dae4] transition-all hover:bg-[#0b9198]  text-black hover:text-white font-semibold  py-2 rounded w-40"
                >
                  Understood!
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TermModal;
