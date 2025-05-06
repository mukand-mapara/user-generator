import React from "react";

const ErrorComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-red-50 text-red-700">
      <h1 className="text-3xl font-bold mb-4">Something Went Wrong</h1>
      <p className="text-lg max-w-md">
        We're unable to load the data at the moment. Please check your internet
        connection or try again later.
      </p>
    </div>
  );
};

export default ErrorComponent;
