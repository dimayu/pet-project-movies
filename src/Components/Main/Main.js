import BlockSearchFilter from "../BlockSearchFilter/BlockSearchFilter";
import BlockGenres from "../BlockGenres/BlockGenres";
import HomeSlider from "../HomeSlider/HomeSlider";

import './Main.scss';

function Main() {
    return (
        <main className="main">
            <HomeSlider/>
            <BlockSearchFilter/>
            <BlockGenres/>
        </main>
    )
}

export default Main;