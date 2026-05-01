import { useNavigate } from "react-router-dom";
import { discussions } from "../data/discussions";
import NavBar from "../components/NavBar";

export default function MyDiscuss() {
  const navigate = useNavigate();

  return (
    <>
    
    <div className="min-h-screen bg-black text-white pt-24 px-6">

      <h1 className="text-3xl font-bold mb-8">Your Discussions</h1>

      <div className="space-y-4">
        {discussions.map((d) => (
          <div
            key={d.id}
            onClick={() => navigate(`/discussion/${d.id}`)}
            className="p-4 bg-gray-900 rounded-xl cursor-pointer hover:bg-gray-800 transition"
          >
            <h2 className="text-lg font-semibold">{d.title}</h2>

            <p className="text-sm text-gray-400 mt-1">
              {d.replies.length} replies • by {d.author}
            </p>
          </div>
        ))}
      </div>

    </div>
    </>
  );
}