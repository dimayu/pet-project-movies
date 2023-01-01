import { NavLink } from 'react-router-dom';

import './Navigation.scss';

export const Navigation = () => {
    return (
        <nav className="nav-top">
            <ul className="nav-top__list">
                <li className="nav-top__list__item">
                    <NavLink to="/" className="nav-top__list__item--link">
                        Home
                    </NavLink>
                </li>
                <li className="nav-top__list__item">
                    <NavLink to="genres" className="nav-top__list__item--link">
                        Genres
                    </NavLink>
                </li>
                <li className="nav-top__list__item">
                    <NavLink to="popular" className="nav-top__list__item--link">
                        popular
                    </NavLink>
                </li>
                <li className="nav-top__list__item">
                    <NavLink to="top_rated" className="nav-top__list__item--link">
                        Top
                    </NavLink>
                </li>
                <li className="nav-top__list__item">
                    <NavLink to="upcoming" className="nav-top__list__item--link">
                        Upcoming
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};