import { createBrowserRouter } from "react-router-dom";
import { BOOK_ROUTE, INDEX_ROUTE } from "../constants/routes";
import { LibraryMain } from "../pages/index-main-page";
import { BookPage, loaderBook } from "../pages/book";

export const router = createBrowserRouter([
  {
    path: INDEX_ROUTE,
    element: <LibraryMain />,
  },
  {
    path: BOOK_ROUTE,
    element: <BookPage />,
    loader: loaderBook
  }
]);