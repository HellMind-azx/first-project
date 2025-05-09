// app/about/page.jsx
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-8 w-full">
      <section className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          О нас
        </h1>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <p className="text-lg leading-relaxed">
              Мы — команда профессионалов, увлечённых созданием современных,
              высококачественных веб-продуктов. Наша миссия — разрабатывать
              решения, которые не только красивы, но и функциональны, надёжны и
              масштабируемы.
            </p>
            <p className="mt-4 text-lg leading-relaxed">
              Мы верим в силу технологий, прозрачность в общении и ценим
              качество во всём — от дизайна до кода.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://plus.unsplash.com/premium_photo-1675278298930-5aaa220956b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Наша команда"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <section className="bg-gray-100 p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Наши ценности</h2>
          <ul className="space-y-3 text-lg list-disc list-inside">
            <li>Прозрачность и честность</li>
            <li>Постоянное развитие</li>
            <li>Качество и надёжность</li>
            <li>Командная работа</li>
            <li>Ориентированность на пользователя</li>
          </ul>
        </section>
      </section>
    </main>
  );
}
