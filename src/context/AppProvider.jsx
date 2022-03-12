import React, { createContext, useState, useEffect } from "react";




let AppContext = createContext();





function AppProvider({ children }) {
  let token = localStorage.getItem("token")
  let fullname = localStorage.getItem("fullname")

  const [auth, setAuth] = useState({
    authentication :token?{token,fullname}: undefined,
    formValues: {},
  });

  return (
    <AppContext.Provider value={[auth, setAuth]}>
      {children}
    </AppContext.Provider>
  );
}

export{AppContext}
export default AppProvider;
