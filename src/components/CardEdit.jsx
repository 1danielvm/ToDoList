import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faClock} from '@fortawesome/free-regular-svg-icons'
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";


export default class CardEdit extends Component {
  render() {
  return (
    <div className="Card">
      <div className="Card__header">
        <Link to='/'>
          <div className="Card__header-btnBack">
            <FontAwesomeIcon icon={faChevronLeft} />
            <p className="Card__header-activo">Back</p>
          </div>
        </Link>
      </div>
      <div className="Card__info">
        <div className="Card__info-user">
          <img
            src="https://s.gravatar.com/avatar/d8773e49c65cea0d82107b75110918b3?s=80"
            alt="avatar"
          />
          <p>Juanita Pérez</p>
        </div>
        <div className="Card__info-time">
          <FontAwesomeIcon icon={faClock} />
          <p>Tiempo restante: 12 hrs</p>
        </div>
      </div>
      <div className="Card__content">
        <div className="Card__content-border"></div>
        <form>
        <div className="form-group mt-3">
            <label>Titulo de la tarea</label>
            <input
              // onChange={this.props.onSibmit}
              className="form-control"
              type="text"
              name="taskName"
              // value={this.props.formValues.taskName}
            />
          </div>
          <div className="form-group">
            <label>Descripción</label>
            <textarea
              default='hola'
              className="form-control"
              id="validationTextarea"
            ></textarea>
          </div>
          <label>Ahora pon el tiempo límite</label>
          <select
            className="custom-select custom-select-sm"
            defaultValue={"DEFAULT"}
          >
            <option value="DEFAULT" disabled>
              Seleccione
            </option>
            <option value="12 hr">12 horas</option>
            <option value="24 hr">24 horas</option>
            <option value="1 dia">1 día</option>
            <option value="2 dias">2 días</option>
            <option value="1 semana">1 semana</option>
          </select>
          {/* <form onSubmit={this.props.onSubmit}> */}
          <div className="d-flex justify-content-end">
            <Link to='/'>
              <button className="btn btn__cancel mt-3 mr-2">
                Cancelar
              </button>
            </Link>
            <button className="btn btn__success mt-3">Guardar</button>
          </div>
        </form>
      </div>
    </div>
  );
  };
};
