import { Link, NavLink } from "react-router-dom"
import { AiOutlineHome, AiOutlineUser, AiFillContacts } from "react-icons/ai"
import { CgFileDocument } from "react-icons/cg";

export const Header = () => {
    return (
        <nav className="main-header">
            <Link to="/home" className="brand">Harshat Munnangi</Link>
            <ul className="list-style">
                <li className="list-item">
                    <NavLink to="/home">
                        <AiOutlineHome style={{ marginBottom: "-2px" }} />Home
                    </NavLink>
                    </li>
                <li className="list-item">
                    <NavLink to="/about">
                        <AiOutlineUser style={{ marginBottom: "-2px" }} />About
                    </NavLink>
                </li>
                <li className="list-item">
                    <NavLink to="/resume">
                        <CgFileDocument style={{ marginBottom: "-2px" }} />Resume
                    </NavLink>
                </li>
                <li className="list-item">
                    <NavLink to="/contact">
                        <AiFillContacts style={{ marginBottom: "-2px" }} />Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
