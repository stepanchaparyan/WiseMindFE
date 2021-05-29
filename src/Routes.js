import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Home from './containers/Home/Home';
import About from './containers/About/About';
import CareerOpportunities from './containers/CareerOpportunities/CareerOpportunities';
import ClientResources from './containers/ClientResources/ClientResources';
import NewsLetter from './containers/NewsLetter/NewsLetter';
import Treatments from './containers/Treatments/Treatments';

const Routes = ({ language }) => {
  return (
    <Switch>
      <Route exact path="/" component={() => <Home language={language} />} />
      <Route exact path="/about" component={() => <About language={language} />} />
      <Route exact path="/treatments" component={() => <Treatments language={language} />} />
      <Route
        exact
        path="/career_opportunities"
        component={() => <CareerOpportunities language={language} />}
      />
      <Route
        exact
        path="/client_resources"
        component={() => <ClientResources language={language} />}
      />
      <Route exact path="/newsletter" component={() => <NewsLetter language={language} />} />
      <Route exact path="*" component={PageNotFound} />
    </Switch>
  );
};

Routes.propTypes = {
  language: PropTypes.string.isRequired
};

export default Routes;
