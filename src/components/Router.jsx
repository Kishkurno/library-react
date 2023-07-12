import { createBrowserRouter } from "react-router-dom";

import { BOOK_ROUTE, INDEX_ROUTE } from "../constants/routes";
import { BookPage, loaderBook } from "../pages/bookPage/book";
import { LibraryMain } from "../pages/indexPage/indexPage";

export const router = createBrowserRouter([
  {
    path: INDEX_ROUTE,
    element: <LibraryMain />,
  },
  {
    path: BOOK_ROUTE,
    element: <BookPage />,
    loader: loaderBook,
  },
]);
