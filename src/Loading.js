import React, { Component } from 'react'

export default class Loading extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center
        align-items-center border rounded p-3">
        <div className="spinner-border text-primary"
          style={{ width: '3em', height: '3em' }}>
          <span className="visually-hidden">Carregando...</span>
        </div>
      </div>
    )
  }
}
