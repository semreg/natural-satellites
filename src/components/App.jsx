import React, { Component } from 'react';

// Components and outer
import '../scss/App.scss';
import Navbar from './Navbar.jsx'
import Search from './Search'
import { data } from '../planets'

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
