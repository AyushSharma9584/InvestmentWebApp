import Menu from "./Components/Menu/Menu";
import Footer from "./Components/Pages/FooterPage/Footer";
import Routing from "./Routes/Routing";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
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
