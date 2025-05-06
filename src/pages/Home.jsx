import React from "react";
import UserCard from "./UserCard";
import GithubUser from "./GitHubUserCard";
import ThemeToggle from "../components/ThemeToggle";
import { useSelector } from "react-redux";
import { useGetRandomUserQuery } from "../redux/user/userApi.js";

const Home = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const { error } = useGetRandomUserQuery();

  return (
    <div className="">
      <div className={darkMode ? "dark" : ""}>
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
          {!error && <ThemeToggle />}
          <UserCard />
        </div>
      </div>
      {/* <div className="flex items-center justify-center space-x-10 min-h-screen bg-gray-50">
      <div className="flex justify-center w-full max-w-md">
        <UserCard />
      </div>

      <div className="flex justify-center w-full max-w-md -mt-28">
        <GithubUser />
      </div>
    </div> */}
    </div>
  );
};

export default Home;
