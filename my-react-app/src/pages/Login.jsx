import { useNavigate } from "react-router-dom";
import Register from "./Register";
export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex bg-black text-white">

      {/* LEFT SIDE */}
      <div className="hidden md:flex flex-1 items-center justify-center bg-gradient-to-br from-purple-900 via-black to-blue-900 p-10">
        
        <div className="text-center max-w-md">
          <h1 className="text-4xl font-bold leading-tight">
            Learn from your{" "}
            <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
              smartest notes
            </span>
          </h1>

          <p className="mt-6 text-gray-400">
            Turn PDFs into conversations. Study faster. Think better.
          </p>

          <img
            src="https://illustrations.popsy.co/gray/web-design.svg"
            className="mt-10 w-full max-w-sm mx-auto"
          />
        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1 flex items-center justify-center px-6">

        <div className="w-full max-w-md">

          <h2 className="text-2xl font-semibold mb-6">
            Log in to ReflectAI
          </h2>

          <input
            type="text"
            placeholder="Email or Username"
            className="w-full p-3 mb-4 bg-gray-900 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-4 bg-gray-900 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

         <button
  onClick={() => {
    localStorage.setItem("user", "true"); // fake login
    navigate("/");
  }}
  className="w-full py-3 bg-blue-600 rounded-xl hover:bg-blue-700 transition"
>
  Log In
</button>
          <p className="text-sm text-gray-400 mt-4 text-center cursor-pointer hover:underline">
            Forgot password?
          </p>

          <div className="my-6 border-t border-gray-700"></div>

          <button
            onClick={() => navigate("/register")}
            className="w-full py-3 border border-gray-600 rounded-xl hover:bg-gray-800 transition"
          >
            Create new account
          </button>

        </div>

      </div>

    </div>
  );
}