import React, { Component } from 'react'
import { data } from '../planets.js'

const Context = React.createContext()

const reducer = (state, action) => {
  switch(action.type) {
    case 'SEARCH_PLANETS':
      return {
        ...state,
        planets_list: action.payload,
        heading: 'Результати пошуку'
      }
      
      default:
        return state
  } 
}

export class Provider extends Component {
  state = {
    planets_list: [],
    heading: 'Усі планети та супутники',
    dispatch: action => this.setState(state => reducer(state, action))
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