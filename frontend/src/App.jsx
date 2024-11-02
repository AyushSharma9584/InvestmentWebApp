import { useEffect, useState } from "react";
import Menu from "./Components/Menu/Menu";
import Footer from "./Components/Pages/FooterPage/Footer";
import Registration from "./Components/Pages/Registration/Registration";
import Routing from "./Routes/Routing";
import { jwtDecode } from "jwt-decode";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      const decoded = jwtDecode(token)
      getEmp(decoded.userEmail)
    }

  }, [])

  useEffect(() => {
    hitApi()
  })

  const hitApi = async () => {
    const result = await fetch('https://api.sarteinfomining.com/auth/api/test')
    const data = await result.json()
    console.log(data)
  }

  const getEmp = async (email) => {
    try {
      const result = await fetch(`${import.meta.env.VITE_KEY}auth/api/getemployee`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      })
      const data = await result.json();
      console.log(data.data.register_status)

      if (data.data.register_status == false) {
        setIsOpen(true)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const onHide = () => {
    setIsOpen(false)
  }
  return (
    <div className="w-full h-full">
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
        theme="dark"
      />

      <Menu />
      <Routing />
      <Footer />
    </div>
  );
};

export default App;
