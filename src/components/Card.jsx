import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV, faTrash, faEye } from "@fortawesome/free-solid-svg-icons";
import {faClock} from '@fortawesome/free-regular-svg-icons'
import Gravatar from './Gravatar'

export class Modal extends Component {
  render() {
    return (
      <div className="Modal">
        <Link to={`/tasks/${this.props.task.id}`}>
          <button className="Modal__watch">
            <FontAwesomeIcon icon={faEye} />
            Watch
          </button>
        </Link>
        <Link to={`/tasks/${this.props.task.id}/edit`}>
          <button className="Modal__delete" onClick={this.props.onClose}>
            <FontAwesomeIcon icon={faTrash} />
            Delete
          </button>
        </Link>
      </div>
    );
  }
}
function StatusColor(status) {
  if (status === "finalizada") {
    return "finish" 
  } else {
    return "active"; 
  }
}

export default class Card extends Component {
  state= { isModalOpen : false }

  _openModal = () => this.setState({ isModalOpen : true })

  _closeModal = () => this.setState({ isModalOpen : false })

  render() {
  return (
    <div className="Card">
      <div className="Card__header">
        <p
          className={`Card__header-${StatusColor(this.props.task.status)}`}
        >
          {this.props.task.status}
        </p>
        <div className="Card__header-button">
          <Link to={`/tasks/${this.props.task.id}/edit`}>Add time</Link>
        </div>
      </div>
      <div className="Card__info">
        <div className="Card__info-user">
          <Gravatar
            email={this.props.task.email}
            alt={`${this.props.task.firstName} ${this.props.task.lastName}`}
          />
          <p>
            {this.props.task.firstName} {this.props.task.lastName}
          </p>
        </div>
        <div className="Card__info-time">
          <FontAwesomeIcon icon={faClock} />
          <p>Tiempo restante: {this.props.task.timeTask} hrs</p>
        </div>
      </div>
      <div className="Card__content">
        <div className="Card__content-border"></div>
        <Link to={`/tasks/${this.props.task.id}`}>
          <div className="Card__content-text">
            <h3>{this.props.task.taskTitle}</h3>
            <p>{this.props.task.taskDescription}</p>
          </div>
        </Link>
        <div className="Card__content-menu">
          <button onClick={this._openModal}>
            <FontAwesomeIcon icon={faEllipsisV} />
          </button>
          {this.state.isModalOpen && (
            <Modal onClose={this._closeModal} task={this.props.task} />
          )}
        </div>
      </div>
    </div>
  );
  };
};
