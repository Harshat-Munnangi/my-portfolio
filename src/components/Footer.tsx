import {AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai"

const Footer = () => {

    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className="footer">
           <div className="footer-div">Developed and Designed by Harshat Munnangi</div>
           <div className="footer-div">Copyright © {year} HM</div>
           <div className="footer-contact footer-div">
            <ul className="list-style">
                <li className="list-item">
                    <a href="https://github.com/Harshat-Munnangi" target="_blank" rel="noopener noreferrer">
                        <AiFillGithub />
                    </a>
                </li>
                <li className="list-item">
                    <a href="https://www.linkedin.com/in/harshatmunnangi/" target="_blank" rel="noopener noreferrer">
                        <AiFillLinkedin />
                    </a>
                </li>
                <li className="list-item">
                    <a href="mailto:harshat39@gmail.com" target="_blank" rel="noopener noreferrer">
                        <AiFillMail />
                    </a>
                </li>
            </ul>
            </div>
        </div>
    )
}

export default Footer