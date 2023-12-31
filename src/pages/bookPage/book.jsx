import axios from "axios";
import { useLoaderData } from "react-router-dom";
import notFoundImg from "src/assets/notFoundImg.png";

import style from "./book.module.css";

export async function loaderBook({ params }) {
  const response = await axios.get(
    `https://www.googleapis.com/books/v1/volumes/${params.id}?key=AIzaSyAGLC_lydN9t5Dwb5fZ14_ZE9AsjKdH3c4`
  );

  return { book: response.data };
}

export const BookPage = () => {
  const { book } = useLoaderData();

  return (
    <section className={style["book-container"]}>
      <div className={style["img-container"]}>
        <img
          src={
            book.volumeInfo.imageLinks?.thumbnail
              ? `${book.volumeInfo.imageLinks?.thumbnail}`
              : notFoundImg
          }
        />
      </div>

      <div className={style["info-container"]}>
        <p className={style["result-categor-sort"]}>
          {book.volumeInfo.categories}
        </p>

        <p className={style["book-name-txt"]}>{book.volumeInfo.title}</p>

        <a className={style["book-author-link"]} href="">
          {book.volumeInfo.authors}
        </a>

        <textarea
          className={style["book-shortVar"]}
          value={book.volumeInfo.description}
        />
      </div>
    </section>
  );
};
