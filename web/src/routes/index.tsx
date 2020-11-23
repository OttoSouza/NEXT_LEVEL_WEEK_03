import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreateOrphanage from "../pages/CreateOrphanate";
import Landing from "../pages/Landing";
import Orphanage from "../pages/Orphanage";
import OrphanagesMap from "../pages/OrphanagesMap";
const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/app" component={OrphanagesMap} />

        <Route path="/orphanages/:id" component={Orphanage} />
        <Route path="/create" component={CreateOrphanage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
