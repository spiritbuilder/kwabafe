import React, { createContext, useState, useEffect } from "react";

let AppContext = createContext();

function AppProvider({ children }) {
  let token;
  let fullname;

 

  const [auth, setAuth] = useState({
    authentication: token ? { token, fullname } : undefined,
    formValues: {},
  });
  
  useEffect(() => {
    token = localStorage.getItem("token");
    fullname = localStorage.getItem("fullname");
  }, []);

  return (
    <AppContext.Provider value={[auth, setAuth]}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContext };
export default AppProvider;
