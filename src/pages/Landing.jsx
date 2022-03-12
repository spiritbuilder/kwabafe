import React from "react";
import { Link,  } from "react-router-dom";
import img from "../assets/image.jpg";
function Landing() {
  return (
    <div className=" w-full h-full md:flex-row flex-wrap flex flex-col justify-center items-center">
      <img
        src={img}
        className=" top-0 left-0 w-1/2 md:h-full h-28 object-cover"
      />
      <div className=" w-1/2 flex-col flex justify-center ">
        <h1 className=" text-center text-black md:text-5xl text-4xl mb-8">
          Welcome to Kwaba
        </h1>
        <h2 className=" text-center text-black md:text-3xl text-2xl mb-6">
          Everyone deserves a place to call his own
        </h2>

        <div className=" flex  flex-wrap self-center w-1/2 justify-evenly items-center">
          <span className=" hover:border-teal-400 my-2 md:text-base text-sm border-2 text-center rounded-full px-4 py-3 items-center flex justify-center hover:text-teal-400 border-black text-black">
            <Link to="/auth/signin">Sign In</Link>
          </span>
          <span className=" hover:border-teal-400 my-2 md:text-base text-sm border-2 text-center rounded-full px-4 py-3 items-center hover:text-teal-400 flex justify-center border-black text-black">
            <Link to="/auth/signup">Sign Up</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Landing;
