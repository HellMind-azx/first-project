import { createContext } from "react"

const context = createContext()

const nonRegisteredLinks = [
    { title: "О НАС", path: "/about-us" },
    { title: "ЛОГИН", path: "/auth/login" },
]
const registeredLinks = [
    { title: "ГЛАВНАЯ", path: "/", },
    { title: "О НАС", path: "/about-us", },
    { title: "СТАТЬИ", path: "/articles" },
    { title: "РЕКЛАМА", path: "/ads" },
    { title: "ПРОФИЛЬ", path: "/profile", id: "profile" },
]
const articles = [
    {
        title: 'Как писать код как безумец ?',
        path: '/articles',
        content: `Этапы разработки : 
        1Анализ и планирование  
        2Проектирование UX/UI 
        3Разработка Frontend и Backend 
        4Тестирование и отладка 
        5Запуск и поддержка`
    },
    {
        title: 'Подробно здесь можете узнать о продвижении',
        path: '/articles',
        content: 'Видео-маркетинг — Будущее Онлайн-Продвижения. Используй силу видео, чтобы вдохновлять, вовлекать и продавать.'
    }
]
export {
    nonRegisteredLinks,
    registeredLinks,
    context,
    articles
}