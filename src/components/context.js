import React, { Component } from 'react'
import { data } from '../planets.js'

const Context = React.createContext()

export class Provider extends Component {
  state = {
    planets_list: [],
    heading: "Усі планети та супутники"
  }

  componentDidMount() {
    this.setState({planets_list: data})
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer