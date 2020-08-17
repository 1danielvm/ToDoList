import React from 'react'
import TaskForm from "../components/TaskForm";
import {SectionEdit} from "../components/SectionEdit";


export const ContentEditTask = ({onChange,onSubmit, formValues, error}) => {
  this.setState({})
  return (
    <>
      <SectionEdit />
      <div className='Section__content'>
        <TaskForm 
        onChange={onChange} 
        onSubmit={onSubmit}
        formValues={formValues}
        error={error}/>
      </div>
    </>
  )
}
