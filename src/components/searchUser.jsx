import React from "react";

const SearchUser = ({ search, setSearch }) => {
  return (
    <div className="mb-6 w-full max-w-md">
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
  );
};

export default SearchUser;
