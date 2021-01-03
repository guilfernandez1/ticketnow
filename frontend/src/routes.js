import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Incidents from './pages/Incidents';
import Incident from './pages/Incident';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'><Redirect to="/incidents" /></Route>
                <Route path='/incidents' component={Incidents} />
                <Route path='/incidents/new' component={Incident} />
                <Route path='/incidents/update' component={Incident} />
            </Switch>
        </BrowserRouter>
    );
}