import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const RequiredAuth = ({ children }) => {
  const {pathname} = useLocation();
  const {isAuth} = useContext(AuthContext);

  if ( isAuth ) {
    return children;
  } else {
      return <Navigate to={"/login"} state={{from: pathname}} replace/>
  }

};

export default RequiredAuth;

