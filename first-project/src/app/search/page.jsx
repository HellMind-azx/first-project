// app/search/page.jsx
"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("query") || ""
  const [results, setResults] = useState([])

  useEffect(() => {
    if (query) {
      // В реальном проекте здесь был бы запрос к серверу или фильтрация по данным
      const mockData = ["React", "Next.js", "Node.js", "CSS", "HTML", "Tailwind"]
      const filtered = mockData.filter(item =>
        item.toLowerCase().includes(query.toLowerCase())
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
            <li key={index} className="p-3 bg-gray-100 rounded-xl shadow-sm">
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">Ничего не найдено.</p>
      )}
    </div>
  )
}
