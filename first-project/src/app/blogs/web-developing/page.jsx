'use client'

import { useState } from "react";
import "./WebDeveloping.scss";

const WebDeveloping = () => {
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);

  const stages = [
    "Анализ и планирование",
    "Проектирование UX/UI",
    "Разработка Frontend и Backend",
    "Тестирование и отладка",
    "Запуск и поддержка",
  ];

  const benefits = [
    {
      icon: "⚡",
      title: "Быстрая загрузка",
      description: "Оптимизированные сайты загружаются менее чем за 2 секунды.",
    },
    {
      icon: "📱",
      title: "Адаптивный дизайн",
      description: "Идеально смотрится на всех устройствах: от мобильных до 4K-мониторов.",
    },
    {
      icon: "🔒",
      title: "Безопасность",
      description: "Современные протоколы шифрования и защита данных.",
    },
  ];

  const reviews = [
    {
      name: "Игорь Савченко",
      role: "Стартапер",
      text: "Мой сайт был готов за 3 недели! Результат превзошел ожидания.",
      avatar: "https://randomuser.me/api/portraits/men/68.jpg",
    },
    {
      name: "Мария Кузнецова",
      role: "Фрилансер",
      text: "Приятный интерфейс, высокая скорость, профессиональный подход.",
      avatar: "https://randomuser.me/api/portraits/women/52.jpg",
    },
  ];

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim() === "") return;

    const newComment = {
      id: Date.now(),
      text: commentText,
    };

    setComments([newComment, ...comments]);
    setCommentText("");
  };

  return (
    <div className="webdev-page">
      <section className="hero">
        <h1>Профессиональная Веб-разработка</h1>
        <p>
          Создаем быстрые, современные и эффективные сайты под любые задачи —
          от лендингов до сложных веб-приложений.
        </p>
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
          alt="Web Development"
        />
      </section>

      <section className="benefits">
        {benefits.map((b, i) => (
          <div className="benefit-card" key={i}>
            <div className="icon">{b.icon}</div>
            <h3>{b.title}</h3>
            <p>{b.description}</p>
          </div>
        ))}
      </section>

      <section className="stages">
        <h2>Этапы разработки</h2>
        <ol>
          {stages.map((step, i) => (
            <li key={i}>
              <span>{i + 1}</span>
              {step}
            </li>
          ))}
        </ol>
      </section>

      <section className="reviews">
        <h2>Отзывы клиентов</h2>
        <div className="review-list">
          {reviews.map((r, i) => (
            <div className="review-card" key={i}>
              <img src={r.avatar} alt={r.name} />
              <p>"{r.text}"</p>
              <h4>{r.name}</h4>
              <span>{r.role}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="cta">
        <h2>Нужен сайт под ключ?</h2>
        <p>Оставьте заявку, и мы обсудим ваш проект уже сегодня.</p>
        <button>Получить консультацию</button>
      </section>

      <section className="related-blogs">
        <h2>Интересно было почитать?</h2>
        <p>Посмотрите также другие материалы из нашего блога:</p>
        <ul>
          <li><a href="/blogs/video-marketing">📹 Видео-маркетинг: как привлекать внимание</a></li>
          <li><a href="/app/blogs/SeoStrategy">🔍 SEO-стратегия: как вывести сайт в топ</a></li>
          <li><a href="/app/blogs/UiDesign">🎨 UI-дизайн: современные тенденции</a></li>
        </ul>
      </section>

      <section className="comments">
        <h2>Комментарии</h2>
        <form className="comment-form" onSubmit={handleCommentSubmit}>
          <textarea
            placeholder="Оставьте комментарий..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            required
          ></textarea>
          <button type="submit">Отправить</button>
        </form>

        {comments.length > 0 && (
          <div className="comment-list">
            <h3>Ваши комментарии:</h3>
            <ul>
              {comments.map((c) => (
                <li key={c.id}>{c.text}</li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </div>
  );
};

export default WebDeveloping;
