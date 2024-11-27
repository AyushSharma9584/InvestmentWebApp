import React, { useState, useMemo, useEffect } from 'react'
/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";
import Wrapper from '../../Wrapper'
import { ToastContainer, toast } from 'react-toastify';


const DeletePopup = ({ show, setShow, del }) => {
    const deletehandle = async () => {
        try {

            let token = localStorage.getItem('token')
            if (token) {
                setShow()
                const result = await fetch(`${import.meta.env.VITE_KEY}user/api/delete_user`, {
                    method: "Delete",
                    headers: {
                        'Content-Type': 'application/json',
                        'token': token
                    },
                    body: JSON.stringify({ email: del.email })
                })
                const data = await result.json();

                if (data.code == 200) {
                    toast.success("User deleted successfully !!")
                }
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
                {show && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShow(false)}
                        className="bg-slate-900/20 backdrop-blur p-0 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer mt-[40px]"
                    >
                        <motion.div
                            initial={{ scale: 0, rotate: "12.5deg" }}
                            animate={{ scale: 1, rotate: "0deg" }}
                            exit={{ scale: 0, rotate: "0deg" }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-[#100f10] text-white p-0 rounded-lg  md:w-[30%] shadow-xl cursor-default relative text-start overflow-auto h-[30vh]"
                        >
                            <FiAlertCircle className="text-white/10 rotate-12 text-[110px] absolute z-0  -left-24" />
                            <Wrapper>
                                <div className="bg-red-500 w-14 h-14 mb-2 mt-2 rounded-full text-3xl text-white grid place-items-center mx-auto">
                                    <FiAlertCircle />
                                </div>
                                <h3 className="text-2xl font-bold text-center mb-2">
                                    Are you sure , you want to <span className='text-red-500'>DELETE</span> {del.name}
                                </h3>
                                <div style={{ margin: "20px", display: "flex", justifyContent: "center" }}>
                                    <button onClick={deletehandle} className="bg-red-500 text-black font-medium py-2 px-4 rounded transition-all hover:bg-red-600 hover:text-white text-white active:scale-95 me-5">
                                        Yes, I'm sure
                                    </button>
                                    <button onClick={() => setShow()} className="bg-gray-800 text-gray-400 font-medium py-2 px-4 rounded transition-all hover:bg-gray-700 hover:text-white active:scale-95 me-5">
                                        No, cancel
                                    </button>

                                </div>


                            </Wrapper>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    )
}

export default DeletePopup
