import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import ChatPage from "./pages/ChatPage";
import DiscussionThread from "./pages/DiscussionThread";
import MyDiscuss from "./pages/MyDiscuss";
import Register from "./pages/Register";
import MainLayout from "./utils/MainLayout";

export default function App() {
  return (
    <Routes>

      {/* AUTH PAGES (NO NAVBAR) */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* MAIN APP (WITH NAVBAR) */}
      <Route element={<MainLayout />}>

        <Route path="/" element={<LandingPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/my-discuss" element={<MyDiscuss />} />
        <Route path="/global-discuss" element={<div>Global Discuss</div>} />
        <Route path="/dashboard" element={<div>Dashboard</div>} />
        <Route path="/discussion/:id" element={<DiscussionThread />} />

      </Route>

    </Routes>
  );
}