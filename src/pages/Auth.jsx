import React, { useContext, useState } from "react";
import AuthForm from "../components/AuthForm";
import { AppContext } from "../context/AppProvider";

function Auth() {
  const [auth, setAuth] = useContext(AppContext);
  const [user, setUser] = useState(auth.user);
  return (
    <div className=" flex justify-center   h-full w-full">
      {!user ? <AuthForm /> : <div className="">Apply for Loan</div>}
    </div>
  );
}

export default Auth;
