import React from 'react'
import { Link } from 'react-router-dom'

export default function Planet (props) {
  const { planet } = props

  return (
    <div className="col-md-6">
      <div className="card mb-4">
        <div className="card-body">
          <h5>{planet.name}</h5>
          <p className="card-text">
            <strong><i className="fas fa-globe-americas"></i> Тип тіла</strong>: {planet.type}
            <br/>
            <strong><i className="fas fa-road"></i> Відстань до Cонця</strong>: {planet.distance}
          </p>
          <Link to={`info/planet/${planet.planet_id}`} className="btn btn-dark btn-block waves-effect">
            <i className="fas fa-chevron-right"></i> Переглянути детальну інформацію
          </Link>
        </div>
      </div>
    </div>
  )
}
