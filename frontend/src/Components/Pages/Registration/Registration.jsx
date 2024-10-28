import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from "framer-motion";
import { jwtDecode } from "jwt-decode";
import { FaXmark } from "react-icons/fa6";
import Wrapper from '../../Wrapper';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Registration = (props) => {
    const [credentials, setCredentials] = useState({ aadhar: "", pan: "", account: "", ifsc: "", bank: "", city: "", state: "", pin: "", upi: "" })
    const [info, setInfo] = useState({ name: "", email: "" })
    const [valid, setValid] = useState({ aadhaar: false, account: false, pan: false, ifsc: false })
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const token = localStorage.getItem('token')
        const decoded = jwtDecode(token);
        setInfo({ name: decoded.userName, email: decoded.userEmail })
    }, [valid])
    const handleSubmit = () => {
        props.onHide()
    }

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }



    const validation = (credentials) => {

        const tempValid = {
            aadhaar: !(/^[2-9]{1}[0-9]{11}$/.test(credentials.aadhar)),
            account: !(/^[0-9]{9,18}$/.test(credentials.account)),
            pan: !(/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(credentials.pan)),
            ifsc: !(/^[A-Z]{4}0[A-Z0-9]{6}$/.test(credentials.ifsc))
        };
        setValid(tempValid);
        return Object.values(tempValid).some((isInvalid) => isInvalid);
    }


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
                    setCredentials({ aadhar: "", pan: "", account: "", ifsc: "", bank: "", city: "", state: "", pin: "", upi: "" })
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
        <div >
            {
                loading &&
                <div class="w-full h-full fixed top-0 left-0 bg-white opacity-75 z-50">
                    <div class="flex justify-center items-center mt-[50vh]">
                        <div class="fas fa-circle-notch fa-spin fa-5x text-violet-600"></div>
                    </div>
                </div>
            }
            <Wrapper>
                <div className='md:mt-[30px] md:mb-[30px] md:border-2 md:border-[#18dae4] md:rounded p-[0px] md:p-[20px]'>
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
                                <input disabled value={info.name} class=" block text-black bg-white border border-gray-300 w-full text-[15px] px-4 py-3 rounded-md outline-blue-500" id="grid-first-name" type="text" />
                            </div>
                            <div class="md:w-1/2 px-3">
                                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
                                    Email
                                </label>
                                <input disabled value={info.email} class="text-black bg-white border border-gray-300 w-full text-[15px] px-4 py-3 rounded-md outline-blue-500" id="grid-last-name" type="text" />
                            </div>
                        </div>

                        <div class="-mx-3 md:flex mb-6">
                            <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
                                    Aadhaar number
                                </label>
                                <input value={credentials.aadhar} name='aadhar' onChange={handleChange} class=" block text-black bg-white border border-gray-300 w-full text-[15px] px-4 py-3 rounded-md outline-blue-500" id="grid-first-name" type="text" placeholder="Enter Aadhaar number" />
                                {error && credentials.aadhar == "" ? <p className='text-sm' ><i>Please enter Aadhaar number</i></p> : " "}
                                {valid.aadhaar && <p className='text-sm' ><i>Invalid aadhaar number</i></p>}

                            </div>
                            <div class="md:w-1/2 px-3">
                                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
                                    PAN number
                                </label>
                                <input value={credentials.pan} name='pan' onChange={handleChange} class="text-black bg-white border border-gray-300 w-full text-[15px] px-4 py-3 rounded-md outline-blue-500" id="grid-last-name" type="text" placeholder="Enter PAN number" />
                                {error && credentials.pan == "" ? <p className='text-sm' ><i>Please enter Pan  number</i></p> : " "}
                                {valid.pan && <p className='text-sm' ><i>Invalid pan number</i></p>}

                            </div>
                        </div>

                        <div class="-mx-3 md:flex mb-6">
                            <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
                                    Account number
                                </label>
                                <input value={credentials.account} name='account' onChange={handleChange} class=" block text-black bg-white border border-gray-300 w-full text-[15px] px-4 py-3 rounded-md outline-blue-500" id="grid-first-name" type="text" placeholder="Enter Account number" />
                                {error && credentials.account == "" ? <p className='text-sm' ><i>Please enter Account number</i></p> : " "}
                                {valid.account && <p className='text-sm' ><i>Invalid account number</i></p>}
                            </div>
                            <div class="md:w-1/2 px-3">
                                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
                                    IFSC code
                                </label>
                                <input value={credentials.ifsc} name='ifsc' onChange={handleChange} class="text-black bg-white border border-gray-300 w-full text-[15px] px-4 py-3 rounded-md outline-blue-500" id="grid-last-name" type="text" placeholder="Enter IFSC code" />
                                {error && credentials.ifsc == "" ? <p className='text-sm' ><i>Please enter IFSC number</i></p> : " "}
                                {valid.ifsc && <p className='text-sm' ><i>Invalid ifsc code</i></p>}
                            </div>
                        </div>

                        <div class="-mx-3 md:flex mb-6">
                            <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
                                    Bank name
                                </label>
                                <input value={credentials.bank} name='bank' onChange={handleChange} class=" block text-black bg-white border border-gray-300 w-full text-[15px] px-4 py-3 rounded-md outline-blue-500" id="grid-first-name" type="text" placeholder="Enter Bank name" />
                                {error && credentials.bank == "" ? <p className='text-sm' ><i>Please enter Bank name</i></p> : " "}

                            </div>
                            <div class="md:w-1/2 px-3">
                                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
                                    UPI number <span className='ml-3'>(optional)</span>
                                </label>
                                <input value={credentials.upi} name='upi' onChange={handleChange} class="text-black bg-white border border-gray-300 w-full text-[15px] px-4 py-3 rounded-md outline-blue-500" id="grid-last-name" type="text" placeholder="Enter UPI " />

                            </div>
                        </div>
                        <div class="-mx-3 md:flex mb-2">
                            <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-city">
                                    City
                                </label>
                                <input value={credentials.city} name='city' onChange={handleChange} class="text-black bg-white border border-gray-300 w-full text-[15px] px-4 py-3 rounded-md outline-blue-500" id="grid-city" type="text" placeholder="Enter City" />
                                {error && credentials.city == "" ? <p className='text-sm' ><i>Please enter City</i></p> : " "}

                            </div>
                            <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-city">
                                    State
                                </label>
                                <input value={credentials.state} name='state' onChange={handleChange} class="text-black bg-white border border-gray-300 w-full text-[15px] px-4 py-3 rounded-md outline-blue-500" id="grid-city" type="text" placeholder="Enter State" />
                                {error && credentials.state == "" ? <p className='text-sm' ><i>Please enter state</i></p> : " "}

                            </div>
                            <div class="md:w-1/2 px-3">
                                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-zip">
                                    Pin code
                                </label>
                                <input value={credentials.pin} name='pin' onChange={handleChange} class="text-black bg-white border border-gray-300 w-full text-[15px] px-4 py-3 rounded-md outline-blue-500" id="grid-zip" type="text" placeholder="Enter Pin Code" />
                                {error && credentials.pin == "" ? <p className='text-sm' ><i>Please enter PIN</i></p> : " "}

                            </div>
                        </div>
                    </div>
                    <div class="!mt-4 mb-7">
                        <div className="flex gap-2  justify-center">
                            <button

                                onClick={registerHandle} className="bg-[#18dae4] transition-all hover:bg-[#0b9198]  text-black hover:text-white font-semibold  py-2 rounded w-60"
                            >
                                Submit
                            </button>
                        </div>
                    </div>

                </div>
            </Wrapper>

        </div>
    )
}

export default Registration