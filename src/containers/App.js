import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Navigation from 'containers/Navigation/Navigation'
import Achievements from 'containers/Achievements/Achievements'
import Projects from 'containers/Projects/Projects'

import styles from './Style'

const App = () => {

  const routes = (
    <Switch>
      <Route path="/" exact component={Achievements} />
      <Route path="/projects" component={Projects} />
      <Redirect to="/" />
    </Switch>
  )

  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <Navigation />
      </header>
      <div className={styles.MainContent}>
        {routes}
      </div>
    </div>
  );
}

export default App;
