export const URL_IMG = "https://image.tmdb.org/t/p/original";

class ApiClass {
  constructor() {
    this.API_KEY = process.env.REACT_APP_API_KEY;
    this.API_BASE_URL = "https://api.themoviedb.org/3/";
    this.API_LANG = "language=en-US";
    this.URL_IMG = "https://image.tmdb.org/t/p/original";
    this.DISCOVER = "discover";
    this.GENRE = "genre";
    this.SEARCH = "search";
    this.MOVIE = "movie";
    this.LIST = "list"
  }
  
  request = async ({
    callbackError,
    callbackSuccess,
    route,
    category,
    subRoute,
    page,
    subCategory,
    str,
  }) => {
    return await fetch(
      `${this.API_BASE_URL}${route}${
        subRoute
          ? `/${subRoute}`
          : ""
      }${category
        ? `/${category}`
        : ""}?api_key=${this.API_KEY}&${this.API_LANG}${
        subCategory
          ? `&with_genres=${subCategory}`
          : ""
      }${str
        ? `&query=${str}`
        : ""
      }${
        page
          ? `&page=${page}`
          : ""
      }`
    )
    .then(response => {
      if (response?.ok) {
        return response.json();
      }
    })
    .then(data => {
      if (data) {
        if (callbackSuccess) {
          callbackSuccess(data);
        }
        return data;
      }
    })
    .catch((err) => {
      console.log(err);
      if (callbackError) {
        callbackError();
      }
    });
  };
  
  getMovieTrailers = async ({
    callbackError,
    callbackSuccess,
    id,
  }) => {
    return this.request({
      callbackError,
      callbackSuccess,
      route: this.MOVIE,
      subRoute: id,
      category: "videos",
    });
  };
  
  getMovieActors = async ({
    callbackError,
    callbackSuccess,
    id,
  }) => {
    return this.request({
      callbackError,
      callbackSuccess,
      route: this.MOVIE,
      subRoute: id,
      category: "credits",
    });
  };
  
  getMovieDescription = async ({
    callbackError,
    callbackSuccess,
    id,
  }) => {
    return this.request({
      callbackError,
      callbackSuccess,
      route: this.MOVIE,
      subRoute: id,
    });
  };
  
  getMoviesList = async ({
    callbackError,
    callbackSuccess,
    page,
  }) => {
    return this.request({
      callbackError,
      callbackSuccess,
      route: this.MOVIE,
      category: "top_rated",
      page,
    });
  };
  
  getMoviesSearch = async ({
    callbackError,
    callbackSuccess,
    page,
    str,
  }) => {
    return this.request({
      callbackError,
      callbackSuccess,
      route: this.SEARCH,
      category: this.MOVIE,
      page,
      str,
    });
  };
  
  getMoviesPopular = async ({
    callbackError,
    callbackSuccess,
  }) => {
    return this.request({
      callbackError,
      callbackSuccess,
      route: this.MOVIE,
      category: "popular",
      page: 1,
    });
  };
  
  getMoviesCategory = async ({
    callbackError,
    callbackSuccess,
    page,
    category
  }) => {
    return this.request({
      callbackError,
      callbackSuccess,
      route: this.MOVIE,
      category,
      page,
    });
  };
  
  getMoviesGenres = async ({
    callbackError,
    callbackSuccess,
    subCategory,
    page
  }) => {
    return this.request({
      callbackError,
      callbackSuccess,
      route: this.DISCOVER,
      subRoute: this.MOVIE,
      subCategory,
      page,
    });
  };
  
  getMoviesGenresList = async ({
    callbackError,
    callbackSuccess,
  }) => {
    return this.request({
      callbackError,
      callbackSuccess,
      route: this.GENRE,
      subRoute: this.MOVIE,
      category: this.LIST,
    });
  };
}

export const API = new ApiClass();
