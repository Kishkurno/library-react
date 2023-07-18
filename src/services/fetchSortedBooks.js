import axios from "axios";

export async function fetchSortedBooks(
  search,
  category,
  sortBy,
  maxResults,
  startIndex
) {
  return await axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=${search}+subject:${category}&orderBy=${sortBy}& key= AIzaSyAGLC_lydN9t5Dwb5fZ14_ZE9AsjKdH3c4&maxResults=${maxResults}&startIndex=${startIndex}`
  );
}
