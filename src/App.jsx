import { RouterProvider } from "react-router-dom";
import { createContext, useState } from "react";
import { Header } from "./components/header/Header";
import { router } from "./components/router";

export const SearchContext = createContext(null)

function App() {
  const [searchParams, setSearchParams] = useState({ search: '', category: '', sortBy: '' })

  return (

    <SearchContext.Provider
      value={{
        searchParams,
        setSearchParams
      }}>
      <Header />
      <RouterProvider router={router} />
    </SearchContext.Provider>

  )
}

export default App
