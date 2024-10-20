/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import { GoPerson } from "react-icons/go";
import Wrapper from "../Wrapper";
import sarteLogo from "../../assets/sarte.png";
import { jwtDecode } from "jwt-decode";
import MenuMobile from "./MenuMobile";
import MenuDesktop from "./MenuDesktop";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignUp from "../Pages/SignupPage/SignUp";

const Menu = () => {
  const dropdownRef = useRef(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [userName, setUserName] = useState("")
  const [toggle, setToggle] = useState(false);
  const [isOpen, setIsOpen] = useState(false)
  const [isView, setIsView] = useState(false)
  const [error, setError] = useState(false)
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "" })
  const [loginVal, setLoginVal] = useState({ email: "", password: "" })
  const [show, setShow] = useState("translate-y-0");
  const [key, setKey] = useState("")
  const [lastScrollY, setLastScrollY] = useState(0);
  const iconRef = useRef(null);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  const loginHandleChange = (e) => {
    setLoginVal({ ...loginVal, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    let val = localStorage.getItem("token")
    if (val) {
      setKey(val)
      const decoded = jwtDecode(val);
      setUserName(decoded.userName)
    }
  }, [isOpen, isView])


  const signupHandle = async () => {
    if (!credentials.name || !credentials.email || !credentials.password) {
      setError(true)
      return
    }
    else {
      setError(false)
    }
    try {
      const signupData = {
        name: credentials.name,
        email: credentials.email,
        password: credentials.password
      }
      const result = await fetch(`${import.meta.env.VITE_KEY}auth/api/signup`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(signupData)
      })
      const data = await result.json();
      console.log(data)

      if (data.message == "Please provide a valid email address.") {
        alert("enter a valid email")
        return
      }

      if (data.message == "User already existed with the email") {
        toast.error("User already exists with this email !");
        return
      }

      if (data.code == 200) {
        toast.success("Signup successfull !", { toastId: 'signupsuccess', });
        setIsOpen(false)
        localStorage.setItem('token', data.token)
        setCredentials({ name: "", email: "", password: "" })
      }
    } catch (error) {
      console.error('Error:', error);
      // toast.error("Server loss !!!");
    }
  }



  const loginHandle = async () => {
    if (!loginVal.email || !loginVal.password) {
      setError(true)
      return
    }
    else {
      setError(false)
    }
    try {
      const loginData = {
        email: loginVal.email,
        password: loginVal.password
      }
      console.log(loginData)
      const result = await fetch(`${import.meta.env.VITE_KEY}auth/api/login`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
      })
      const data = await result.json();
      console.log(data)

      if (data.message == "Email not found") {
        toast.error("Email not found !", { toastId: 'loginerror1', })
        return
      }

      if (data.message == "Please enter correct password") {
        toast.error("Please enter correct password !", { toastId: 'loginerror2', });
        return
      }

      if (data.code == 200) {
        toast.success("Login successfull !", { toastId: 'loginsuccess', });
        setIsView(false)
        localStorage.setItem('token', data.token);
        setLoginVal({ email: "", password: "" })
      }
    } catch (error) {
      console.error('Error:', error);
      // toast.error("Server loss !!!");
    }
  }

  const logoutHandle = () => {
    localStorage.removeItem("token");
    toast.success("Logged Out !", { toastId: 'loginsuccess2', });
    setTimeout(() => {
      window.location.reload();
    }, 2100)

  }

  const controllerBar = () => {
    if (window.scrollY > 300) {
      if (window.scrollY > lastScrollY) {
        setShow("-translate-y-[90px]");
      } else {
        setShow("shadow-sm");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controllerBar);
    return () => window.removeEventListener("scroll", controllerBar);
  }, [lastScrollY]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close dropdown if click is outside the dropdown and icon
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        iconRef.current &&
        !iconRef.current.contains(event.target)
      ) {
        setToggle(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef, iconRef]);

  return (
    <>
      <nav
        className={`menu w-full h-[60px] md:h-[80px] bg-[#141314] flex items-center justify-between z-[999] sticky top-0 transition-transform duration-300 ${show}`}
      >
        <Wrapper className="h-[60px] flex items-center justify-between">
          <Link to="/">
            <img
              className="w-[60px] md:w-[100px]"
              src={sarteLogo}
              alt="Sarte Logo"
            />
          </Link>

          <MenuDesktop
            showCatMenu={showCatMenu}
            setShowCatMenu={setShowCatMenu}
          />

          {mobileMenu && (
            <MenuMobile
              showCatMenu={showCatMenu}
              setShowCatMenu={setShowCatMenu}
              setMobileMenu={setMobileMenu}
            />
          )}

          <div className="flex items-center gap-2 relative">
            <div >

              <div ref={iconRef} className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center cursor-pointer hover:bg-black/[0.05] ">
                <GoPerson onClick={() => setToggle(!toggle)} className="text-[15px] md:text-[20px]" />
              </div>


              {
                toggle &&
                <div ref={dropdownRef} className="origin-top-right absolute right-0 mt-1 py-3 w-[120px] h-auto bg-neutral-800 rounded-md shadow-lg text-center">
                  {
                    !key ? <> <h1 onClick={() => setIsOpen(!isOpen)} className="cursor-pointer mb-1 hover:text-[#18dae4]">Signup</h1>
                      <h1 onClick={() => setIsView(!isOpen)} className="cursor-pointer hover:text-[#18dae4]">Login</h1></> :
                      <h1 onClick={logoutHandle} className="cursor-pointer hover:text-[#18dae4]">Logout</h1>
                  }


                </div>

              }

            </div>
            <div>
              {
                userName != "" ? <h1 className="text-[#18dae4]">{userName}</h1> : ""
              }

            </div>

            <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex md:hidden justify-center items-center cursor-pointer hover:bg-black/[0.05] relative -mr-2">
              {mobileMenu ? (
                <VscChromeClose
                  className="text-[20px]"
                  onClick={() => setMobileMenu(false)}
                />
              ) : (
                <BiMenuAltRight
                  className="text-[22px]"
                  onClick={() => setMobileMenu(true)}
                />
              )}
            </div>
          </div>
        </Wrapper>
      </nav>


      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-[999] grid place-items-center overflow-y-scroll cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0, rotate: "12.5deg" }}
              animate={{ scale: 1, rotate: "0deg" }}
              exit={{ scale: 0, rotate: "0deg" }}
              onClick={(e) => e.stopPropagation()}
              style={{ border: "1px solid #18dae4" }}
              className="bg-[#100f10] text-white px-6 rounded-lg  md:w-[30%] shadow-xl cursor-default relative text-start overflow-auto h-[80vh]"
            >
              <div className="relative z-10">
                <img src="sarte.png" className="w-[110px] h-[110px] m-auto" />
                <h3 className="text-3xl font-bold text-center mb-2">
                  SignUp
                </h3>
                <div>
                  <div className="mr-2 flex flex-col  sm:mt-0 ">
                    <div class="space-y-6">
                      <div>
                        <label class="text-white text-sm mb-2 block">Full Name</label>
                        <input value={credentials.name} onChange={handleChange} name="name" type="text" class="text-black bg-white border border-gray-300 w-full text-[15px] px-4 py-3 rounded-md outline-blue-500" placeholder="Enter name" />
                        {error && credentials.name == "" ? <p className='text-sm' ><i>Please enter name</i></p> : " "}
                      </div>
                      <div>
                        <label class="text-white text-sm mb-2 block">Email Id</label>
                        <input value={credentials.email} onChange={handleChange} name="email" type="text" class="text-black bg-white border border-gray-300 w-full text-[15px] px-4 py-3 rounded-md outline-blue-500" placeholder="Enter email" />
                        {error && credentials.email == "" ? <p className='text-sm' ><i>Please enter email</i></p> : " "}
                      </div>
                      <div>
                        <label class="text-white text-sm mb-2 block">Create Password</label>
                        <input value={credentials.password} onChange={handleChange} name="password" type={showPassword ? "text" : "password"} class="text-black bg-white border border-gray-300 w-full text-[15px] px-4 py-3 rounded-md outline-blue-500" placeholder="Enter password" />
                        {error && credentials.password == "" ? <p className='text-sm' ><i>Please enter password</i></p> : " "}
                        <input
                          id="check"
                          className="mt-3"
                          type="checkbox"
                          value={showPassword}
                          onChange={() =>
                            setShowPassword((prev) => !prev)
                          }
                        />
                        <label className="text-[13px] ml-2" for="check">Show Password</label>
                      </div>

                    </div>

                    <div class="!mt-12">
                      <div className="flex gap-2  justify-center">
                        <button
                          onClick={signupHandle}
                          className="bg-[#18dae4] transition-all hover:bg-[#0b9198]  text-black hover:text-white font-semibold  py-2 rounded w-60"
                        >
                          SignUp
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>



      <AnimatePresence>
        {isView && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsView(false)}
            className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-[999] grid place-items-center overflow-y-scroll cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0, rotate: "12.5deg" }}
              animate={{ scale: 1, rotate: "0deg" }}
              exit={{ scale: 0, rotate: "0deg" }}
              onClick={(e) => e.stopPropagation()}
              style={{ border: "1px solid #18dae4" }}
              className="bg-[#100f10] text-white px-6 rounded-lg  md:w-[30%] shadow-xl cursor-default relative text-start overflow-auto h-[70vh]"
            >
              <div className="relative z-10">
                <img src="sarte.png" className="w-[110px] h-[110px] m-auto" />
                <h3 className="text-3xl font-bold text-center mb-2">
                  Login
                </h3>
                <div>
                  <div className="mr-2 flex flex-col  sm:mt-0 ">
                    <div class="space-y-6">
                      <div>
                        <label class="text-white text-sm mb-2 block">Email Id</label>
                        <input value={loginVal.email} onChange={loginHandleChange} name="email" type="text" class="text-black bg-white border border-gray-300 w-full text-[15px] px-4 py-3 rounded-md outline-blue-500" placeholder="Enter email" />
                        {error && loginVal.email == "" ? <p className='text-sm' ><i className="text-red-600">Please enter email</i></p> : " "}
                      </div>
                      <div>
                        <label class="text-white text-sm mb-2 block">Password</label>
                        <input value={loginVal.password} onChange={loginHandleChange} name="password" type={showPassword ? "text" : "password"} class="text-black bg-white border border-gray-300 w-full text-[15px] px-4 py-3 rounded-md outline-blue-500" placeholder="Enter password" />
                        {error && loginVal.password == "" ? <p className='text-sm' ><i className="text-red-600">Please enter password</i></p> : " "}
                        <input
                          id="check"
                          className="mt-3"
                          type="checkbox"
                          value={showPassword}
                          onChange={() =>
                            setShowPassword((prev) => !prev)
                          }
                        />
                        <label className="text-[13px] ml-2" for="check">Show Password</label>
                      </div>

                    </div>

                    <div class="!mt-12">
                      <div className="flex gap-2  justify-center">
                        <button
                          onClick={loginHandle}
                          className="bg-[#18dae4] transition-all hover:bg-[#0b9198]  text-black hover:text-white font-semibold  py-2 rounded w-60"
                        >
                          Login
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>





    </>
  );
};

export default Menu;
