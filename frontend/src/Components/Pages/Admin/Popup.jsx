import React, { useState, useMemo, useEffect } from 'react'
/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";
import Wrapper from '../../Wrapper'
import { ToastContainer, toast } from 'react-toastify';

const Popup = ({ isOpen, setIsOpen, userEmail }) => {
    const [info, setInfo] = useState({
        name: "",
        email: "",
        aadhaar_no: "",
        pan_no: "",
        account_no: "",
        ifsc: "",
        bank_name: "",
        upi_no: "",
        city: "",
        state: "",
        pin_code: "",
        approval_status: ""

    });

    useEffect(() => {
        if (isOpen) getAll();
    }, [isOpen])


    const getAll = async () => {
        try {

            let token = localStorage.getItem('token')

            console.log(token)
            const id = userEmail
            console.log("Payload being sent:", JSON.stringify({ email: id }));
            console.log(id)
            if (token) {
                const result = await fetch(`${import.meta.env.VITE_KEY}user/api/get_kyc`, {
                    method: "Post",
                    headers: {
                        'Content-Type': 'application/json',
                        'token': token
                    },
                    body: JSON.stringify({ email: id })
                })
                const data = await result.json();
                console.log(data.data)
                if (data.data.length == 0) {
                    toast.warn("No data found !");
                    return
                }
                if (!data.data) {
                    toast.error("Server loss !!");
                    return
                }
                setInfo(data.data)

            } else {
                toast.error("please login  !!");
            }

        } catch (error) {
            console.error('Error:', error);
            // setLock1(false)
            toast.error("Server loss !!!");
        }
    }

    return (
        <div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="bg-slate-900/20 backdrop-blur p-0 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer mt-[40px]"
                    >
                        <motion.div
                            initial={{ scale: 0, rotate: "12.5deg" }}
                            animate={{ scale: 1, rotate: "0deg" }}
                            exit={{ scale: 0, rotate: "0deg" }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-[#100f10] text-white p-0 rounded-lg  md:w-[70%] shadow-xl cursor-default relative text-start overflow-auto h-[80vh]"
                        >
                            <Wrapper>
                                <div className='md:mt-[38px] md:mb-[30px] md:border-2 md:border-[#18dae4] md:rounded p-[0px] md:p-[20px]'>
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
                                                <input value={info.name} disabled class=" block text-black bg-white border border-gray-300 w-full text-[15px] px-4 py-3 rounded-md outline-blue-500" id="grid-first-name" type="text" />
                                            </div>
                                            <div class="md:w-1/2 px-3">
                                                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
                                                    Email
                                                </label>
                                                <input value={info.email} disabled class="text-black bg-white border border-gray-300 w-full text-[15px] px-4 py-3 rounded-md outline-blue-500" id="grid-last-name" type="text" />
                                            </div>
                                        </div>

                                        <div class="-mx-3 md:flex mb-6">
                                            <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
                                                    Aadhaar number
                                                </label>
                                                <input value={info.aadhaar_no} disabled name='aadhar' class=" block text-black bg-white border border-gray-300 w-full text-[15px] px-4 py-3 rounded-md outline-blue-500" id="grid-first-name" type="text" placeholder="Enter Aadhaar number" />


                                            </div>
                                            <div class="md:w-1/2 px-3">
                                                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
                                                    PAN number
                                                </label>
                                                <input value={info.pan_no} disabled name='pan' class="text-black bg-white border border-gray-300 w-full text-[15px] px-4 py-3 rounded-md outline-blue-500" id="grid-last-name" type="text" placeholder="Enter PAN number" />


                                            </div>
                                        </div>

                                        <div class="-mx-3 md:flex mb-6">
                                            <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
                                                    Account number
                                                </label>
                                                <input value={info.account_no} disabled name='account' class=" block text-black bg-white border border-gray-300 w-full text-[15px] px-4 py-3 rounded-md outline-blue-500" id="grid-first-name" type="text" placeholder="Enter Account number" />

                                            </div>
                                            <div class="md:w-1/2 px-3">
                                                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
                                                    IFSC code
                                                </label>
                                                <input value={info.ifsc} disabled name='ifsc' class="text-black bg-white border border-gray-300 w-full text-[15px] px-4 py-3 rounded-md outline-blue-500" id="grid-last-name" type="text" placeholder="Enter IFSC code" />

                                            </div>
                                        </div>

                                        <div class="-mx-3 md:flex mb-6">
                                            <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
                                                    Bank name
                                                </label>
                                                <input value={info.bank_name} disabled name='bank' class=" block text-black bg-white border border-gray-300 w-full text-[15px] px-4 py-3 rounded-md outline-blue-500" id="grid-first-name" type="text" placeholder="Enter Bank name" />

                                            </div>
                                            <div class="md:w-1/2 px-3">
                                                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
                                                    UPI number <span className='ml-3'>(optional)</span>
                                                </label>
                                                <input value={info.upi_no} disabled name='upi' class="text-black bg-white border border-gray-300 w-full text-[15px] px-4 py-3 rounded-md outline-blue-500" id="grid-last-name" type="text" placeholder="Enter UPI " />

                                            </div>
                                        </div>
                                        <div class="-mx-3 md:flex mb-2">
                                            <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-city">
                                                    City
                                                </label>
                                                <input value={info.city} disabled name='city' class="text-black bg-white border border-gray-300 w-full text-[15px] px-4 py-3 rounded-md outline-blue-500" id="grid-city" type="text" placeholder="Enter City" />

                                            </div>
                                            <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-city">
                                                    State
                                                </label>
                                                <input value={info.state} disabled name='state' class="text-black bg-white border border-gray-300 w-full text-[15px] px-4 py-3 rounded-md outline-blue-500" id="grid-city" type="text" placeholder="Enter State" />


                                            </div>
                                            <div class="md:w-1/2 px-3">
                                                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-zip">
                                                    Pin code
                                                </label>
                                                <input value={info.pin_code} disabled name='pin' class="text-black bg-white border border-gray-300 w-full text-[15px] px-4 py-3 rounded-md outline-blue-500" id="grid-zip" type="text" placeholder="Enter Pin Code" />

                                            </div>
                                        </div>
                                    </div>
                                    {/* <div class="!mt-4 mb-7">
                                        <div className="flex gap-2  justify-center">
                                            <button

                                                className="bg-[#18dae4] transition-all hover:bg-[#0b9198]  text-black hover:text-white font-semibold  py-2 rounded w-60"
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </div> */}

                                    <div className="!mt-4 mb-7">
                                        <div className="flex flex-col md:flex-row gap-2 justify-center">
                                            <button
                                                className="bg-[#18dae4] transition-all hover:bg-[#0b9198] text-black hover:text-white font-semibold py-2 rounded w-60"
                                            >
                                                Button 1
                                            </button>
                                            <button
                                                className="bg-[#18dae4] transition-all hover:bg-[#0b9198] text-black hover:text-white font-semibold py-2 rounded w-60"
                                            >
                                                Button 2
                                            </button>
                                            <button
                                                className="bg-[#18dae4] transition-all hover:bg-[#0b9198] text-black hover:text-white font-semibold py-2 rounded w-60"
                                            >
                                                Button 3
                                            </button>
                                        </div>
                                    </div>


                                </div>
                            </Wrapper>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    )
}

export default Popup
