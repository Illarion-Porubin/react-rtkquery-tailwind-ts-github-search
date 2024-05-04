import React, { useState } from "react";
import { useSearchUsersQuery } from "../../store/github/github.api";
import { useDebounce } from "../../hooks/debounce";

export const HomePage = () => {
  const [search, setSearch] = React.useState<string>("");
  const [dropdown, setDropdown] = useState<boolean>(false);
  const debounced = useDebounce(search, 400);
  const { isLoading, isError, data } = useSearchUsersQuery(debounced, {
    skip: debounced.length < 2,
    refetchOnFocus: true
  });

  React.useEffect(() => {
    setDropdown(debounced.length > 2 && data?.length !== 0)
  }, [data?.length, debounced])

  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
      {isError && (
        <p className="text-center text-red-600">Something wrong...</p>
      )}
      <div className="relative w-[560px]">
        <input
          className="border py-2 px-4 w-full h-[42px] mb-2"
          type="text"
          placeholder="Search for Github username..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {dropdown && <ul className="list-none absolute top-[42px] overflow-y-scroll left-0 right-0 max-h-[200px] shadow-md bg-white">
          { isLoading && <p className="text-center">Loading...</p>}
          {data?.map(user => (
            <li key={user.id}
              className="py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer"
            >
              {user.login}
            </li>
          ))}
        </ul>}
      </div>
    </div>
  );
};
