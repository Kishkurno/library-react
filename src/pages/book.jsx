import style from "./book-main.module.css"

export const BookPage = () => {
  return (

    <main className={style['book-container']}>

      <div className={style['img-container']}>

        <img src="src/assets/краткие ответы на большие вопросы.png" />

      </div>

      <div className={style['info-container']}>

        <p className={style['result-categor-sort']} >Art/General</p>

        <p className={style['book-name-txt']}>Краткие ответы на большие вопросы</p>

        <a className={style['book-author-link']} href="">Стивен Хокинг</a>

        <div className={style['book-shortVar']}> О кратких ответах на большие вопросы</div>

      </div>

    </main>
  )
}