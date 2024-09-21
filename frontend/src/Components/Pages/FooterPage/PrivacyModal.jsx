/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";
import { useState } from "react";

const PrivacyModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="grid place-content-center">
      <button onClick={() => setIsOpen(true)}>Privacy Policy</button>
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
                Privacy Policy

              </h3>
              <div>
                <div className="mr-2 flex flex-col  sm:mt-0 ">
                  <h1 className=" text-[#18dae4] font-semibold text-xl lg:mb-0 mt-4">
                    1. Overview
                  </h1>

                  <p className=" font-light">
                    Welcome to Sarte Infosoft & Solution. We value your privacy and are dedicated to safeguarding your personal information. This document outlines how we collect, use, share, and protect your data.
                  </p>


                  <h1 className=" text-[#18dae4] font-semibold text-xl lg:mb-0 mt-4">
                    2. Key Definitions
                  </h1>
                  <h2 className=" text-light font-semibold text-xxl lg:mb-0 mt-1">
                    Clarifications
                  </h2>
                  <p className=" font-light mb-1">
                    Terms with capital letters have specific meanings outlined below. These definitions apply to both singular and plural forms.
                  </p>
                  <h2 className=" text-light font-semibold text-xxl lg:mb-0 mt-1">
                    Definitions
                  </h2>
                  <p className=" font-light mb-2 ">
                    For the purpose of this Privacy Statement:
                  </p>
                  <p className=" font-light  ">
                    - Account : A unique account created for accessing our services or parts of them.<br />
                    - Affiliate : An entity that has control over, is controlled by, or shares control with another entity, where “control” means owning 50% or more of the shares or voting rights.<br />
                    - Application : The software provided by us, which you download onto any device.<br />
                    - Company (referred to as “the Company”, “We”, “Us”, or “Our”) refers to Sarte Infosoft & Solution.<br />
                    - Cookies : Small files placed on your device to track your browsing activities and store certain information.<br />
                    - Country : Refers to Madhya Pradesh, India.<br />
                    - Device : Any device capable of accessing the Service, including computers, phones, or tablets.<br />
                    - Personal Data : Information that identifies an individual.<br />
                    - Service : Refers to the Application, the Website, or both.<br />
                    - Service Provider : Any entity that processes data on behalf of the Company.<br />
                    - Third-Party Social Media Service : Any social network or platform through which you can log in or create an account to use our Service.<br />
                    - Usage Data : Data collected automatically, such as the time spent on pages and the IP address.<br />
                    - Website : The Sarte Infosoft & Solution site, accessible at https://sarteinfomining.com. <br />
                    - You : The person using the Service, or the company or legal entity on whose behalf the Service is being used.
                  </p>

                  <h1 className=" text-[#18dae4] font-semibold text-xl lg:mb-0 mt-4">
                    3. Collection and Use of Your Personal Data
                  </h1>
                  <p className=" text-light font-semibold text-xxl lg:mb-0 mt-1 ">
                    Types of Data Collected
                  </p>
                  <p className=" text-light font-semibold text-xxl lg:mb-0 mt-1">
                    Personal Data
                  </p>
                  <p className=" font-light mt-1">
                    While using our Service, we may request certain personally identifiable information, including:<br />

                    - Email address <br />
                    - Name (first and last) <br />
                    - Phone number <br />
                    - Address (including state, province, ZIP/Postal code, city)<br />
                    - Usage Data<br />
                  </p>

                  <p className=" text-light font-semibold text-xxl lg:mb-0 mt-1">
                    Usage Data
                  </p>
                  <p className=" font-light mt-1">
                    We collect Usage Data automatically when you use our Service. This includes information such as your device’s IP address, browser type, browser version, pages visited, and other diagnostic data.

                    When you access the Service via a mobile device, we may collect details like the type of device, unique device ID, IP address, operating system, and mobile browser type.

                    We also gather information sent by your browser whenever you visit our Service.

                  </p>

                  <p className=" font-light mb-2 ">
                    Tracking Technologies and Cookies
                  </p>
                  <p className=" font-light mb-2 ">
                    We use Cookies and similar technologies to track activity and store information. These include:
                  </p>
                  <p className=" font-light">
                    - Cookies : Small files placed on your device. You can configure your browser to refuse all Cookies or notify you when a Cookie is sent. However, some features of our Service may not function properly if Cookies are disabled.<br />
                    - Flash Cookies : Local stored objects used to collect information about your preferences or activities on our Service. Flash Cookies are managed differently from browser Cookies.<br />
                    - Web Beacons : Small files used to count users who have visited pages or opened emails, among other statistics.<br />

                    Cookies can be either “Persistent” or “Session” Cookies. Persistent Cookies remain on your device even when offline, while Session Cookies are deleted when you close your browser.
                  </p>


                  <h1 className=" text-[#18dae4] font-semibold text-xl lg:mb-0 mt-4">
                    4. How We Use Your Personal Data
                  </h1>
                  <p className=" font-light mt-1">
                    We use Personal Data for the following purposes:<br />

                    - To Provide and Maintain Our Service : Including monitoring usage and performance.<br />
                    - To Manage Your Account : Allowing you to access various functionalities.<br />
                    - To Fulfill Contracts : Such as processing purchases or services.<br />
                    - To Contact You : Via email, phone, SMS, or other means.<br />
                    - To Inform You : About news, offers, and related services, unless you opt out.<br />
                    - To Handle Your Requests : Responding to inquiries and support needs.<br />
                    - For Business Transfers : In the event of mergers, acquisitions, or asset sales.<br />
                    - For Analytical Purposes : Data analysis and service improvement.<br />

                    We may share your information in these situations :<br />

                    - With Service Providers : For service monitoring or contacting you.<br />
                    - For Business Transfers: During asset sales or transfers.<br />
                    - With Affiliates : Including parent companies and subsidiaries.<br />
                    - With Business Partners : For product, service, or promotion offerings.<br />
                    - With Other Users : When you publicly share information or interact via social media.<br />
                    - With Your Consent : For any other purpose with your approval.
                  </p>


                  <h1 className=" text-[#18dae4] font-semibold text-xl lg:mb-0 mt-4">
                    5. Data Retention
                  </h1>
                  <p className=" font-light">
                    We retain your Personal Data only as long as necessary for the purposes outlined. We will keep and use your data to comply with legal obligations and resolve disputes. Usage Data is generally kept for a shorter period unless required for security or service improvement.

                  </p>


                  <h1 className=" text-[#18dae4] font-semibold text-xl lg:mb-0 mt-4">
                    6. Data Transfer
                  </h1>
                  <p className=" font-light">
                    Your Personal Data may be processed in locations outside your state, province, or country. By agreeing to this Privacy Policy and submitting your information, you consent to this transfer. We will take reasonable measures to ensure your data is securely handled.

                  </p>

                  <h1 className=" text-[#18dae4] font-semibold text-xl lg:mb-0 mt-4">
                    7. Disclosure of Your Personal Data
                  </h1>
                  <p className=" text-light font-semibold text-xxl lg:mb-0 mt-1 ">
                    Business Transactions
                  </p>
                  <p className=" font-light">
                    In case of a merger, acquisition, or asset sale, your data may be transferred. We will inform you before any such transfer and its impact on your Privacy Policy.

                  </p>
                  <p className=" text-light font-semibold text-xxl lg:mb-0 mt-2">
                    Law Enforcement
                  </p>
                  <p className=" font-light">
                    We may disclose your data if required by law or in response to valid requests from authorities such as courts or government agencies.
                  </p>
                  <p className=" text-light font-semibold text-xxl lg:mb-0 mt-2 ">
                    Other Legal Obligations
                  </p>
                  <p className=" font-light">
                    We may disclose your data if necessary to:<br />

                    - Comply with legal requirements<br />
                    - Protect the rights or property of the Company<br />
                    - Prevent or investigate potential wrongdoing<br />
                    - Ensure user and public safety<br />
                    - Guard against legal liability<br />

                  </p>


                  <h1 className=" text-[#18dae4] font-semibold text-xl lg:mb-0 mt-4">
                    8. Data Security
                  </h1>
                  <p className=" font-light">

                    We prioritize the security of your data, but no online or electronic storage method is completely secure. We use reasonable measures to protect your data, but cannot guarantee its absolute security.
                  </p>

                  <h1 className=" text-[#18dae4] font-semibold text-xl lg:mb-0 mt-4">
                    9. Children’s Privacy
                  </h1>
                  <p className=" font-light">
                    Our Service is not intended for those under 13. We do not knowingly collect personal information from children under 13. If you believe your child has provided us with data, please contact us. If we discover that we have collected data from a child without parental consent, we will take steps to remove it.

                  </p>

                  <h1 className=" text-[#18dae4] font-semibold text-xl lg:mb-0 mt-4">
                    10. Links to Other Sites
                  </h1>
                  <p className=" font-light">
                    Our Service may include links to external websites not operated by us. We are not responsible for the content or privacy practices of these third-party sites. We recommend reviewing their privacy policies.

                  </p>


                  <h1 className=" text-[#18dae4] font-semibold text-xl lg:mb-0 mt-4">
                    11. Updates to This Privacy Policy
                  </h1>
                  <p className=" font-light">
                    We may update this Privacy Policy periodically. Changes will be posted on this page with a revised effective date. We will notify you of significant changes via email or prominent notices on our Service. Regularly reviewing this policy is advisable.

                  </p>


                  <h1 className=" text-[#18dae4] font-semibold text-xl lg:mb-0 mt-4">
                    12. Contact Us
                  </h1>
                  <p className=" font-light">
                    For any questions about this Privacy Policy, please contact us:
                  </p>
                  <p className=" font-light mb-4">

                    - Email : Supportsarteinfomining.com<br />
                    - Contact Page : https://sarteinfomining.com

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

export default PrivacyModal;
