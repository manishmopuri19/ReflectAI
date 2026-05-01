import { useState } from "react";
import NavBar from "../components/NavBar";

export default function ChatPage() {
  const [file, setFile] = useState(null);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);

  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) setFile(uploadedFile);
  };

  const handleAsk = () => {
    if (!question) return;

    const newMessage = {
      question,
      answer: "Mock AI response based on your PDF."
    };

    setMessages([...messages, newMessage]);
    setQuestion("");
  };

  return (
    <>
    
    <div className="h-screen flex bg-black text-white pt-16">

      {/* LEFT PANEL */}
      <div className="w-1/3 border-r border-gray-800 p-6 flex flex-col">

        <h2 className="text-xl font-semibold mb-4">
          📄 Your Document
        </h2>

        {!file ? (
          <div className="flex flex-col items-center justify-center h-full border-2 border-dashed border-gray-700 rounded-xl p-6 text-center">
            
            <p className="text-gray-400 mb-4">
              Upload your PDF to start chatting
            </p>

            <input
              type="file"
              accept="application/pdf"
              onChange={handleFileUpload}
              className="text-sm text-gray-400"
            />

          </div>
        ) : (
          <div className="bg-gray-900 p-4 rounded-xl">
            <p className="text-green-400">✔ Uploaded</p>
            <p className="mt-2 text-sm">{file.name}</p>

            <button
              onClick={() => setFile(null)}
              className="mt-4 text-red-400 text-sm hover:underline"
            >
              Remove file
            </button>
          </div>
        )}

      </div>

      {/* RIGHT PANEL */}
      <div className="w-2/3 flex flex-col">

        {/* CHAT HEADER */}
        <div className="border-b border-gray-800 p-4">
          <h2 className="text-lg font-semibold">
            💬 Chat with your PDF
          </h2>
        </div>

        {/* CHAT MESSAGES */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">

          {messages.length === 0 && (
            <p className="text-gray-500 text-center mt-10">
              Ask something about your document...
            </p>
          )}

          {messages.map((msg, i) => (
            <div key={i}>

              <div className="bg-blue-600 p-3 rounded-xl ml-auto max-w-md">
                {msg.question}
              </div>

              <div className="bg-gray-800 p-3 rounded-xl mt-2 max-w-md">
                {msg.answer}
              </div>

            </div>
          ))}

        </div>

        {/* INPUT AREA */}
        <div className="border-t border-gray-800 p-4 flex gap-3">

          <input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder={
              file
                ? "Ask something about your PDF..."
                : "Upload a PDF first..."
            }
            disabled={!file}
            className="flex-1 p-3 bg-gray-900 border border-gray-700 rounded-xl focus:outline-none"
          />

          <button
            onClick={handleAsk}
            disabled={!file}
            className="px-5 bg-blue-600 rounded-xl hover:bg-blue-700 transition disabled:opacity-50"
          >
            Send
          </button>

        </div>

      </div>

    </div>
    </>
  );
}