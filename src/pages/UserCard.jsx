import React from "react";
import { useGetRandomUserQuery } from "../redux/user/userApi";
import Loader from "../components/Loader";
import ErrorComponent from "../components/ErrorComponent";

const UserCard = () => {
  const { data, error, isLoading } = useGetRandomUserQuery();

  if (isLoading)
    return (
      <div className="text-center mt-10">
        <Loader />
      </div>
    );

  if (error)
    return (
      <div className="text-red-500">
        <ErrorComponent />
      </div>
    );

  const user = data.results[0];

  return (
    <div className="absolute top-10">
      <h3 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-white">
        Random user profile
      </h3>
      <div className="w-full max-w-sm bg-white shadow-lg rounded-xl overflow-hidden">
        {/* Image Section */}
        <div className="flex justify-center bg-indigo-100 py-6 cursor-pointer">
          <img
            src={user.picture.large}
            alt={user.name.first}
            className="w-32 h-32 rounded-full border-4 border-indigo-600"
          />
        </div>

        {/* Card Content Section */}
        <div className="p-6 space-y-4">
          <h2 className="text-center text-3xl font-semibold text-gray-900">
            {user.name.title} {user.name.first} {user.name.last}
          </h2>
          <p className="text-center text-xl text-gray-700">
            <span className="font-semibold">Gender:</span> {user.gender}
          </p>
          <p className="text-center text-xl text-gray-700">
            <span className="font-semibold">DOB:</span>{" "}
            {new Date(user.dob.date).toLocaleDateString()} (Age: {user.dob.age})
          </p>
          <div className="space-y-2">
            <p className="text-center text-lg text-gray-700">
              <span className="font-semibold">Email:</span> {user.email}
            </p>
            <p className="text-center text-lg text-gray-700">
              <span className="font-semibold">Phone:</span> {user.phone}
            </p>
            <p className="text-center text-lg text-gray-700">
              <span className="font-semibold">Cell:</span> {user.cell}
            </p>
            <p className="text-center text-lg text-gray-700">
              <span className="font-semibold">Location:</span>{" "}
              {user.location.city}, {user.location.state}
            </p>
          </div>
          {user.id?.value && (
            <p className="text-center text-lg text-gray-700">
              <span className="font-semibold">ID ({user.id.name}):</span>{" "}
              {user.id.value}
            </p>
          )}
          <p className="text-center text-lg text-gray-700">
            <span className="font-semibold">Registered:</span>{" "}
            {new Date(user.registered.date).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
