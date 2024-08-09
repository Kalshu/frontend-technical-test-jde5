import {
  createFileRoute,
  Navigate,
  Outlet,
  useLocation,
} from "@tanstack/react-router";
import { useAuthentication } from "../contexts/authentication";

const AuthenticationRoute = () => {
  const { state: { isAuthenticated } = {} } = useAuthentication();
  const { pathname } = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" search={{ redirect: pathname }} replace />;
  }

  return <Outlet />;
};

export const Route = createFileRoute("/_authentication")({
  component: AuthenticationRoute,
});
