import axios from "axios";
import style from "./main-style.module.css"
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SearchContext } from "../App";
import notFoundImg from "../assets/notFoundImg.png"

export const LibraryMain = () => {

  const maxResults = 32;
  const [books, setBooks] = useState({});
  const [startIndex, setStartIndex] = useState(0)
  const { searchParams, setSearchParams } = useContext(SearchContext)


  useEffect(() => {
    async function function1() {
      const search = searchParams.search == '' ? 'js' : searchParams.search
      const category = searchParams.category == 'all' ? '' : searchParams.category

      if (searchParams.sortBy != '') {
        const responseBooks = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}+subject:${category}&orderBy=${searchParams.sortBy}& key= ${import.meta.env.GOOGLE_API_KEY}&maxResults=${maxResults}&startIndex=${startIndex}`)
        console.log(responseBooks.data)
        if (startIndex == 0) {
          setBooks(prev => prev = responseBooks.data);
        }
        else {
          setBooks(prev => ({ ...prev, items: [...prev.items, ...responseBooks.data.items] }))
        }

      }
      else {
        const responseBooks = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}+subject:${category}& key= ${import.meta.env.GOOGLE_API_KEY}&maxResults=${maxResults}&startIndex=${startIndex}`)
        console.log(responseBooks.data)

        if (startIndex == 0) {
          setBooks(prev => prev = responseBooks.data);
        }
        else {
          setBooks(prev => ({ ...prev, items: [...prev.items, ...responseBooks.data.items] }))
        }


      }


    }

    function1();
  }, [searchParams.search, searchParams.category, searchParams.sortBy, startIndex])


  return (


    <>
      <main>

        <p className={style['results-txt']}>Found {books.totalItems} results</p>

        <div className={style['books-catalog']}>


          {books?.items?.length ? books.items.map(book => {

            let categoryBook;

            if (book.volumeInfo.categories) {
              [categoryBook] = book.volumeInfo.categories;
            } else {
              [categoryBook] = '';
            }

            return (
              <Link key={book.id} className={style.linkMain} to={`/ ${book.id}`}>

                <div className={style.book}>

                  <div className={style['container-img']}>
                    <img className={style['book-img']} src={book.volumeInfo.imageLinks?.thumbnail ? `${book.volumeInfo.imageLinks?.thumbnail}` : notFoundImg} />
                  </div>

                  <div className={style['book-info']}>

                    <p className={style['book-category']} >{categoryBook}</p>
                    <div className={style['book-description']}> {book.volumeInfo.title}</div>
                    <div className={style['book-author']}>{book.volumeInfo?.authors}</div>

                  </div>

                </div>
              </Link>

            )

          }) : <p className={style.indLoader}>Идёт загрузка...</p>}



        </div>

      </main>


      <div className={style.pagePagination}>

        <button className={style.loadMore}

          onClick={() => setStartIndex(prev => prev + maxResults + 1)}

        >Load more</button>

      </div>

    </>
  )


}