import { motion } from "framer-motion";
import Wrapper from "../../Wrapper";
import contact from "../../../assets/contact/contact.jpg";
import ContactInput from "./ContactInput";

const Contact = () => {
  const [credentials, setCredentials] = useState({ name: "", email: "", phone: "", message: "" })

  const registerHandle = async () => {
    if (!credentials.aadhar || !credentials.pan || !credentials.account || !credentials.ifsc || !credentials.bank || !credentials.city || !credentials.state || !credentials.pin) {
      setError(true)
      return
    }
    else {
      setError(false)
    }

    if (validation(credentials)) {
      console.log("hiii")
      return

    } else {
      setValid({ aadhaar: false, account: false, pan: false, ifsc: false })
    }
    try {
      const registerData = {
        aadhaar_no: credentials.aadhar,
        ifsc: credentials.ifsc,
        account_no: credentials.account,
        pan_no: credentials.pan,
        bank_name: credentials.bank,
        upi_no: credentials.upi,
        city: credentials.city,
        state: credentials.state,
        pin_code: credentials.pin,

      }
      console.log(registerData)
      let token = localStorage.getItem('token')
      const result = await fetch(`${import.meta.env.VITE_KEY}user/api/register`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'token': token
        },
        body: JSON.stringify(registerData)
      })
      const data = await result.json();
      console.log(data)
      setLoading(true)
      if (data.code == 200) {
        setTimeout(() => {
          setLoading(false)
          toast.success("Registration successfull !", { toastId: 'Registrationsuccess', });
          setCredentials({ aadhar: null, pan: null, account: null, ifsc: "", bank: "", city: "", state: "", pin: "", upi: "" })
          setTimeout(() => {
            navigate("/")
          }, 3000)
        }, 2000)

      } else {
        setTimeout(() => {
          setLoading(false)
          toast.error("Something went wrong ! try again later", { toastId: 'Registrationfail', });

        }, 2000)
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  return (
    <div className="mb-10">
      <div className="h-[50vh] w-full bg-dot-white/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 sm:flex hidden items-center justify-center bg-[#100f10] [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)]"></div>
        <img
          className="h-full w-full object-cover md:px-[6em] px-[2em] md:py-10 py-5"
          src={contact}
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
            <h1 className="sm:text-5xl text-3xl ">Contact</h1>
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
            className="sm:text-xl font-semibold  mt-2"
          >
            <span className="text-[#18dae4]">Address - </span>PLot no. K-36 , near india gate Radisson square vijay nagar Indore Madhya Pradesh 452010
          </motion.p>
          <motion.p
            initial={{ y: "70%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 1.2 }}
            className="sm:text-xl font-semibold mt-1"
          >
            <span className="text-[#18dae4]">Email -</span>  Support@sarteinfomining.com
          </motion.p>
          <motion.p
            initial={{ y: "70%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 1.2 }}
            className="sm:text-xl font-semibold mt-1"
          >
            <span className="text-[#18dae4]">Customer care no. -</span>  +91 7649825240
          </motion.p>
        </div>
        <ContactInput />
      </Wrapper>
    </div>
  );
};

export default Contact;
