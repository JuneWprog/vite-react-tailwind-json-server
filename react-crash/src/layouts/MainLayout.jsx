import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
// It is used to display toast notifications, which are small messages that pop up on the screen to provide feedback to users. 
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <ToastContainer />
    </>
  );
};
export default MainLayout;