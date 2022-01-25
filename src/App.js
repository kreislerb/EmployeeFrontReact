import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Routes } from './routes/routes';

import './styles/global/App.css';

class App extends React.Component{
    render(){
        return (
            <Router>
                <div className="App">
                   
                    <main id="content">
                        <Switch>
                            {Routes.map( (route) => {
                                return (
                                    <Route exact path={route.path}>
                                        {route.component()}
                                    </Route>
                                )
                            })}
                        </Switch>
                    </main>
                </div>
            </Router>
        );
    }
}

export default App;