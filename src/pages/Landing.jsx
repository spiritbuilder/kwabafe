import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/image.jpg";
function Landing() {
  return (
    <div className=" w-full h-full flex justify-center items-center">
      <img
        src="https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
        className=" top-0 left-0 w-1/2 h-full object-cover"
      />
      <div className=" w-1/2 flex-col flex justify-center ">
        <h1 className=" text-center text-black text-6xl mb-8">
          Welcome to Kwaba
        </h1>
        <h2 className=" text-center text-black text-3xl mb-6">
          Everyone deserves a place to call his own
        </h2>

        <div className=" flex  flex-wrap self-center w-1/2 justify-evenly items-center">
          <span className=" hover:border-teal-400 border-2 text-center rounded-full px-4 py-3 items-center flex justify-center hover:text-teal-400 border-black text-black">
            <Link to="/auth/signin">Sign In</Link>
          </span>
          <span className=" hover:border-teal-400  border-2 text-center rounded-full px-4 py-3 items-center hover:text-teal-400 flex justify-center border-black text-black">
            <Link to="/auth/signup">Sign Up</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Landing;
