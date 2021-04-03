import React, { useContext } from "react";

import { AppContext } from "../../../store/app.context";
import { AuthStack } from "../auth/auth.stack";
import { MainStack } from "../main/main.stack";

export const RootStack = () => {
  const [appStore] = useContext(AppContext);

  // console.log(`appStore`, appStore);
  const { user } = appStore;

  const userIsLoggedIn = user.isLoggedIn;

  if (!userIsLoggedIn) {
    return <AuthStack />;
  } else {
    return <MainStack />;
  }
};
