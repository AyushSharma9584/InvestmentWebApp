import { motion } from "framer-motion";
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

const ContactInput = () => {
  const [credentials, setCredentials] = useState({ name: "", email: "", phone: "", message: "" })
  const [error, setError] = useState(false)
  const [email, setEmail] = useState(false)
  const [phone, setPhone] = useState(false)
  const [lock, setLock] = useState(false)

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  const handleSupport = async (e) => {
    e.preventDefault();
    setEmail(false)
    setPhone(false)
    if (!credentials.name || !credentials.email || !credentials.phone || !credentials.message) {
      setError(true)
      return
    }
    else {
      setError(false)
    }

    try {
      const supportData = {
        name: credentials.name,
        email: credentials.email,
        phone: credentials.phone,
        message: credentials.message,
      }
      console.log(supportData)
      setLock(true)

      const result = await fetch(`${import.meta.env.VITE_KEY}user/api/support`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(supportData)
      })
      const data = await result.json();
      if (data.error == "Invalid email format") {
        setEmail(true)
        setLock(false)
        return
      } if (data.error == "Phone number must be 10 digits") {
        setPhone(true)
        setLock(false)
        return
      }

      console.log(data)
      if (data.code == 200) {
        setTimeout(() => {
          toast.success("Message sent !", { toastId: 'Messagesuccess', });
          setCredentials({ name: "", email: "", phone: "", message: "" })
          setLock(false)
          setEmail(false)
          setPhone(false)

        }, 2000)

      } else {
        setTimeout(() => {
          toast.error("Something went wrong ! try again later", { toastId: 'Messagefail', });
          setLock(false)

        }, 2000)
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <div className="contact-form">
      <div className="contactForm overflow-y-auto overflow-x-hidden">
        <motion.div
          initial={{ x: "20%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: [0.22, 1, 0.36, 1], duration: 1 }}
          className="map-container"
        >
          <div className="mapBg"></div>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117763.55658338664!2d75.78144835934833!3d22.724109981465016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1722594485700!5m2!1sen!2sin"
              width="700"
              height="550"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: "-20%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: [0.22, 1, 0.36, 1], duration: 1 }}
        >
          <form onSubmit={handleSupport}>
            <input
              type="text"
              name="name"
              required
              onChange={handleChange}
              value={credentials.name}
              className="input"
              placeholder="your name"
            />
            {error && credentials.name == "" ? <p className='text-sm text-start ms-4 mb-5' ><i>Please enter name</i></p> : " "}
            <input
              type="email"
              name="email"
              required
              value={credentials.email}
              onChange={handleChange}
              className="input"
              placeholder="your email"
            />
            {error && credentials.email == "" ? <p className='text-sm text-start ms-4 mb-5' ><i>Please enter Email</i></p> : " "}
            {email && <p className='text-sm text-start ms-4 mb-5' ><i>Please enter a valid email</i></p>}
            <input
              type="text"
              name="phone"
              required
              value={credentials.phone}
              onChange={handleChange}
              className="input"
              placeholder="your Number"
            />
            {error && credentials.phone == "" ? <p className='text-sm text-start ms-4 mb-5' ><i>Please enter Phone number</i></p> : " "}
            {phone && <p className='text-sm text-start ms-4 mb-5' ><i>Please enter a valid Phone number</i></p>}
            <textarea
              className="input overflow-y-auto overflow-x-hidden"
              cols="30"
              rows="5"
              name="message"
              value={credentials.message}
              onChange={handleChange}
              placeholder="Your message..."
            ></textarea>
            {error && credentials.message == "" ? <p className='text-sm text-start ms-4 mb-5' ><i>Please enter detail</i></p> : " "}
            <input
              type="submit"
              className={`${lock
                ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                : "bg-[#18dae4] text-black hover:bg-[#0b9198] hover:text-white"
                } font-medium py-2 px-10 rounded transition-all active:scale-95`}
              value="Send Message"
              disabled={lock}
            />

          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default ContactInput
