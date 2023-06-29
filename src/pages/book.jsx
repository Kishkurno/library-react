import axios from "axios";
import style from "./book-main.module.css"
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export async function loaderBook({ params }) {
  const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${params.id}?key=AIzaSyAGLC_lydN9t5Dwb5fZ14_ZE9AsjKdH3c4`);



  return { book: response.data };   // book со значением response
}

export const BookPage = () => {

  const { book } = useLoaderData();

  return (


    <main className={style['book-container']}>

      <div className={style['img-container']}>

        <img src={`${book.volumeInfo.imageLinks.thumbnail}`} />

      </div>

      <div className={style['info-container']}>

        <p className={style['result-categor-sort']} >{book.volumeInfo.categories[0]}</p>

        <p className={style['book-name-txt']}>{book.volumeInfo.title}</p>

        <a className={style['book-author-link']} href="">{book.volumeInfo.authors}</a>

        <textarea className={style['book-shortVar']} value={book.volumeInfo.description} />
      </div>

    </main>
  )
}