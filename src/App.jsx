import { createContext, useState } from "react";
import { RouterProvider } from "react-router-dom";

import { Header } from "./components/header/Header";
import { router } from "./components/router";

export const SearchContext = createContext(null);

function App() {
  const [searchCriterions, setSearchParams] = useState({
    search: "",
    category: "",
    sortBy: "",
  });

  return (
    <SearchContext.Provider
      value={{
        searchParams: searchCriterions,
        setSearchParams,
      }}
    >
      <Header />
      <RouterProvider router={router} />
    </SearchContext.Provider>
  );
}

export default App;
