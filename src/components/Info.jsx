import React, { Component } from 'react'
import { data } from '../planets'
import { Link } from 'react-router-dom'

export default class Info extends Component {
  state = {
    planet: undefined
  }

  componentDidMount() {
    console.log(this.props.match.params.id)

    data.forEach(item => {
      if (Number(item.planet_id) === Number(this.props.match.params.id)) {
        this.setState({ planet: item })
      }
    })
  }

  render() {
    const { planet } = this.state
    
    if (planet === undefined || Object.keys(planet).length === 0) {
      return (
        <div>
          <h1>Щось пішло не так :(</h1>
        </div>
      )
    } else {
      return (
        <>
          <Link to="/" className="btn btn-dark btn-sm mb-4">На головну</Link>
          <div className="card">
            <div className="card-header">
              {planet.name}
            </div>
            <img className="card-img-top" src={planet.img} alt=""/>
            <div className="card-body">
              <p className="card-text">
                {planet.description}
              </p>
            </div>
          </div>

          <h4 className="text-center mt-3">Характеристика</h4>

          <ul className="list-group mt-3">
            <li className="list-group-item">
              <strong>Тип тіла:</strong>       {planet.type}
            </li>
            <li className="list-group-item">
              <strong>Група:</strong>       {planet.group}
            </li>
            <li className="list-group-item">
              <strong>Радіус:</strong>       {planet.radius}
            </li>
            <li className="list-group-item">
              <strong>Вага:</strong>       {planet.weigth}
            </li>
            <li className="list-group-item">
              <strong>Вік:</strong>       {planet.age}
            </li>
            <li className="list-group-item">
              <strong>Дізнатися більше:</strong>       <a href={planet.more_info}>{planet.more_info}</a>
            </li>
          </ul>

          <br/>
          <br/>
          <br/>
        </>
      )
    }
  }
}
