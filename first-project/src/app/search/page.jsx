// app/search/page.jsx
"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { articles } from "@/store"

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("query") || ""
  const [results, setResults] = useState([])

  useEffect(() => {
    if (query) {
      // В реальном проекте здесь был бы запрос к серверу или фильтрация по данным
      const filtered = articles.filter(article =>
        article.title.toLowerCase().includes(query.toLowerCase()) ||
        article.content.toLowerCase().includes(query.toLowerCase()) ||
        article.path.toLowerCase().includes(query.toLowerCase())
      )
      setResults(filtered)
    } else {
      setResults([])
    }
  }, [query])

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Результаты поиска для: <span className="text-blue-600">"{query}"</span></h1>

      {results.length > 0 ? (
        <ul className="space-y-2">
          {results.map((item, index) => (
            <li key={index} className="p-3 bg-dark-100 rounded-xl shadow-sm">
              {item.title && (
                <h2 className="text-lg font-semibold text-white-800">{item.content}</h2>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">Ничего не найдено.</p>
      )}
    </div>
  )
}
