import React from "react";
import {
  useGetRandomUserListQuery,
  useGetUserDetailQuery,
} from "../redux/user/githubUserApi";
import Loader from "../components/Loader";
import ErrorComponent from "../components/ErrorComponent";

const GitHubUserCard = () => {
  const { data: userList, error, isLoading } = useGetRandomUserListQuery();

  const username = userList?.[0]?.login;
  const {
    data: user,
    isLoading: isUserLoading,
    error: userError,
  } = useGetUserDetailQuery(username, { skip: !username });

  if (isLoading || isUserLoading) return <Loader />;
  if (error || userError) return <ErrorComponent />;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h3 className="text-2xl font-bold mb-4">GitHub user profile</h3>
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl overflow-hidden">
        <div className="flex justify-center bg-indigo-100 py-6">
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-32 h-32 rounded-full border-4 border-indigo-600"
          />
        </div>
        <div className="p-6 space-y-4">
          <h2 className="text-center text-3xl font-semibold text-gray-900">
            {user.name || user.login}
          </h2>
          {user.bio && (
            <p className="text-center text-xl text-gray-700">
              <span className="font-semibold">Bio:</span> {user.bio}
            </p>
          )}
          {user.location && (
            <p className="text-center text-xl text-gray-700">
              <span className="font-semibold">Location:</span> {user.location}
            </p>
          )}
          <div className="flex justify-center space-x-4 text-xl text-gray-700">
            <p>
              <span className="font-semibold">Followers:</span> {user.followers}
            </p>
            <p>
              <span className="font-semibold">Following:</span> {user.following}
            </p>
          </div>
          <div className="text-center mt-4">
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              View Profile on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitHubUserCard;
