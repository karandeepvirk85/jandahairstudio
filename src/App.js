import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

//->Header
    import Header from './Components/header.component.js';
//<--

//->Home
    import Home from './Components/home.component.js';
//<--

//->Footer
    import Footer from './Components/footer.component.js';
//<--

function App() {
  return (

    <Router>
        <div className = "container-fluid">
            <Header/>
            <Route path="/" exact component={Home} />
            <Route path="/team" exact component={Home} />
            <Route path="/gallery" exact component={Home} />
            <Route path="/services" exact component={Home} />
            <Route path="/testimonials" exact component={Home} />
            <Route path="/social" exact component={Home} />
            <Route path="/videos" exact component={Home} />
            <Route path="/about" exact component={Home} />
            <Route path="/contact" exact component={Home} />
            <Footer/>
        </div>
    </Router>
  );
}

export default App;
