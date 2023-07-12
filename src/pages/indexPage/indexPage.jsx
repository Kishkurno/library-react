import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SearchContext } from "src/App";
import notFoundImg from "src/assets/notFoundImg.png";
import { fetchBooks } from "src/services/fetchBooks";
import { fetchSortedBooks } from "src/services/fetchSortedBooks";

import style from "./indexPage.module.css";

export const LibraryMain = () => {
  const specialCharactersRegex = /[`@#$%^&*_+\=\[\]{};\\|<>\/~]/;
  const maxResults = 32;
  const [books, setBooks] = useState({});
  const [startIndex, setStartIndex] = useState(0);
  const { searchParams } = useContext(SearchContext);

  useEffect(() => {
    async function requestBooks() {
      const { search, category, sortBy } = searchParams;
      if (specialCharactersRegex.test(search)) return;
      const searchFinal = search == "" ? "react" : search;
      const categoryFinal = category == "all" ? "" : category;

      const responseBooks = await fetchBooks(
        searchFinal,
        categoryFinal,
        maxResults,
        startIndex
      );

      if (sortBy != "") {
        const responseBooks = await fetchSortedBooks(
          searchFinal,
          categoryFinal,
          sortBy,
          maxResults,
          startIndex
        );
        if (startIndex == 0) {
          setBooks((prev) => (prev = responseBooks.data));
        } else {
          setBooks((prev) => ({
            ...prev,
            items: [...prev.items, ...responseBooks.data.items],
          }));
        }
      } else {
        if (startIndex == 0) {
          setBooks((prev) => (prev = responseBooks.data));
        } else {
          setBooks((prev) => ({
            ...prev,
            items: [...prev.items, ...responseBooks.data.items],
          }));
        }
      }
    }

    try {
      requestBooks();
    } catch (error) {
      alert("Something went wrong...");
    }
  }, [
    searchParams.search,
    searchParams.category,
    searchParams.sortBy,
    startIndex,
  ]);

  return (
    <>
      <main>
        <p className={style["results-txt"]}>Found {books.totalItems} results</p>

        <div className={style["books-catalog"]}>
          {books?.items?.length ? (
            books.items.map((book) => {
              let categoryBook;
              if (book.volumeInfo.categories) {
                [categoryBook] = book.volumeInfo.categories;
              } else {
                [categoryBook] = "";
              }

              return (
                <Link
                  key={book.id}
                  className={style.linkMain}
                  to={`/ ${book.id}`}
                >
                  <div className={style.book}>
                    <div className={style["container-img"]}>
                      <img
                        className={style["book-img"]}
                        src={
                          book.volumeInfo.imageLinks?.thumbnail
                            ? `${book.volumeInfo.imageLinks?.thumbnail}`
                            : notFoundImg
                        }
                      />
                    </div>

                    <div className={style["book-info"]}>
                      <p className={style["book-category"]}>{categoryBook}</p>
                      <div className={style["book-description"]}>
                        {" "}
                        {book.volumeInfo.title}
                      </div>
                      <div className={style["book-author"]}>
                        {book.volumeInfo?.authors}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })
          ) : (
            <p className={style.indLoader}>Loading...</p>
          )}
        </div>
      </main>

      <div className={style.pagePagination}>
        <button
          className={style.loadMore}
          onClick={() => setStartIndex((prev) => prev + maxResults + 1)}
        >
          Load more
        </button>
      </div>
    </>
  );
};
