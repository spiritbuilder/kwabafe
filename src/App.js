import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import AppContext from "./context/AppProvider";
import Auth from "./pages/Auth";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <AppContext>
      <BrowserRouter>
        <div className=" w-screen h-screen bg-white">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="auth/:slug" element={<Auth />} />
            <Route path="loans" element={<Landing />} />
          </Routes>
          <ToastContainer />
        </div>
      </BrowserRouter>
    </AppContext>
  );
}

export default App;
