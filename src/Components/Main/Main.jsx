import { Routes, Route } from "react-router-dom";
import { PageGenres, Home } from '../../Pages';

import './Main.scss';

export const Main = () => {
    return (
        <main className="main">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/genres" element={<PageGenres/>}/>
            </Routes>
        </main>
    );
};