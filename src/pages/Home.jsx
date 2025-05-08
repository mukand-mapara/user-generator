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
    <div className={darkMode ? "dark" : ""}>
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Optionally, the theme toggle */}
      {!error && <ThemeToggle />}
  
      {/* Container for centering both cards */}
      <div className="flex justify-center items-center space-x-10 min-h-10">
        {/* Left Card */}
        <div className="flex justify-center w-full max-w-md">
          <UserCard />
        </div>
  
        {/* Right Card */}
        <div className="flex justify-center w-full max-w-md">
          <GithubUser />
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default Home;
