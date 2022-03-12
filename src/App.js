import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import AppProvider from "./context/AppProvider";
import Auth from "./pages/Auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RequestLoan from "./pages/RequestLoan";
import Submission from "./pages/Submission";

function App() {
  return (
    // // <AppProvider>
    //   {/* <BrowserRouter>
    //     <div className=" w-screen h-screen bg-white">
    //       <Routes>
    //         <Route path="/" element={<Landing />} />
    //         <Route path="auth/:slug" element={<Auth />} />
    //         <Route path="apply" element={<RequestLoan />} />
    //         <Route path="submission" element={<Submission />} />
    //       </Routes>
    //       <ToastContainer />
    //     </div>
    //   </BrowserRouter> */}
    
    // {/* </AppProvider> */}
    <>
    <Submission />
    </>
  );
}

export default App;
