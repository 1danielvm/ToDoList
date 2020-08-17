import React from 'react'
import {SectionTitle} from "../components/SectionTitle";
import TaskForm from "../components/TaskForm";

export const ContenteNewTask = () => {
  return (
    <>
      <SectionTitle />
      <div className='Section__content'>
        <div className="Card">
          <div className="Card__header">
            <p className="Card__header-activo">Nueva tarea</p>
          </div>
          <div className="Card__edit">
            <TaskForm />
          </div>
        </div>
      </div>
    </>
  )
}
