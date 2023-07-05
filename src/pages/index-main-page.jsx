import axios from "axios";
import style from "./main-style.module.css"
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SearchContext } from "../App";


export const LibraryMain = () => {
  const [books, setBooks] = useState({});

  const { searchParams, setSearchParams } = useContext(SearchContext)

  useEffect(() => {
    async function function1() {
      const search = searchParams.search == '' ? 'js' : searchParams.search

      console.log('kjh')

      if (searchParams.sortBy != '') {
        const responseBooks = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}+subject:${searchParams.category}&orderBy=${searchParams.sortBy}& key= ${import.meta.env.GOOGLE_API_KEY}`)
        console.log(responseBooks.data)
        setBooks(responseBooks.data);
      }
      else {
        console.log('mort')
        const responseBooks = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}+subject:${searchParams.category}& key= ${import.meta.env.GOOGLE_API_KEY}`)
        console.log(responseBooks.data)
        setBooks(responseBooks.data);
      }

    }

    function1();
  }, [searchParams.search, searchParams.category, searchParams.sortBy])


  return (
    <main>

      <p className={style['results-txt']}>Found {books.totalItems} results</p>

      <div className={style['books-catalog']}>


        {books?.items?.length && books.items.map(book => {
          let firstAuthor, secondAuthor;

          if (book.volumeInfo.authors) {
            [firstAuthor, secondAuthor] = book.volumeInfo.authors;
          } else {
            firstAuthor = secondAuthor = 'Unknown author';
          }

          return (
            <Link key={book.id} className={style.linkMain} to={`/ ${book.id}`}>

              <div className={style.book}>

                <div className={style['container-img']}>
                  <img alt="no found :(" className={style['book-img']} src={`${book.volumeInfo.imageLinks?.thumbnail}`} />
                </div>

                <div className={style['book-info']}>

                  <p className={style['book-category']} >{book.volumeInfo.categories}</p>
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