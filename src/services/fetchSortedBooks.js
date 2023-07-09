import axios from "axios";

export async function fetchSortedBooks(search, category, sortBy, maxResults, startIndex) {
  return await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}+subject:${category}&orderBy=${sortBy}& key= ${import.meta.env.GOOGLE_API_KEY}&maxResults=${maxResults}&startIndex=${startIndex}`)
}