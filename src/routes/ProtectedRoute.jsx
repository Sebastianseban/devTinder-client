import { Navigate } from "react-router";
import useUserStore from "../store/userStore";

const ProtectedRoute = ({ children }) => {
  const user = useUserStore((state) => state.user);
  const accessToken = useUserStore((state) => state.accessToken);

  // If user is missing or token expired/not present → redirect
  if (!user || !accessToken) {
    return <Navigate to="/auth/signin" replace />;
  }

    if (!user.isProfileComplete) {
    return <Navigate to="/auth/complete-profile" replace />;
  }

  // Otherwise allow access
  return children;
};

export default ProtectedRoute;
