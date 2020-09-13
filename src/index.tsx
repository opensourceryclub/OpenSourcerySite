import React from 'react';
import ReactDOM from 'react-dom';
import { Nav } from './components/Nav';
import { Main } from './components/Main';
import { Footer } from './components/Footer';

const root = document.getElementById('appRoot');
const App = () => (
    <>
        <Nav />
        <Main />
        <Footer />
    </>
);
ReactDOM.render(<App />, root);
// ReactDOM.render(<Nav />, document.getElementById("nav"));
// ReactDOM.render(<Main />, document.getElementById("main"));
// ReactDOM.render(<Footer />, document.getElementById("footer"));
