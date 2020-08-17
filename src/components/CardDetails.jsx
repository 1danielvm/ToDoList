import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faClock} from '@fortawesome/free-regular-svg-icons'
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";


function CardDetails (props) {
  const task = props.task;
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
            src={task.avatarUrl}
            alt="avatar"
          />
          <p>{task.firstName} {task.lastName}</p>
        </div>
        <div className="Card__info-time">
          <FontAwesomeIcon icon={faClock} />
          <p>Tiempo restante: {task.timeTask} hrs</p>
        </div>
      </div>
      <div className="Card__content">
        <div className="Card__content-border"></div>
        <div className="Card__content-textD">
          <h3>{task.taskTitle}</h3>
          <p >{task.taskDescription}</p>
          <div className="d-flex justify-content-end mt-4">
          <button onClick={props.onDeleteTask} className="btn btn-outline-danger mr-3" >Delete</button>
          <Link to={`/tasks/${task.id}/edit`}>
            <button className="btn btn-outline-secondary">Editar</button>
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
