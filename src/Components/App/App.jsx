import { BrowserRouter } from "react-router-dom";

import { Header, Main, Footer } from '../index';

import './App.scss';

export const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <Main />
                <Footer/>
            </BrowserRouter>
        </div>
    );
};
