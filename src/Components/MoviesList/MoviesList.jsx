import { Movie } from '../index';

import './MoviesList.scss';

export const MoviesList = (props) => {
    const {movies = []} = props;
    
    return (
        <section>
            <div className="wrapper">
                <div className="cards-list">
                    {movies.length ? movies.map(movie => (
                        <Movie key={movie.id} {...movie}/>
                    )) : <h4 className="not-found">Nothing found</h4>}
                </div>
            </div>
        </section>
    );
};