import React, { createContext, useState, useEffect } from "react";




let AppContext = createContext();





function AppProvider({ children }) {

  const [auth, setAuth] = useState({
    authentication : undefined,
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
