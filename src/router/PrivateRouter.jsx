import { Navigate, Outlet } from "react-router-dom";
import { useLoginContext } from "../context/LoginProvider";

const PrivateRouter = () => {
  const { user } = useLoginContext();
  const currentUser = user;
  console.log("user:", user);
  return currentUser ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRouter;
