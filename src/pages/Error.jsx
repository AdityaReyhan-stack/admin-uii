import React from "react";
import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();

  return (
    <div className="flex justify-center items-center min-h-screen bg-special-mainBg flex-col">
      <h1 className="text-3xl font-bold mb-3">Sorry 😢</h1>

      <p className="text-lg">
        {error.status} | {error.statusText || error.message}
      </p>
    </div>
  );
}

export default Error;
