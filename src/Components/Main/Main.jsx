import { HomeSlider } from '../HomeSlider/HomeSlider';
import { BlockSearchFilter } from '../BlockSearchFilter/BlockSearchFilter';
import { BlockGenres } from '../BlockGenres/BlockGenres';

import './Main.scss';

export const Main = () => {
    return (
        <main className="main">
            <HomeSlider/>
            <BlockSearchFilter/>
            <BlockGenres/>
        </main>
    );
};