import React  from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import AboutMe from '../pages/about-me';
import MyPortfolio from '../pages/my-portfolio';
import ContactMe from '../pages/contact-me';
import CurriculumVitae from '../pages/resume';
import NavBar from '../pages/about-me';

function Header() {
    return (
        <Router>
            <NavBar/>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/about" />
                </Route>
                <Route path="/about">
                    <AboutMe />
                </Route>
                <Route path="/portfolio" component={MyPortfolio} />
                <Route path="/contact" component={ContactMe} />
                <Route path="/resume">
                    <CurriculumVitae />
                </Route>
            </Switch>
        </Router>
    )
}

export default Header;