import { LibraryMain } from "./pages/index-main-page"
import { BookPage, loaderBook } from "./pages/book"
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { createContext, useState } from "react";
import { Header } from "./components/header/Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LibraryMain />,
  },
  {
    path: "/:id",
    element: <BookPage />,
    loader: loaderBook
  }
]);

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
