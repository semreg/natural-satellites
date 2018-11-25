import React, { Component } from 'react'

export default class Search extends Component {
  render() {
    return (
      <>
        <div className="col card card-body mb-4 p-4 search-card">
          <h1 className="display-4 text-center">Знайти планету</h1>
          <p className="lead text-center">Отримайте інформацію про планету чи її супутник</p>
          <form onSubmit={this.props.method}>
            <div className="form-group">
              <input 
                type="text" 
                className="form-control form-control-lg" 
                placeholder="Назва планети чи супутника..." 
                name="planet_name" 
              />
            </div>
            <button className="btn btn-primary btn-lg btn-block mb-5" type="submit">Отримати інформацію</button>
          </form>
        </div>
      </>
    )
  }
}
