"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const InputSearch = () => {
  const router = useRouter();
  const params = useSearchParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.search.value;

    const newParams = new URLSearchParams(params.toString());
    newParams.set("search", value);
    router.push(`?${newParams.toString()}`);
  };
  return (
    <div>
      <form className="-space-x-30" onSubmit={handleSubmit}>
        <input
          className="min-w-lg z-1 border border-gray-300 px-4 py-2 rounded-full"
          type="text"
          name="search"
          placeholder="Enter Food Name"
        />
        <button className="rounded-full px-10 py-2 bg-green-500">Search</button>
      </form>
    </div>
  );
};

export default InputSearch;
