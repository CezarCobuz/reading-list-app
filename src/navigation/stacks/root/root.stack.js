import { AuthStack } from "../auth/auth.stack";
import { MainStack } from "../main/main.stack";
import React from "react";

export const RootStack = () => {
  const userIsLoggedIn = false;

  if (!userIsLoggedIn) {
    return <AuthStack />;
  } else {
    return <MainStack />;
  }
};
