import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { FindID } from '../components/pages/FindID.jsx';
import { SearchInHAPI } from '../components/pages/SearchInHAPI.jsx';
import { Documentation } from '../components/pages/Documentation.jsx';
import { EPJSimulator } from '../components/pages/EPJSimulator.jsx';
import Nav from 'react-bootstrap/Nav';


export const App = class App extends React.Component {
  
  
  render() {

    return (
      <div className="App">

        <Router>
          <div>
            {/* Set defaultActiveKey to the current 'rest' path in order to
              switch the Nav tab to the current selected page */}
            <Nav variant="tabs" defaultActiveKey={window.location.pathname}>

                <Nav.Link href="/epjsimulator">EPJ-simulator</Nav.Link>

                <Nav.Link href="/">Søk i HAPI</Nav.Link>
              
                <Nav.Link href="/finnid">Finn ID</Nav.Link>
             
                <Nav.Link href="/dokumentasjon">Dokumentasjon</Nav.Link>

                {/* 1. EPJ-simulator (previously HAPI)
                    2. Søk i HAPI (previously Home)
                    3. Finn ID (previously Get ID)
                    4. Dokumentasjon (previously Documentation) 
                */}
            
            </Nav>

            <Switch>

                <Route path="/epjsimulator" component={EPJSimulator}>
                  <EPJSimulator />
                </Route>

                <Route exact path="/" >
                  <SearchInHAPI/>
                </Route>

                <Route path="/finnid" component={FindID}>
                  <FindID />
                </Route>

                <Route path="/dokumentasjon" component={Documentation}>
                  <Documentation />
                </Route>

                

            </Switch>

          </div>
        </Router>
      </div>
    )
  }
}

export default App;