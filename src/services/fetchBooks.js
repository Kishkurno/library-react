import axios from "axios";

export async function fetchBooks(search, category, maxResults, startIndex) {
  return await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}+subject:${category}& key= ${import.meta.env.GOOGLE_API_KEY}&maxResults=${maxResults}&startIndex=${startIndex}`)
}