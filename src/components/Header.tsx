import React from "react";

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="logo">
                <h1>Portfólio</h1>
                <nav>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;