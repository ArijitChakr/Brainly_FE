import { Dashboard } from "./components/Dashboard";
import { SharePage } from "./components/SharePage";
import { Signin } from "./components/Signin";
import { Signup } from "./components/Signup";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const isAuthenticated = !!localStorage.getItem("token");
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <Navigate to="/dashboard" replace />
              ) : (
                <Navigate to="/signup" replace />
              )
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/share/:sharableLink" element={<SharePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
