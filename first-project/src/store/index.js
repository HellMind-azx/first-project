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
    { title: "РЕКЛАМА", path: "/advertisement" },
    { title: "ПРОФИЛЬ", path: "/profile", id: "profile" },
]

export {
    nonRegisteredLinks,
    registeredLinks,
    context
}