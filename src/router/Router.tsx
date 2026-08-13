import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";

// Auth is handled via HTTP-only cookies; replace with real auth state/API check.
const isLoggedIn = () => false;

export const Router = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route
          path="/"
          element={isLoggedIn() ? <div>Home</div> : <Navigate to="/login" replace />}
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
