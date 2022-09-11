import React from 'react';
import Router from './routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
    Aos.refresh();
  }, []);
  return (
    <>
      <Router />
      <ToastContainer />
    </>
  );
}

export default App;
