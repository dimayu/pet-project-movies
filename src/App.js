import React, {Component} from "react";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";

import './App.scss';

class App extends Component {


  render() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
  }
}

export default App;
