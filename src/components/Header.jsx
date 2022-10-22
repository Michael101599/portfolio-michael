import { useEffect, useState } from "react";
import logo from "../images/logo-portfolio.png"

export default function Header(){


    const [stickyClass, setStickyClass] = useState("");
    const [active, setActive] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);
        return () => {
            window.removeEventListener("scroll", stickNavbar);
        };
    }, []);

    const stickNavbar = () => {
        if(window !== undefined){
            let windowHeight = window.scrollY;
            windowHeight > 100 ? setStickyClass('sticky') : setStickyClass('');
        }
    }

    return(
        <header className={`${stickyClass}`}>
            <div className="header-inner">
                <div className="logo">
                    <img src={logo} width='60' height='60' alt="michael" />
                </div>
                {/* <span className="logo">Miki.</span> */}
                <div className="links">
                    <a className="link" href="#banner">
                        Home
                    </a>
                    <a className="link" href="#services">
                        About Me
                    </a>
                    <a className="link" href="#experiences">
                        Experience
                    </a>
                    <a className="link" href="#projects">
                        Projects
                    </a>
                    <a className="link" href="https://bit.ly/3DmNqVt">
                        CV
                    </a>
                </div>
                {!active && <span className="menu" onClick={() => setActive(!active)}>
                    <i className="fas fa-bars"></i>
                </span>}
                {!active === false && <span className="menu" onClick={() => setActive(!active)}>
                    <i className="fa-solid fa-xmark"></i>
                </span>}
                <div className={`mobile-links ${active ? "active" : ""}`} >
                    <a className="link" onClick={() => setActive(!active)} href="#banner">
                        Home
                    </a>
                    <a className="link" onClick={() => setActive(!active)} href="#services">
                        About Me
                    </a>
                    <a className="link" onClick={() => setActive(!active)} href="#experiences">
                        Experience
                    </a>
                    <a className="link" onClick={() => setActive(!active)} href="#projects">
                        Projects
                    </a>
                    <a className="link" onClick={() => setActive(!active)} href="https://bit.ly/3DmNqVt">
                        CV
                    </a>
                </div>
            </div>
        </header>
    )
}