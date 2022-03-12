import React, { useContext, useState } from "react";
import AuthForm from "../components/AuthForm";
import { AppContext } from "../context/AppProvider";

function Auth() {
  const [auth, setAuth] = useContext(AppContext);

  return (
    <div className=" flex justify-center  h-full w-full">
      {!auth.auth ? <AuthForm /> : <div className="">
        Apply for Loan
      </div>}
    </div>
  );
}

export default Auth;
