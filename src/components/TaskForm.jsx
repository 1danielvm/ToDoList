import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class TaskForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
        <div className="form-group mt-3">
            <label>Titulo de la tarea</label>
            <input
              onChange={this.props.onChange} 
              className="form-control"
              type="text"
              name="titulo"
              value={this.props.formValues.taskTitle}
            />
          </div>
          <div className="form-group">
            <label>Descripción</label>
            <textarea
              onChange={this.props.onChange} 
              className="form-control"
              type="text"
              name="descripcion"
              value={this.props.formValues.taskDescription}
            ></textarea>
          </div>
          <label>Ahora pon el tiempo límite</label>
          <select
            onChange={this.props.onChange} 
            className="custom-select custom-select-sm"
            value={this.props.formValues.timeTask}
            name="tiempo"
          >
            <option value="DEFAULT" disabled>
              Seleccione
            </option>
            <option value={1}>1 hora</option>
            <option value={3}>3 horas</option>
            <option value={6}>6 horas</option>
            <option value={12}>12 horas</option>
            <option value={24}>24 horas</option>
          </select>
          {/* <form onSubmit={this.props.onSubmit}> */}
          <div className="form-group">
            <div className="form-group row">
              <label className="col-sm-2 col-form-label mt-3">Primer Nombre</label>
              <div className="col">
                <input 
                type="text"
                name="nombre"
                className="form-control"
                onChange={this.props.onChange}
                value={this.props.formValues.firstName} 
                />
              </div>
              <label className="col-sm-2 col-form-label mt-3">Primer Apellido</label>
              <div className="col">
                <input 
                onChange={this.props.onChange} 
                type="text" 
                name="apellido"
                className="form-control"
                value={this.props.formValues.lastName} />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">
                email
              </label>
              <div className="col-sm-10">
                <input
                  onChange={this.props.onChange} 
                  type="email" 
                  name="email"
                  className="form-control"
                  placeholder="ejemplo@gmail.com"
                  value={this.props.formValues.email}
                />
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <Link to='/'>
              <button className="btn btn__cancel mt-3 mr-2">
                Cancelar
              </button>
            </Link>
            <button className="btn btn__success mt-3" onClick={this.handleClick} >Guardar</button>
          </div>
          {this.props.error && (
            <p className="text-danger">{this.props.error.message}</p>
          )}
        </form>
      </div>
    );
  }
}

