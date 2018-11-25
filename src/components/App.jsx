import React, { Component } from 'react';
import '../scss/App.scss';

import { data } from '../planets'
import Navbar from './Navbar.jsx'
import Search from './Search';
class App extends Component {
  getData (e) {
    e.preventDefault()

    const query = String(e.target.elements.planet_name.value)

    data.map(item => {
      item.tags.map(tag => {
        if (tag === query) {
          console.log(item)
        }
        
        return 0
      })

      return 0
    })
  }

  render() {
    return (
      <>
        <Navbar />
        <div className="container main-container">
          <Search method={this.getData}/>
        </div>
      </>
    )
  }
}

export default App;
