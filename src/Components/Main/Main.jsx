import { Routes, Route } from "react-router-dom";
import { PageGenres, Home, PageCategories, PageMovie } from '../../Pages';

import './Main.scss';

export const Main = () => {
    return (
        <main className="main">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="genres" element={<PageGenres/>}/>
                <Route path=":categories" element={<PageCategories/>}/>
                <Route path="movies/:movieId" element={<PageMovie/>}/>
                <Route path=":categories/movies/:movieId" element={<PageMovie/>}/>
            </Routes>
        </main>
    );
};