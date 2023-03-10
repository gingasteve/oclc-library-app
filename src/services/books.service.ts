import { Book } from "../Books";

export async function getBooks(): Promise<Book[]> {
  const response = await fetch("http://localhost:3001/books");
  if (!response.ok) throw new Error(response.statusText);
  return response.json();
}
