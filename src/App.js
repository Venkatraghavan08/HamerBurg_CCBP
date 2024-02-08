import {Route, Switch, Redirect} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound'

const App = () => {
  ;<Switch>
    <Route exact path="/">
      {Home}
    </Route>
    <Route exact path="/about">
      {About}
    </Route>

    <Route exact path="/not-found">
      {NotFound}
    </Route>
    <Redirect to="not-found" />
  </Switch>
}

export default App
