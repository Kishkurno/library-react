import axios from "axios";
import style from "./main-style.module.css"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



export const LibraryMain = () => {
  const [books, setBooks] = useState([]);


  useEffect(() => {
    async function function1() {
      const responseBooks = await axios.get("https://www.googleapis.com/books/v1/volumes?q=react&key=AIzaSyAGLC_lydN9t5Dwb5fZ14_ZE9AsjKdH3c4")
      setBooks(responseBooks.data.items);

    }

    function1();
  }, [])

  return (
    <main>

      <p className={style['results-txt']}>Found 466 results</p>

      <div className={style['books-catalog']}>


        {books.map(book => {
          const [firstAuthor, secondAuthor] = book.volumeInfo.authors
          console.log(book.volumeInfo.categories[0])
          return (
            <Link className={style.linkMain} to={`/${book.id}`}>

              <div key={book.id} className={style.book}>

                <div className={style['container-img']}>
                  <img className={style['book-img']} src={`${book.volumeInfo.imageLinks.thumbnail}`} />
                </div>

                <div className={style['book-info']}>

                  <p className={style['book-category']} >{book.volumeInfo.categories[0]}</p>
                  <div className={style['book-description']}> {book.volumeInfo.title}</div>
                  <div className={style['book-author']}>{firstAuthor}<br /> {secondAuthor}</div>

                </div>

              </div>
            </Link>

          )

        })}



      </div>

    </main>
  )
}