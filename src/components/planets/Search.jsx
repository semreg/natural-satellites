import React, { Component } from 'react'
import { Consumer } from '../context'
import { data } from '../../planets.js'

export default class Search extends Component {
  state = {
    planet_name: ''
  }

  findPlanets = (dispatch, e) => {
    e.preventDefault()
    let result = []
    
    data.forEach(item => {
      item.tags.forEach(tag => {
        if (this.state.planet_name === tag) {
          result.push(item)
        }
      })
    })

    dispatch({
      type: 'SEARCH_PLANETS',
      payload: result
    })
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value

          return (
            <div className="col card card-body mb-4 p-4 search-card">
              <h1 className="display-4 text-center">Знайти планету</h1>
              <p className="lead text-center">Отримайте інформацію про планету чи її супутник</p>
              <form onSubmit={this.findPlanets.bind(this, dispatch)}>
                <div className="form-group">
                  <input 
                    type="text" 
                    className="form-control form-control-lg" 
                    placeholder="Назва планети чи супутника..." 
                    name="planet_name" 
                    value={this.state.planet_name}
                    onChange={this.onChange}
                  />
                </div>
                <button className="btn btn-primary btn-lg btn-block mb-5 waves-effect" type="submit">Шукати</button>
              </form>
            </div>
          )
        }}
      </Consumer>
    )
  }
}
