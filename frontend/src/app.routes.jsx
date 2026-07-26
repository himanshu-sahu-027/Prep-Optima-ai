import { BrowserRouter, Routes, Route, useNavigate } from "react-router";

import Home from "./features/landingPage/pages/Home";
import About from "./features/landingPage/pages/About";
import Login from "./features/auth/pages/Login";
import Register from "./features/auth/pages/Register";
import Protected from "./features/auth/components/Protected";
import GenerateInterviewStrategy from "./features/interviewReport/pages/GenerateInterviewStrategy";
import Loading from "./features/interviewReport/pages/Loading";
import Interview from "./features/interviewReport/pages/Interview";

function AppContent() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/generate-interview-strategy"
          element={
            <Protected>
              <GenerateInterviewStrategy />
            </Protected>
          }
        />
        <Route
          path="/loading"
          element={
            <Protected>
              <Loading />
            </Protected>
          }
        />
        <Route
          path="/interview/:interviewId"
          element={
            <Protected>
              <Interview />
            </Protected>
          }
        />
      </Routes>
    </>
  );
}

function AppRoutes() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default AppRoutes;
