import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from "framer-motion";
import { jwtDecode } from "jwt-decode";

const Registration = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [credentials, setCredentials] = useState({ aadhar: "", pan: "", account: "", ifsc: "", bank: "", city: "", state: "", pin: "", upi: "" })
    const [info, setInfo] = useState({ name: "", email: "" })
    const [error, setError] = useState(false)
    useEffect(() => {
        const token = localStorage.getItem('token')
        const decoded = jwtDecode(token);
        setInfo({ name: decoded.userName, email: decoded.userEmail })
    }, [])
    const handleSubmit = () => {
        console.log("a")
    }
    return (
        <div >
            <AnimatePresence >
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
                            className="bg-[#100f10] text-white px-6 rounded-lg   shadow-xl cursor-default relative text-start overflow-auto h-[85vh]"
                        >

                            <img src="sarte.png" className="w-[110px] h-[110px] m-auto" />
                            <h3 className="text-3xl font-bold text-center mb-2">
                                Registration
                            </h3>


                            <div class=" shadow-md rounded px-2 pt-5 pb-3 mb-4 flex flex-col ">

                                <div class="-mx-3 md:flex mb-6">
                                    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
                                            Name
                                        </label>
                                        <input value={info.name} class=" block text-black bg-white border border-gray-300 w-full text-[15px] px-4 py-3 rounded-md outline-blue-500" id="grid-first-name" type="text" />
                                    </div>
                                    <div class="md:w-1/2 px-3">
                                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
                                            Email
                                        </label>
                                        <input value={info.email} class="text-black bg-white border border-gray-300 w-full text-[15px] px-4 py-3 rounded-md outline-blue-500" id="grid-last-name" type="text" />
                                    </div>
                                </div>

                                <div class="-mx-3 md:flex mb-6">
                                    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
                                            Aadhaar number
                                        </label>
                                        <input value={credentials.aadhar} class=" block text-black bg-white border border-gray-300 w-full text-[15px] px-4 py-3 rounded-md outline-blue-500" id="grid-first-name" type="text" placeholder="Enter Aadhaar number" />
                                        {error && credentials.aadhar == "" ? <p className='text-sm' ><i>Please enter Aadhaar number</i></p> : " "}

                                    </div>
                                    <div class="md:w-1/2 px-3">
                                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
                                            PAN number
                                        </label>
                                        <input value={credentials.pan} class="text-black bg-white border border-gray-300 w-full text-[15px] px-4 py-3 rounded-md outline-blue-500" id="grid-last-name" type="text" placeholder="Enter PAN number" />
                                        {error && credentials.pan == "" ? <p className='text-sm' ><i>Please enter Pan  number</i></p> : " "}


                                    </div>
                                </div>

                                <div class="-mx-3 md:flex mb-6">
                                    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
                                            Account number
                                        </label>
                                        <input value={credentials.account} class=" block text-black bg-white border border-gray-300 w-full text-[15px] px-4 py-3 rounded-md outline-blue-500" id="grid-first-name" type="text" placeholder="Enter Account number" />
                                        {error && credentials.account == "" ? <p className='text-sm' ><i>Please enter Account number</i></p> : " "}
                                    </div>
                                    <div class="md:w-1/2 px-3">
                                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
                                            IFSC code
                                        </label>
                                        <input value={credentials.ifsc} class="text-black bg-white border border-gray-300 w-full text-[15px] px-4 py-3 rounded-md outline-blue-500" id="grid-last-name" type="text" placeholder="Enter IFSC code" />
                                        {error && credentials.ifsc == "" ? <p className='text-sm' ><i>Please enter IFSC number</i></p> : " "}

                                    </div>
                                </div>

                                <div class="-mx-3 md:flex mb-6">
                                    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
                                            Bank name
                                        </label>
                                        <input value={credentials.bank} class=" block text-black bg-white border border-gray-300 w-full text-[15px] px-4 py-3 rounded-md outline-blue-500" id="grid-first-name" type="text" placeholder="Enter Bank name" />
                                        {error && credentials.bank == "" ? <p className='text-sm' ><i>Please enter Bank name</i></p> : " "}

                                    </div>
                                    <div class="md:w-1/2 px-3">
                                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
                                            UPI number <span className='ml-3'>(optional)</span>
                                        </label>
                                        <input value={credentials.upi} class="text-black bg-white border border-gray-300 w-full text-[15px] px-4 py-3 rounded-md outline-blue-500" id="grid-last-name" type="text" placeholder="Enter UPI " />

                                    </div>
                                </div>
                                <div class="-mx-3 md:flex mb-2">
                                    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-city">
                                            City
                                        </label>
                                        <input value={credentials.city} class="text-black bg-white border border-gray-300 w-full text-[15px] px-4 py-3 rounded-md outline-blue-500" id="grid-city" type="text" placeholder="Enter City" />
                                        {error && credentials.city == "" ? <p className='text-sm' ><i>Please enter City</i></p> : " "}

                                    </div>
                                    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-city">
                                            State
                                        </label>
                                        <input value={credentials.state} class="text-black bg-white border border-gray-300 w-full text-[15px] px-4 py-3 rounded-md outline-blue-500" id="grid-city" type="text" placeholder="Enter State" />
                                        {error && credentials.state == "" ? <p className='text-sm' ><i>Please enter state</i></p> : " "}

                                    </div>
                                    <div class="md:w-1/2 px-3">
                                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-zip">
                                            Pin code
                                        </label>
                                        <input value={credentials.pin} class="text-black bg-white border border-gray-300 w-full text-[15px] px-4 py-3 rounded-md outline-blue-500" id="grid-zip" type="text" placeholder="Enter Pin Code" />
                                        {error && credentials.pin == "" ? <p className='text-sm' ><i>Please enter PIN</i></p> : " "}

                                    </div>
                                </div>
                            </div>
                            <div class="!mt-4 mb-7">
                                <div className="flex gap-2  justify-center">
                                    <button

                                        onClick={handleSubmit} className="bg-[#18dae4] transition-all hover:bg-[#0b9198]  text-black hover:text-white font-semibold  py-2 rounded w-60"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>

                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>


        </div>
    )
}

export default Registration