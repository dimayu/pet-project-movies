import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.scss';

export const Navigation = () => {
    const [open, setOpen] = useState(false);
    
    function toggleClass() {
        setOpen(!open);
    }
    
    return (
        <>
            <div className={!open ? "menu-btn" : "menu-btn" + " menu-btn--active"} onClick={toggleClass}>
                <span className="lines"></span>
            </div>
            <nav className={!open ? "nav-top" : "nav-top" + " nav-top--active"}>
                <ul className="nav-top__list">
                    <li className="nav-top__list__item">
                        <NavLink to="/" className="nav-top__list__item--link" onClick={toggleClass}>
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-top__list__item">
                        <NavLink to="genres" className="nav-top__list__item--link" onClick={toggleClass}>
                            Genres
                        </NavLink>
                    </li>
                    <li className="nav-top__list__item">
                        <NavLink to="popular" className="nav-top__list__item--link" onClick={toggleClass}>
                            popular
                        </NavLink>
                    </li>
                    <li className="nav-top__list__item">
                        <NavLink to="top_rated" className="nav-top__list__item--link" onClick={toggleClass}>
                            Top
                        </NavLink>
                    </li>
                    <li className="nav-top__list__item">
                        <NavLink to="upcoming" className="nav-top__list__item--link" onClick={toggleClass}>
                            Upcoming
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
};