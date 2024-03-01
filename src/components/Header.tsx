import { Link, NavLink } from "react-router-dom"

export const Header = () => {
    return (
        <nav>
            <Link to="/home" className="brand">Harshat Munnangi</Link>
            <ul>
                <li><NavLink to="/home">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/resume">Resume</NavLink></li>
            </ul>
        </nav>
    )
}
