import { useNavigate } from "react-router-dom";
import Login from "./Login";
export default function Register() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-6">

      <div className="w-full max-w-md">

        <h2 className="text-2xl font-semibold mb-6">
          Create your account
        </h2>

        <input
          type="text"
          placeholder="Email"
          className="w-full p-3 mb-4 bg-gray-900 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 bg-gray-900 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="phone"
          placeholder="Mobile"
          className="w-full p-3 mb-4 bg-gray-900 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 mb-4 bg-gray-900 border border-gray-700 rounded-xl"
        />

        <input
          type="text"
          placeholder="Username"
          className="w-full p-3 mb-4 bg-gray-900 border border-gray-700 rounded-xl"
        />

        <button className="w-full py-3 bg-blue-600 rounded-xl hover:bg-blue-700 transition">
          Sign Up
        </button>

        <p className="text-sm text-gray-400 mt-6 text-center">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/Login")}
            className="text-blue-500 cursor-pointer hover:underline"
          >
            Log in
          </span>
        </p>

      </div>

    </div>
  );
}