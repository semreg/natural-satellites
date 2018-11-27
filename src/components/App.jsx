// React
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from './context.js'

// Components and outer
import '../scss/App.scss'
import Index from './Index.jsx'
import Navbar from './Navbar.jsx'
import Info from './Info.jsx'
import Search from './Search'
import { data } from '../planets.js'

class App extends Component {
  getData (e) {
    e.preventDefault()

    const query = String(e.target.elements.planet_name.value)

    data.forEach(item => {
      item.tags.forEach(tag => {
        if (tag === query) {
          console.log(item)
        }
      })
    })
  }

  render() {
    return (
      <Provider>
        <Router>
          <React.Fragment>
            <Navbar />
            <div className="container main-container">
              <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/info/planet/:id" component={Info} />
              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </Provider>
    )
  }
}

export default App;

// <Search method={this.getData}/>