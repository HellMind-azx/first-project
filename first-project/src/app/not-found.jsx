import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-dark from-gray-100 to-white flex flex-col items-center justify-center p-6 text-center">
      <svg
        className="w-32 h-32 text-red-400 animate-bounce mb-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M24 4v40m0 0l10-10m-10 10L14 34"
        />
      </svg>

      <h1 className="text-6xl font-extrabold text-white-800">404</h1>
      <p className="text-xl white-600 mt-4">Ой! Такой страницы нет.</p>
      <p className="text-white-500 max-w-md mt-2">
        Возможно, вы перешли по неверной ссылке, или страница была удалена.
      </p>

      <Link
        href="/"
        className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white text-lg rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
      >
        Вернуться на главную
      </Link>
    </div>
  );
}
