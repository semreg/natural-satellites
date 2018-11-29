import React, { Component } from 'react'
import { Consumer } from '../context'
import Planet from './Planet.jsx'

export default class Planets extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { planets_list, heading } = value

          if (planets_list === undefined || planets_list.length === 0) {
            return <h1 className="text-center">Не має чого показувати :(</h1>
          } else {
            return (
              <>
                <h3 className="text-center mb-4">{heading}</h3>
                <div className="row">
                  {planets_list.map(item => (
                    <Planet key={item.planet_id} planet={item}/>
                  ))}
                </div>
              </>
            )
          }
        }}
      </Consumer>
    )
  }
}
