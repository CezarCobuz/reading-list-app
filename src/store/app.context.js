import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const initialAppStore = {
    user: {
      isLoggedIn: false,
    },

    // TODO: Add fav books etc..
  };

  const [appStore, setAppStore] = useState(initialAppStore);

  return (
    <AppContext.Provider value={[appStore, setAppStore]}>
      {children}
    </AppContext.Provider>
  );
};
