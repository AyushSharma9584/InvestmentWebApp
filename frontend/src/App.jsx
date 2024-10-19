import { useEffect, useState } from "react";
import Menu from "./Components/Menu/Menu";
import Footer from "./Components/Pages/FooterPage/Footer";
import Registration from "./Components/Pages/Registration/Registration";
import Routing from "./Routes/Routing";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setIsOpen(true)
    }
  }, [isOpen])
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
      {
        isOpen && <Registration />
      }

      <Routing />
      <Footer />
    </div>
  );
};

export default App;
