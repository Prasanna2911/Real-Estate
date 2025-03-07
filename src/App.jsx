import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import About from "./components/About";
import Project from "./components/Project";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  });
  return (
    <div className="w-full overflow-hidden">
      {loading ? (
        <Loader></Loader>
      ) : (
        <>
          <ToastContainer></ToastContainer>
          <Header></Header>
          <About></About>
          <Project></Project>
          <Testimonials></Testimonials>
          <Contact></Contact>
          <Footer></Footer>
        </>
      )}
    </div>
  );
};

export default App;
