import { NavLink } from 'react-router-dom';

export const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="genres">
                        Genres
                    </NavLink>
                </li>
                {/*<li>*/}
                {/*    <NavLink>*/}
                {/*        Latest*/}
                {/*    </NavLink>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <NavLink>*/}
                {/*        Top*/}
                {/*    </NavLink>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <NavLink>*/}
                {/*        Upcoming*/}
                {/*    </NavLink>*/}
                {/*</li>*/}
            </ul>
        </nav>
    );
};