import { useParams } from "react-router-dom";
import { useState } from "react";
import { discussions } from "../data/discussions";

export default function DiscussionThread() {
  const { id } = useParams();

  const discussion = discussions.find(
    (d) => d.id === parseInt(id)
  );

  const [reply, setReply] = useState("");
  const [replies, setReplies] = useState(discussion.replies);

  const handleReply = () => {
    if (!reply) return;

    const newReply = {
      id: Date.now(),
      user: "You",
      text: reply
    };

    setReplies([...replies, newReply]);
    setReply("");
  };

  if (!discussion) {
    return <div className="text-white p-10">Discussion not found</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white pt-24 px-6">

      {/* QUESTION */}
      <div className="bg-gray-900 p-6 rounded-2xl mb-6">
        <h1 className="text-2xl font-bold">{discussion.title}</h1>
        <p className="mt-3 text-gray-300">{discussion.content}</p>
        <p className="text-sm text-gray-500 mt-2">
          Posted by {discussion.author}
        </p>
      </div>

      {/* REPLIES */}
      <div className="space-y-4 mb-6">
        {replies.map((r) => (
          <div key={r.id} className="bg-gray-800 p-4 rounded-xl">
            <p className="text-sm text-blue-400">{r.user}</p>
            <p className="mt-1">{r.text}</p>
          </div>
        ))}
      </div>

      {/* ADD REPLY */}
      <div className="flex gap-3">
        <input
          value={reply}
          onChange={(e) => setReply(e.target.value)}
          placeholder="Write your reply..."
          className="flex-1 p-3 bg-gray-900 border border-gray-700 rounded-xl"
        />

        <button
          onClick={handleReply}
          className="px-5 bg-blue-600 rounded-xl hover:bg-blue-700"
        >
          Reply
        </button>
      </div>

    </div>
  );
}