import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { data } from '../../planets'


export default class Info extends Component {
  state = {
    planet: undefined
  }

  componentDidMount() {
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
          <Link to="/" className="btn btn-dark btn-sm mb-4 btn-lg waves-effect">На головну</Link>
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
          <ul className="list-group mt-3 mb-5">
            <li className="list-group-item">
              <strong>Тип тіла:</strong><span>{planet.type}</span>
            </li>
            <li className="list-group-item">
              <strong>Група:</strong><span>{planet.group}</span>
            </li>
            <li className="list-group-item">
              <strong>Радіус:</strong><span>{planet.radius}</span>
            </li>
            <li className="list-group-item">
              <strong>Вага:</strong><span>{planet.weigth}</span>
            </li>
            <li className="list-group-item">
              <strong>Вік:</strong><span>{planet.age}</span>
            </li>
            <li className="list-group-item">
              <strong>Дізнатися більше:</strong><span><a href={planet.more_info}>{planet.more_info}</a></span>
            </li>
          </ul>
        </>
      )
    }
  }
}
