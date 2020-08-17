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
              name="taskTitle"
              value={this.props.formValues.taskTitle}
            />
          </div>
          <div className="form-group">
            <label>Descripción</label>
            <textarea
              onChange={this.props.onChange} 
              className="form-control"
              type="text"
              name="taskDescription"
              value={this.props.formValues.taskDescription}
            ></textarea>
          </div>
          <label>Ahora pon el tiempo límite</label>
          <select
            onChange={this.props.onChange} 
            className="custom-select custom-select-sm"
            value={this.props.formValues.timeTask}
            name="timeTask"
          >
            <option value="DEFAULT" disabled>
              Seleccione
            </option>
            <option value={Number(1)}>1 hora</option>
            <option value={Number(3)}>3 horas</option>
            <option value={Number(6)}>6 horas</option>
            <option value={Number(12)}>12 horas</option>
            <option value={Number(24)}>24 horas</option>
          </select>
            <div className="form-group">
              <label className="col-form-label mt-3">Primer Nombre</label>
                <input 
                onChange={this.props.onChange}
                className="form-control"
                type="text"
                name="firstName"
                value={this.props.formValues.firstName} 
                />
            <div className="form-group">
              <label className="col-form-label mt-3">Primer Apellido</label>
                <input 
                className="form-control"
                onChange={this.props.onChange} 
                type="text" 
                name="lastName"
                value={this.props.formValues.lastName}
                />
            </div>
            <div className="form-group">
              <label className="col-sm-2 col-form-label">
                email
              </label>
                <input
                  className="form-control"
                  onChange={this.props.onChange} 
                  type="email" 
                  name="email"
                  placeholder="ejemplo@gmail.com"
                  value={this.props.formValues.email}
                />
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <Link to='/'>
              <button className="btn btn__cancel mt-3 mr-2">
                Cancelar
              </button>
            </Link>
            <button className="btn btn__success mt-3">Guardar</button>
          </div>
          {this.props.error && (
            <p className="text-danger">{this.props.error.message}</p>
          )}
        </form>
      </div>
    );
  }
}

