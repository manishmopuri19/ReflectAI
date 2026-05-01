import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 bg-black border-b border-gray-800 fixed top-0 z-50">

      {/* LOGO */}
      <h1
        onClick={() => navigate("/")}
        className="text-2xl font-bold text-white cursor-pointer"
      >
        ReflectAI
      </h1>

      {/* CENTER NAV (ONLY WHEN LOGGED IN) */}
      {isLoggedIn && (
        <div className="hidden md:flex gap-8 text-gray-300">

          <button
            onClick={() => navigate("/chat")}
            className="hover:text-white transition"
          >
            ChatAI
          </button>

          <button
            onClick={() => navigate("/my-discuss")}
            className="hover:text-white transition"
          >
            Your Discuss
          </button>

          <button
            onClick={() => navigate("/global-discuss")}
            className="hover:text-white transition"
          >
            Global Discuss
          </button>

        </div>
      )}

      {/* RIGHT SIDE */}
      {!isLoggedIn ? (
        <button
          onClick={() => navigate("/login")}
          className="px-5 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
        >
          Get Started
        </button>
      ) : (
        <div className="relative">

          {/* PROFILE */}
          <button
            onClick={() => setOpen(!open)}
            className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center font-bold"
          >
            U
          </button>

          {/* POPOVER */}
          {open && (
            <div className="absolute right-0 mt-2 w-44 bg-gray-900 border border-gray-700 rounded-xl shadow-lg overflow-hidden">

              <button
                onClick={() => {
                  navigate("/dashboard");
                  setOpen(false);
                }}
                className="w-full text-left px-4 py-2 hover:bg-gray-800 text-white"
              >
                Dashboard
              </button>

              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 hover:bg-gray-800 text-red-400"
              >
                Logout
              </button>

            </div>
          )}

        </div>
      )}

    </nav>
  );
}