"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь можно добавить отправку данных на сервер
    console.log("Форма отправлена:", form);
    setSubmitted(true);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-md rounded-2xl">
      <h1 className="text-2xl font-bold mb-4 text-black">Написать мне</h1>
      {submitted ? (
        <p className="text-green-600">Спасибо! Я свяжусь с вами в ближайшее время.</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium text-black">Имя</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-black">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-black">Сообщение</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full p-2 border rounded-lg text-black"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Отправить
          </button>
        </form>
      )}
    </div>
  );
}
