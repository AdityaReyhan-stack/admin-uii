import React, { useState } from "react";

function PostCard(props) {
  const { id, userId, title, body } = props;

  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(true);
  }

  return (
    <div className="bg-white p-5 rounded-lg shadow transition-all duration-300 hover:scale-105 hover:border hover:border-special-red2 hover:bg-red-50">
      <h2 className="text-lg font-semibold text-center text-defaultBlack mb-3">
        {title}
      </h2>

      <p className="text-gray-01 text-center text-sm mb-2">
        User ID : {userId}
      </p>

      <p className="text-gray-01 text-center text-sm mb-4">{body}</p>

      <button
        className={`w-full rounded-md py-2 text-white transition-all duration-300 ${
          clicked
            ? "bg-special-red2 hover:bg-red-700"
            : "bg-gray-500 hover:bg-gray-600"
        }`}
        onClick={handleClick}
      >
        {clicked ? "Tombol sudah diklik" : "Silakan Klik"}
      </button>
    </div>
  );
}

export default PostCard;
