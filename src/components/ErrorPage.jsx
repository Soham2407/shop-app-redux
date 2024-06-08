import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="bg-zinc-200 w-full h-screen flex flex-col justify-center items-center gap-3">
      <h1 className="text-2xl font-bold">OOPS! Something went wrong</h1>
      <p className="text-lg">{error.statusText || error.data}</p>
      <Link to="/" className="bg-blue-500 text-white py-1 px-2 rounded-md">
        Go to home
      </Link>
    </div>
  );
};

export default ErrorPage;
