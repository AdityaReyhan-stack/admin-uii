import React from "react";

function Card(props) {
  const { title, desc, link = false } = props;

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center text-gray-02 dark:text-gray-400 mb-2">
        <div className="text-2xl">{title}</div>

        {link && (
          <div className="text-xs text-primary cursor-pointer">View All</div>
        )}
      </div>

      <div className="bg-white dark:bg-gray-800 dark:text-white rounded-lg shadow-xl px-6 py-5 flex-1">
        {desc}
      </div>
    </div>
  );
}

export default Card;
