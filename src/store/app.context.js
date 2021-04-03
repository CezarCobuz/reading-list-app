import React, { createContext, useEffect, useState } from "react";
import { hardcodedToken, routes } from "../apis/routes.definitions";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const initialAppStore = {
    user: {
      isLoggedIn: true,
    },
    loading: false,
    // TODO: Add fav books etc..
    books: [],

    readingList: [],
  };

  const [appStore, setAppStore] = useState(initialAppStore);

  useEffect(() => {
    fetch(routes.books, {
      method: "get",
      headers: new Headers({
        Authorization: "Bearer " + hardcodedToken,
      }),
    })
      .then((response) => response.json())
      .then((data) =>
        setAppStore({ ...appStore, loading: false, books: data.books })
      );
  }, []);

  return (
    <AppContext.Provider value={[appStore, setAppStore]}>
      {children}
    </AppContext.Provider>
  );
};
