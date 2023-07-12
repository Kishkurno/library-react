import { useContext, useEffect, useState } from "react";
import { SearchContext } from "src/App";

import { CATEGORIES } from "../../constants/categories";
import { SORT_TYPES } from "../../constants/sortBy";
import style from "./headerStyle.module.css";
export const Header = () => {
  const { searchParams, setSearchParams } = useContext(SearchContext);

  const [search, setSearch] = useState("");

  function handleCategory(event) {
    setSearchParams((prev) => ({ ...prev, category: event.target.value }));
  }

  function handleSort(event) {
    setSearchParams((prev) => ({ ...prev, sortBy: event.target.value }));
  }

  function handleSearchEnterPress(event) {
    if (event.key === "Enter") {
      handleSearch();
    }
  }

  function handleSearch() {
    setSearchParams((prev) => ({ ...prev, search: search }));
  }

  function handleSearchInput(event) {
    setSearch((prev) => (prev = event.target.value));
  }

  return (
    <form className={style["header-div"]}>
      <h1 className={style["header-title"]}>Search books</h1>

      <div className={style["header-search"]}>
        <input
          value={search}
          className={style["input-search"]}
          onChange={handleSearchInput}
          type="text"
          placeholder="Search..."
          onKeyDown={handleSearchEnterPress}
        />
        <button
          className={style["header-searchButton"]}
          onClick={handleSearch}
        ></button>
      </div>

      <div className={style["header-sort"]}>
        <div className={style["categories-div"]}>
          <p className={style["header-sortText"]}>Categories</p>
          <select
            onChange={handleCategory}
            value={searchParams.category}
            className={style["header-select"]}
          >
            {CATEGORIES.map((category) => (
              <option key={`${category}`} value={`${category}`}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className={style["sorting-div"]}>
          <p className={style["header-sortText"]}>Sorting by</p>
          <select
            value={searchParams.sortBy}
            onChange={handleSort}
            className={style["header-select"]}
          >
            {" "}
            {SORT_TYPES.map((sortType) => (
              <option
                key={`${sortType}`}
                value={`${sortType.toLocaleLowerCase()}`}
              >
                {sortType}
              </option>
            ))}
          </select>
        </div>
      </div>
    </form>
  );
};
