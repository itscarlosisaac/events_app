import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Routes from './constants/Routes'

// Importing common components
import Header from './components/Header';
import Footer from './components/Footer';

// Importing pages
import HomePage from './pages/HomePage';

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
            <Route exact path="/" component={HomePage} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default AppRouter;