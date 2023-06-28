import style from "./main-style.module.css"

export const LibraryMain = () => {
  return (
    <main>

      <p className={style['results-txt']}>Found 466 results</p>

      <div className={style['books-catalog']}>

        <div className={style.book}>

          <div className={style['container-img']}>
            <img className={style['book-img']} src="src/assets/краткие ответы на большие вопросы.png" />
          </div>

          <div className={style['book-info']}>

            <p className={style['book-category']} >Computers</p>
            <div className={style['book-description']}> Node.js Разработка серверных веб-приложений на JavaScript</div>
            <div className={style['book-author']}>Дэвид Хэррон</div>

          </div>

        </div>

        <div className={style.book}>

          <div className={style['container-img']}>
            <img className={style['book-img']} src="src/assets/краткие ответы на большие вопросы.png" />
          </div>

          <div className={style['book-info']}>

            <p className={style['book-category']} >Computers</p>
            <div className={style['book-description']}> Node.js Разработка серверных веб-приложений на JavaScript</div>
            <div className={style['book-author']}>Дэвид Хэррон</div>

          </div>

        </div>

        <div className={style.book}>

          <div className={style['container-img']}>
            <img className={style['book-img']} src="src/assets/краткие ответы на большие вопросы.png" />
          </div>

          <div className={style['book-info']}>

            <p className={style['book-category']} >Computers</p>
            <div className={style['book-description']}> Node.js Разработка серверных веб-приложений на JavaScript</div>
            <div className={style['book-author']}>Дэвид Хэррон</div>

          </div>

        </div>


        <div className={style.book}>

          <div className={style['container-img']}>
            <img className={style['book-img']} src="src/assets/краткие ответы на большие вопросы.png" />
          </div>

          <div className={style['book-info']}>

            <p className={style['book-category']} >Computers</p>
            <div className={style['book-description']}> Node.js Разработка серверных веб-приложений на JavaScript</div>
            <div className={style['book-author']}>Дэвид Хэррон</div>

          </div>

        </div>

        <div className={style.book}>

          <div className={style['container-img']}>
            <img className={style['book-img']} src="src/assets/краткие ответы на большие вопросы.png" />
          </div>

          <div className={style['book-info']}>

            <p className={style['book-category']} >Computers</p>
            <div className={style['book-description']}> Node.js Разработка серверных веб-приложений на JavaScript</div>
            <div className={style['book-author']}>Дэвид Хэррон</div>

          </div>

        </div>


      </div>

    </main>
  )
}