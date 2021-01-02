import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NewIncident from './pages/NewIncident';
import Incident from './pages/Incident';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/incidents/new' component={NewIncident} />
                <Route path='/incidents' component={Incident} />
            </Switch>
        </BrowserRouter>
    );
}