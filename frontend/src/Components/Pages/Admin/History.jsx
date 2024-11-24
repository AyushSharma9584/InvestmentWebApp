import React, { useState, useMemo, useEffect } from 'react'
import Wrapper from '../../Wrapper'
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import { ToastContainer, toast } from 'react-toastify';
import Popup from './Popup';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";



const History = () => {
    const [key, setKey] = useState("");
    const [info, setInfo] = useState([]);
    const [userId, setUserId] = useState("")
    const [isOpen, setIsOpen] = useState(false);
    const [userEmail, setUserEmail] = useState("")
    const [currentPage, setCurrentPage] = useState(1);
    const RecordsPerPage = 5;
    const lastIndex = currentPage * RecordsPerPage;
    const firstIndex = lastIndex - RecordsPerPage;
    const records = info.slice(firstIndex, lastIndex);
    const nPage = Math.ceil(info.length / RecordsPerPage);
    const numbers = [...Array(nPage + 1).keys()].slice(1);
    const navigate = useNavigate()


    const prePage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    };


    const nextPage = () => {
        if (currentPage !== nPage) {
            setCurrentPage(currentPage + 1);
        }

    };





    const getAll = async () => {
        try {
            let token = localStorage.getItem('token')
            if (token) {
                const result = await fetch(`${import.meta.env.VITE_KEY}user/api/get_all_users`, {
                    method: "Get",
                    headers: {
                        'Content-Type': 'application/json',
                        'token': token
                    }
                })
                const data = await result.json();
                console.log(data.data.length)
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
            setLock1(false)
            toast.error("Server loss !!!");
        }
    }
    useEffect(() => {
        getAll()
        let val = localStorage.getItem("token")
        if (val) {
            setKey(val)
            const decoded = jwtDecode(val);
            setUserId(decoded.userId)
        } else {
            navigate("/")
        }
    }, [key, userId, info])

    const OpenPopup = (userEmailId) => {
        setIsOpen(true)
        setUserEmail(userEmailId)

    }

    return (

        <div className='mt-[2em]'>
            {
                <Popup userEmail={userEmail} isOpen={isOpen} setIsOpen={setIsOpen} />
            }

            {
                userId != "6730b71d071d46fd90b2e0f3" ? <h1 style={{ textAlign: "center", color: "white", marginTop: "30px", marginBottom: "30px", fontSize: "25px" }}>You are not allowed to access this route!!</h1> :
                    <>
                        <Wrapper>


                            <h1 className="flex flex-col items-center text-center justify-center sm:text-5xl text-3xl overflow-hidden">


                                <motion.span
                                    initial={{ y: "70%", opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ ease: [0.22, 1, 0.36, 1], duration: 1.2 }}
                                >
                                    {" "}
                                    <h1>User details</h1>
                                </motion.span>
                                <motion.span
                                    initial={{ width: 0, opacity: 0 }}
                                    whileInView={{ width: "8%", opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ ease: [0.22, 1, 0.36, 1], duration: 1.2 }}
                                    className="sm:border-2 border-[1.5px] border-[#18dae4] w-0 rounded-md"
                                ></motion.span>
                            </h1>
                            {/* <div className='md:mt-[30px] md:mb-[30px] md:border-2 md:border-[#18dae4] md:rounded p-[0px] md:p-[20px]' >

                </div> */}
                            <div>
                                <ul class="flex flex-wrap text-sm font-medium text-center text-white-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
                                    <li class="me-2">
                                        <a href="#" aria-current="page" class="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500">User Info</a>
                                    </li>
                                    <li class="me-2">
                                        <a href="#" class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Support</a>
                                    </li>

                                </ul>
                            </div>

                            <div className=" flex  items-center justify-center pt-10 pb-14">
                                <div className="w-full  px-2">
                                    {/* <div>
                            <h1 className="text-2xl font-medium">
                                Tailwind Table With Pagination
                            </h1>
                        </div> */}
                                    <div className="w-full overflow-x-scroll md:overflow-auto  max-w-7xl 2xl:max-w-none ">
                                        <table className="table-auto overflow-scroll md:overflow-auto w-full text-left font-inter border-2 border-[#18dae4] ">
                                            <thead className="rounded-lg text-base text-white font-semibold w-full">
                                                <tr className="">
                                                    <th className="py-3 px-3 text-[#18dae4] sm:text-base font-bold whitespace-nowrap">
                                                        Sr No.
                                                    </th>
                                                    <th className="py-3 px-3 text-[#18dae4] sm:text-base font-bold whitespace-nowrap">
                                                        Name
                                                    </th>
                                                    <th className="py-3 px-3  justify-center gap-1 text-[#18dae4] sm:text-base font-bold whitespace-nowrap">
                                                        Email Id
                                                    </th>
                                                    <th className="py-3 px-3 text-[#18dae4] sm:text-base font-bold whitespace-nowrap">
                                                        KYC Status
                                                    </th>
                                                    <th className="py-3 px-3 text-[#18dae4] sm:text-base font-bold whitespace-nowrap">
                                                        Admin approval
                                                    </th>
                                                    <th className="py-3 px-5 text-[#18dae4] sm:text-base font-bold whitespace-nowrap">
                                                        Detail
                                                    </th>
                                                    <th className="flex items-center py-3 px-5 text-[#18dae4] sm:text-base font-bold whitespace-nowrap gap-1">
                                                        Action
                                                    </th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                {records?.map((data, index) => (
                                                    <tr
                                                        className={`${index % 2 == 0 ? "bg-[#525453]" : "bg-[#787d7a]"
                                                            }`}
                                                        key={index}
                                                    >
                                                        <td
                                                            className={`py-2 px-3 font-normal text-base ${index == 0
                                                                ? "border-t-2 border-black"
                                                                : index == records?.length
                                                                    ? "border-y"
                                                                    : "border-t"
                                                                } whitespace-nowrap`}
                                                        >
                                                            {data?.id}
                                                        </td>
                                                        <td
                                                            className={`py-2 px-3 font-normal text-base ${index == 0
                                                                ? "border-t-2 border-black"
                                                                : index == records?.length
                                                                    ? "border-y"
                                                                    : "border-t"
                                                                } whitespace-nowrap`}
                                                        >
                                                            {data?.name}
                                                        </td>
                                                        <td
                                                            className={`py-2 px-3 font-normal text-base ${index == 0
                                                                ? "border-t-2 border-black"
                                                                : index == records?.length
                                                                    ? "border-y"
                                                                    : "border-t"
                                                                } whitespace-nowrap`}
                                                        >
                                                            {data?.email}
                                                        </td>
                                                        <td
                                                            className={`py-2 px-3 text-base  font-normal ${index == 0
                                                                ? "border-t-2 border-black"
                                                                : index == records?.length
                                                                    ? "border-y"
                                                                    : "border-t"
                                                                } whitespace-nowrap`}
                                                        >
                                                            {data.register_status == false ? "Pending" : "Done"}
                                                        </td>
                                                        <td
                                                            className={`py-2 px-3 text-base  font-normal ${index == 0
                                                                ? "border-t-2 border-black"
                                                                : index == records?.length
                                                                    ? "border-y"
                                                                    : "border-t"
                                                                } min-w-[250px]`}
                                                        >
                                                            {data?.Description}
                                                        </td>
                                                        <td
                                                            className={`py-5 px-4 text-base  font-normal ${index == 0
                                                                ? "border-t-2 border-black"
                                                                : index == records?.length
                                                                    ? "border-y"
                                                                    : "border-t"
                                                                }`}
                                                        >
                                                            <button onClick={() => OpenPopup(data.email)} disabled={data.register_status === false}
                                                                className={`font-medium py-1 px-4 rounded transition-all active:scale-95 me-5 ${data.register_status === false
                                                                    ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                                                                    : "bg-[#18dae4] text-black hover:bg-[#0b9198] hover:text-white"
                                                                    }`}>
                                                                View
                                                            </button>
                                                        </td>
                                                        <td
                                                            className={`py-5 px-4 text-base  font-normal ${index == 0
                                                                ? "border-t-2 border-black"
                                                                : index == records?.length
                                                                    ? "border-y"
                                                                    : "border-t"
                                                                }`}
                                                        >
                                                            <button className="bg-red-500 text-black font-medium py-1 px-4 rounded transition-all hover:bg-red-600 hover:text-white active:scale-95 me-5">
                                                                Delete
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="w-full  flex justify-center sm:justify-between flex-col sm:flex-row gap-5 mt-1.5 px-1 items-center">

                                        <div className="flex justify-end items-center mx-5 my-5">
                                            <button
                                                onClick={prePage}
                                                className={`mx-1 px-3 py-0 rounded ${currentPage === 1 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-500 text-white'}`}
                                                disabled={currentPage === 1}
                                            >
                                                <FaArrowLeft className="text-lg" />
                                            </button>
                                            <p className="mx-2">{currentPage}</p>
                                            <p className="mx-2">of</p>
                                            <p>{numbers.length}</p>
                                            <button
                                                onClick={nextPage}
                                                className={`mx-1 px-3 py-0 rounded fs-bold ${currentPage === nPage ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-500 text-white'}`}
                                                disabled={currentPage === nPage}
                                            >
                                                <FaArrowRight className="text-lg" />
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </Wrapper>
                    </>
            }
        </div>

    )
}

export default History
