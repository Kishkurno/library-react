import { useContext, useState } from "react"
import style from "./header-style.module.css"
import { SearchContext } from "../../App"
export const Header = () => {
  const { searchParams, setSearchParams } = useContext(SearchContext)

  const [search, setSearch] = useState('')

  const categories = ['', 'ART', 'Fiction', 'Science', 'Computer', 'Space']

  const sortTypes = ['', 'Relevance', 'Newest']

  function handleCategory(event) {
    setSearchParams(prev => ({ ...prev, category: event.target.value }))
  }


  function handleSort(event) {
    setSearchParams(prev => ({ ...prev, sortBy: event.target.value }))
  }

  function handleSearch() {

    setSearchParams(prev => ({ ...prev, search: search }))
  }

  function handleSearchInput(event) {
    setSearch((prev) => prev = event.target.value)
  }

  return (
    <header className={style['header-div']} >

      <div className={style['header-title']}>
        Search books
      </div>

      <div className={style['header-search']}>
        <input value={search} className={style['input-search']} onChange={handleSearchInput} type="text" placeholder="Search..." />
        <button className={style['header-searchButton']} onClick={handleSearch}>
        </button>
      </div>

      <div className={style['header-sort']}>
        <div className={style['categories-div']}>
          <p className={style['header-sortText']}>Categories</p>
          <select onChange={handleCategory} value={searchParams.category} className={style['header-select']} >
            {categories.map(category => <option key={`${category}`} value={`${category}`}>{category}</option>)}
          </select>
        </div>

        <div className={style['sorting-div']}>
          <p className={style['header-sortText']}>Sorting by</p>
          <select value={searchParams.sortBy} onChange={handleSort} className={style['header-select']}>    {sortTypes.map(sortType => <option key={`${sortType}`} value={`${sortType.toLocaleLowerCase()}`}>{sortType}</option>)}
          </select>
        </div>

      </div>
    </header >

  )
}