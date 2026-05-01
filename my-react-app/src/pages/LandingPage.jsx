import NavBar from "../components/NavBar";
import { MessageSquare, Brain, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="bg-black text-white">

      <NavBar />

      {/* HERO */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 pt-24 bg-gradient-to-br from-black via-gray-900 to-black">

        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl font-bold leading-tight">
            Turn Your PDFs Into{" "}
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Smart Conversations
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-400 max-w-xl">
            Upload notes, ask questions, and get instant AI-powered answers.
            Study faster. Think deeper. Learn smarter.
          </p>

          <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>

        <div className="flex-1 mt-10 md:mt-0">
          <img
            src="https://illustrations.popsy.co/gray/web-design.svg"
            alt="AI"
            className="w-full max-w-md mx-auto opacity-90"
          />
        </div>

      </section>


      {/* FEATURES */}
      <section className="py-20 px-8 bg-black">

        <h2 className="text-3xl font-bold text-center mb-12">
          Why ReflectAI?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="p-6 bg-gray-900 border border-gray-800 rounded-2xl hover:scale-105 transition">
            <MessageSquare className="text-blue-500 w-10 h-10" />
            <h3 className="text-xl font-semibold mt-4">Chat with PDFs</h3>
            <p className="mt-2 text-gray-400">
              Ask anything and get instant answers from your documents.
            </p>
          </div>

          <div className="p-6 bg-gray-900 border border-gray-800 rounded-2xl hover:scale-105 transition">
            <Brain className="text-purple-500 w-10 h-10" />
            <h3 className="text-xl font-semibold mt-4">AI Explanations</h3>
            <p className="mt-2 text-gray-400">
              Break down complex topics into simple insights.
            </p>
          </div>

          <div className="p-6 bg-gray-900 border border-gray-800 rounded-2xl hover:scale-105 transition">
            <Users className="text-pink-500 w-10 h-10" />
            <h3 className="text-xl font-semibold mt-4">Student Community</h3>
            <p className="mt-2 text-gray-400">
              Learn, share, and grow together.
            </p>
          </div>

        </div>

      </section>


      {/* HOW IT WORKS */}
      <section className="py-20 px-6 bg-gray-950 text-center">

        <h2 className="text-3xl font-bold mb-12">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

          <div className="p-6">
            <div className="text-5xl">📄</div>
            <p className="mt-4 text-gray-300 font-medium">Upload PDF</p>
          </div>

          <div className="p-6">
            <div className="text-5xl">💬</div>
            <p className="mt-4 text-gray-300 font-medium">Ask Questions</p>
          </div>

          <div className="p-6">
            <div className="text-5xl">🤖</div>
            <p className="mt-4 text-gray-300 font-medium">Get Answers</p>
          </div>

        </div>

      </section>


      {/* COMMUNITY */}
      <section className="py-20 px-6 bg-black text-center">

        <h2 className="text-3xl font-bold">
          Learn Together, Not Alone
        </h2>

        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          Join discussions, share knowledge, and grow with a community of learners.
        </p>

        <img
          src="https://illustrations.popsy.co/gray/web-design.svg"
          alt="community"
          className="mt-10 w-full max-w-md mx-auto opacity-90"
        />

      </section>


      {/* FOOTER */}
      <footer className="py-6 text-center text-gray-500 text-sm border-t border-gray-800">
        © 2026 ReflectAI. All rights reserved.
      </footer>

    </div>
  );
}