import { Redirect } from "react-router-dom";
import CartContext from "./Cart-Context";
import { useContext } from "react";

const ProtectedRoute = ({ children }) => {
    const cartCtx = useContext(CartContext);
    
  if (!cartCtx.isLoggedin) {
    return <Redirect to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
