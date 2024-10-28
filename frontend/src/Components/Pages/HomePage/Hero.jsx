/* eslint-disable react-hooks/exhaustive-deps */
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import hero1 from "../../../assets/home/Home_img1.jpg"
import hero2 from "../../../assets/home/Home_img2.jpg"
import hero3 from "../../../assets/home/Home_img3.jpg"
import hero4 from "../../../assets/home/Home_img4.jpg"
import { jwtDecode } from "jwt-decode";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";


const Hero = () => {
  const navigate = useNavigate()
  const handleRegister = async () => {
    const token = localStorage.getItem('token')
    if (token) {
      const decoded = jwtDecode(token)
      let email = decoded.userEmail

      try {
        const result = await fetch(`${import.meta.env.VITE_KEY}auth/api/getemployee`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email })
        })
        const data = await result.json();
        if (data.data.register_status == false) {
          navigate('/register')
        }
        else {
          toast.warn("You are already registed !", { toastId: 'regbtn1', });
        }
      } catch (error) {
        console.log(error)
      }
    }
    else {
      toast.warn("Please do signup or login first !", { toastId: 'regbtn', });

    }
  }
  return (
    <>
      <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-7xl mx-auto md:mt-0 mt-28">
        <div>
          <span className="block mb-4 text-xs md:text-sm text-[#18dae4] font-medium">
            Better every day
          </span>
          <h1 className="text-4xl md:text-6xl font-semibold">
            A Path to Exceptional Investment Growth
          </h1>
          <p className="text-base md:text-lg text-slate-300 my-4 md:my-6">
            Welcome to Sarte Infosoft & Solutions, where your financial
            aspirations become reality. Our goal is to offer you exceptional
            investment opportunities , Assisting you in reaching financial
            independence no matter where you stand financially right now.
          </p>
          <button onClick={handleRegister} className="bg-[#18dae4] text-black font-medium py-2 px-4 rounded transition-all hover:bg-[#0b9198] hover:text-white active:scale-95">
            Registration
          </button>
        </div>
        <ShuffleGrid />
      </section>
    </>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: hero1,
  },
  {
    id: 2,
    src: hero2,
  },
  {
    id: 3,
    src: hero3,
  },
  {
    id: 4,
    src: hero4,
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full rounded-lg"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-2 grid-rows-2 h-[450px] gap-4">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default Hero;
