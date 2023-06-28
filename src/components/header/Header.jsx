import style from "./header-style.module.css"
export const Header = () => {
  return (
    <header className={style['header-div']} >

      <div className={style['header-title']}>
        Search books
      </div>

      <div className={style['header-search']}>
        <input className={style['input-search']} type="text" placeholder="Search..." />
        <button className={style['header-searchButton']}>
        </button>
      </div>

      <div className={style['header-sort']}>
        <div className={style['categories-div']}>
          <p className={style['header-sortText']}>Categories</p>
          <select className={style['header-select']} >
            <option value="all"></option>
            <option value="1">Art </option>
            <option value="2">Fiction</option>
          </select>
        </div>

        <div className={style['sorting-div']}>
          <p className={style['header-sortText']}>Sorting by</p>
          <select className={style['header-select']}>
            <option value="all"></option>
            <option value="1">Reverance</option>
            <option value="2">By number</option>
          </select>
        </div>

      </div>
    </header >

  )
}