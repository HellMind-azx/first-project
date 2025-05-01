import React from "react";
import "./VideoMarketing.css"; 
import Nav from "@/app/components/Nav"

const features = [
  {
    title: "Увеличение конверсии",
    description: "Видео на лендинге может увеличить конверсии до 80%.",
    icon: "📈",
  },
  {
    title: "Улучшение SEO",
    description: "Google предпочитает сайты с видеоконтентом.",
    icon: "🔍",
  },
  {
    title: "Повышение вовлеченности",
    description: "Видео удерживает внимание пользователей в 2.6 раза дольше.",
    icon: "🎯",
  },
];

const testimonials = [
  {
    name: "Александр Петров",
    role: "Маркетолог",
    feedback:
      "Видео-маркетинг преобразил наш бизнес. Конверсия выросла на 65% всего за месяц!",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Елена Миронова",
    role: "Предприниматель",
    feedback:
      "Теперь видео — ключевой элемент нашей стратегии. Люди доверяют больше.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

const VideoMarketing = () => {
  return (
    <div className="video-page">
      <Nav/>
      <section className="hero">
        <h1>Видео-маркетинг — Будущее Онлайн-Продвижения</h1>
        <p>Используй силу видео, чтобы вдохновлять, вовлекать и продавать.</p>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Видео-маркетинг"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className="features">
        {features.map((item, i) => (
          <div className="feature-card" key={i}>
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </section>

      <section className="testimonials">
        <h2>Отзывы наших клиентов</h2>
        <div className="testimonial-grid">
          {testimonials.map((t, i) => (
            <div className="testimonial" key={i}>
              <img src={t.avatar} alt={t.name} />
              <p>"{t.feedback}"</p>
              <h4>{t.name}</h4>
              <span>{t.role}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="cta">
        <h2>Готовы начать?</h2>
        <p>Давайте создадим видео, которое полюбят ваши клиенты.</p>
        <button>Связаться с нами</button>
      </section>
    </div>
  );
};

export default VideoMarketing;
