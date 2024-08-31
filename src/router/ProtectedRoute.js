import { isAuthenticated } from "../services/AuthService";

function ProtectedRoute({ component, navigate }) {
  return isAuthenticated() ? component : navigate;
}

export default ProtectedRoute;
