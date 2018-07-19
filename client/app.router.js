import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import * as routes from './constants/Routes'

// Importing common components
import Header from './components/Header';
import Footer from './components/Footer';

// Importing pages
import HomePage from './pages/HomePage';
import AboutPage from  './pages/AboutPage';
import EventsPage from './pages/EventsPage';
import SingleEventPage from './pages/SingleEventPage';
import ContactPage from './pages/ContactPage';

class AppRouter extends React.Component{
  componentWillMount = () => {
    console.log(this.props)
  }
  render(){
    return(
      <BrowserRouter>
        <div className="app__container">
          <Header />
          <Switch>
            {/* Basic Routes */}
            <Route exact path={routes.HOME} component={HomePage} />
            <Route path={routes.ABOUT} component={AboutPage} />
            <Route exact path={routes.EVENTS} component={EventsPage} />
            <Route exact path={routes.EVENT_SINGLE} component={SingleEventPage} />
            <Route path={routes.CONTACT} component={ContactPage} />
            
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default AppRouter;