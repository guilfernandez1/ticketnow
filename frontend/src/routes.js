import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Incidents from './pages/Incidents';
import Incident from './pages/Incident';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/incidents/new' component={Incident} />
                <Route path='/incidents/update' component={Incident} />
                <Route path='/incidents' component={Incidents} />
            </Switch>
        </BrowserRouter>
    );
}