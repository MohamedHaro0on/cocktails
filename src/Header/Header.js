import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../logo.svg";
import ClassNames from "./Header.module.css";
import { FaBars } from "react-icons/fa";

const Rotues = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" }
];

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleHeader = () => {
        setIsOpen(prevState => !prevState);
    }

    //  Closes the Header after Routing;
    useEffect(() => {
        setIsOpen(false);
    }, [props])

    return (
        <header className={`${ClassNames.Header} ${isOpen ? ClassNames.Opened : ClassNames.Closed}`}>

            {
                // Main haeding;
                <h1 className={ClassNames.MainHeading}>
                    <Link aria-label="to Home Page" to="/">
                        <img src={Logo} alt="Cocktails" title="Cocktails" width="250" />
                    </Link>
                    <button onClick={toggleHeader} aria-label="toggle Header"> <FaBars /> </button>
                </h1>
            }

            {
                // page Routes for seo i have put them inside nav and ul ;
                <nav>
                    <ul className={ClassNames.Routes}>
                        {Rotues.map(({ title, url }, index) => {
                            return (
                                <li key={index}>
                                    <Link to={url}> {title}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            }
        </header>
    )
}

export default Header
