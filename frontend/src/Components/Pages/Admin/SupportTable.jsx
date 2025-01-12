import React, { useState, useMemo, useEffect } from 'react'
import Wrapper from '../../Wrapper'
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const SupportTable = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [info, setInfo] = useState([]);
    const RecordsPerPage = 5;
    const lastIndex = currentPage * RecordsPerPage;
    const firstIndex = lastIndex - RecordsPerPage;
    const records = info.slice(firstIndex, lastIndex);
    const nPage = Math.ceil(info.length / RecordsPerPage);
    const numbers = [...Array(nPage + 1).keys()].slice(1);
    const navigate = useNavigate()
    const [isExpanded, setIsExpanded] = useState({});


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
    useEffect(() => {
        getAll()
        let val = localStorage.getItem("token")
        if (val) {
            const decoded = jwtDecode(val);
        } else {
            navigate("/")
        }
    }, [info])

    const getAll = async () => {
        try {
            let token = localStorage.getItem('token')
            if (token) {
                const result = await fetch(`${import.meta.env.VITE_KEY}user/api/AllsupportReq`, {
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

            toast.error("Server loss !!!");
        }
    }


    function formatDate(isoString) {
        const date = new Date(isoString);

        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        const formattedDate = date.toLocaleDateString('en-GB', options);

        return formattedDate;
    }

    const truncateMessage = (message, maxLength = 20) => {
        if (message.length <= maxLength) {
            return message;
        }
        return `${message.slice(0, maxLength)}...`;
    };

    const toggleMessageExpansion = (data) => {
        setIsExpanded(prevState => ({
            ...prevState,
            [data._id]: !prevState[data._id] // Toggle expansion based on message ID
        }));
    };


    return (
        <>
            <Wrapper>

                <div className=" flex  items-center justify-center pt-1 pb-1">
                    <div className="w-full  px-2">


                        <div className="w-full overflow-x-scroll md:overflow-auto  max-w-7xl 2xl:max-w-none ">

                            <table className="table-auto overflow-scroll md:overflow-auto w-full text-left font-inter border-2 border-[#18dae4] ">
                                <thead className="rounded-lg text-base text-white font-semibold w-full">
                                    <tr className="">
                                        <th className="py-3 px-3 text-[#18dae4] sm:text-base font-bold whitespace-nowrap">
                                            Sr No.
                                        </th>
                                        <th className="py-3 px-3 text-[#18dae4] sm:text-base font-bold whitespace-nowrap">
                                            Created At
                                        </th>
                                        <th className="py-3 px-3  justify-center gap-1 text-[#18dae4] sm:text-base font-bold whitespace-nowrap">
                                            Name
                                        </th>
                                        <th className="py-3 px-3  justify-center gap-1 text-[#18dae4] sm:text-base font-bold whitespace-nowrap">
                                            email
                                        </th>
                                        <th className="py-3 px-3 text-[#18dae4] sm:text-base font-bold whitespace-nowrap">
                                            Phone Number
                                        </th>
                                        <th className="py-3 px-3 text-[#18dae4] sm:text-base font-bold whitespace-nowrap">
                                            Detail
                                        </th>
                                        <th className="py-3 px-5 text-[#18dae4] sm:text-base font-bold whitespace-nowrap">
                                            Action
                                        </th>
                                        {/* <th className="flex items-center py-3 px-5 text-[#18dae4] sm:text-base font-bold whitespace-nowrap gap-1">
                                    Action
                                </th> */}

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
                                                {(currentPage - 1) * RecordsPerPage + index + 1}.
                                            </td>
                                            <td
                                                className={`py-2 px-3 font-normal text-base ${index == 0
                                                    ? "border-t-2 border-black"
                                                    : index == records?.length
                                                        ? "border-y"
                                                        : "border-t"
                                                    } whitespace-nowrap`}
                                            >
                                                {formatDate(data?.created_date)}
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
                                                className={`py-2 px-3 text-base  font-normal ${index == 0
                                                    ? "border-t-2 border-black"
                                                    : index == records?.length
                                                        ? "border-y"
                                                        : "border-t"
                                                    } whitespace-nowrap`}
                                            >
                                                {data.email}
                                            </td>
                                            <td
                                                className={`py-2 px-3 text-base  font-normal ${index == 0
                                                    ? "border-t-2 border-black"
                                                    : index == records?.length
                                                        ? "border-y"
                                                        : "border-t"
                                                    } whitespace-nowrap`}
                                            >
                                                {data.phone}
                                            </td>
                                            {/* <td
                                        className={`py-2 px-3 text-base  font-normal ${index == 0
                                            ? "border-t-2 border-black"
                                            : index == records?.length
                                                ? "border-y"
                                                : "border-t"
                                            } min-w-[250px]`}
                                    >
                                        {data?.message}
                                    </td>
                                    <td
                                        className={`py-5 px-4 text-base  font-normal ${index == 0
                                            ? "border-t-2 border-black"
                                            : index == records?.length
                                                ? "border-y"
                                                : "border-t"
                                            }`}
                                    >
                                        <button onClick={() => showPopup(data.name, data.email)} className="bg-red-500 text-black font-medium py-1 px-4 rounded transition-all hover:bg-red-600 hover:text-white active:scale-95 me-5">
                                            Delete
                                        </button>
                                    </td> */}

                                            <td className={`py-2 px-3 text-base font-normal ${index == 0 ? "border-t-2 border-black" : index == records?.length ? "border-y" : "border-t"} min-w-[250px]`}>
                                                <div onClick={() => toggleMessageExpansion(data)}>
                                                    {isExpanded[data._id] ? data?.message : truncateMessage(data?.message)}
                                                </div>
                                            </td>
                                            <td
                                                className={`py-5 px-4 text-base  font-normal ${index == 0
                                                    ? "border-t-2 border-black"
                                                    : index == records?.length
                                                        ? "border-y"
                                                        : "border-t"
                                                    }`}
                                            >
                                                <button onClick={() => showPopup(data.name, data.email)} className="bg-red-500 text-black font-medium py-1 px-4 rounded transition-all hover:bg-red-600 hover:text-white active:scale-95 me-5">
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
    )
}

export default SupportTable
