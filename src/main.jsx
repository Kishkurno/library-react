import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Header } from './components/header/Header.jsx'
import "../src/global.css"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { LibraryMain } from './pages/index-main-page.jsx'
import { BookPage } from './pages/book.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LibraryMain />,
  },
  {
    path: "/:id",
    element: <BookPage />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
