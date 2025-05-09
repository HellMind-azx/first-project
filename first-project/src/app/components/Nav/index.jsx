"use client"

import "./style.scss"
import Link from "next/link"
import SearchBox from "../SearchBox"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { useRouter } from 'next/navigation'
import { registeredLinks, nonRegisteredLinks } from "@/store"
import { FaHome, FaFire, FaInfoCircle, FaQuestionCircle, FaSignInAlt } from 'react-icons/fa'
import { CgProfile } from "react-icons/cg"

// This is OLD version react.js
// RU: это старый способ
// import { Link } from "react-router-dom"
// -----------------------------------------
// This is NEW version from next.js
// RU: это новый способ
// import Link from "next/link"

function Nav(props) {
    const pathname = usePathname()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const router = useRouter()
    const availableLinks = props.user ? registeredLinks : nonRegisteredLinks

    const toggleMenu = async (e) => {
        setIsMenuOpen(!isMenuOpen)
    }

    const handleSearch = (query) => {
        if (query.trim()) {
            router.push(`/search?query=${encodeURIComponent(query)}`);
        }
    };

    return (
        <nav className="nav-wrapper">
            
            <div className="left">
                <SearchBox onSearch={handleSearch} />
            </div>

            <div className="burger-menu" onClick={toggleMenu}>
                <span className={`burger-line ${isMenuOpen ? 'open' : ''}`}></span>
                <span className={`burger-line ${isMenuOpen ? 'open' : ''}`}></span>
                <span className={`burger-line ${isMenuOpen ? 'open' : ''}`}></span>
            </div>

            <div className={`right ${isMenuOpen ? 'open' : ''}`}>
                {
                    availableLinks.map((link) => {
                        const getIcon = () => {
                            switch (link.title) {
                                case 'ГЛАВНАЯ':
                                    return <FaHome className="nav-icon" />;
                                case 'СТАТЬИ':
                                    return <FaFire className="nav-icon" />;
                                case 'ОБО МНЕ':
                                    return <FaInfoCircle className="nav-icon" />;
                                case 'РЕКЛАМА':
                                    return <FaQuestionCircle className="nav-icon" />;
                                case 'ЛОГИН':
                                    return <FaSignInAlt className="nav-icon" />;
                                case 'ПРОФИЛЬ':
                                    return <CgProfile className="nav-icon" />;
                                default:
                                    return null;
                            }
                        };

                        return (
                            <Link
                                href={link.path}
                                key={link.title}
                                className={pathname == link.path ? "active" : ""}
                                onClick={(e) => { setIsMenuOpen(false); }}
                                id={link.id}
                            >
                                {getIcon()}
                                <span>{link.title}</span>
                            </Link>
                        )
                    })
                }
            </div>
        </nav>
    );
}

export default Nav;