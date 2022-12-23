import { useState } from "react";

import Movie from "../Movie/Movie";

import {
    Pagination,
    PaginationItem
} from "@mui/material";

import './MoviesList.scss';

function MoviesList(props) {
    const {movies = []} = props;
    const maxPage = movies.total_pages;
    const [page, setPage] = useState(1);

    return (
        <div className="wrapper">
            <div className="cards-list">
                {movies.results.length ? movies.results.map(movie => (
                    <Movie key={movie.id} {...movie}/>
                )) : <h4 className="not-found">Nothing found</h4>}
            </div>
            {/*<Pagination*/}
            {/*    count={maxPage}*/}
            {/*    page={page}*/}
            {/*    onChange={(_, num) => setPage(num)}*/}
            {/*    showFirstButton*/}
            {/*    showLastButton*/}
            {/*    sx={{ marginY: 3, marginX: "auto" }}*/}
            {/*    renderItem={(item) => (*/}
            {/*        <PaginationItem*/}
            {/*            to={item.page}*/}
            {/*            {...item}*/}
            {/*        />*/}
            {/*    )}*/}
            {/*/>*/}
        </div>
    )
}

export default MoviesList;