import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "./Layout";
import TaskNew from "../Pages/TaskNew";
import TaskHome from "../Pages/TaskHome";
import TaskEdit from "../Pages/TaskEdit";
import ContentTaskDetails from "../container/ContentTaskDetails";
import NotFound from "../Pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/tasks" component={TaskHome} />
          <Route exact path="/" component={TaskHome} />
          <Route exact path="/tasks/new" component={TaskNew} />
          <Route exact path="/tasks/:taskId" component={ContentTaskDetails} />
          <Route exact path="/tasks/:taskId/edit" component={TaskEdit} />
          <Route exact component={NotFound}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
