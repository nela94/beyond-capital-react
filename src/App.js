import { Route, Switch } from "react-router-dom";
import Home from './Home.js'
import ALineBLine from './ALineBLine.js'
import Garden from './Garden.js'
import PentHouse from './PentHouse.js'
import './App.css';

function App() {

  return (
      <div className="app">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/ALineBLine" component={ALineBLine} />
            <Route exact path="/Garden" component={Garden} />
            <Route exact path="/PentHouse" component={PentHouse} />
          </Switch>
      </div>

  );
}

export default App;
