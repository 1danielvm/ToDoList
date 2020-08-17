import React from 'react'
import { Link } from 'react-router-dom'
import TaskList from "../components/TaskList";
import {SectionTitle} from "../components/SectionTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";


export const ContentTask = ({tasks, onDeleteTask}) => {
  return (
    <>
      <SectionTitle tasks={tasks}/>
      <TaskList tasks={tasks} onDeleteTask={onDeleteTask}/>
      <Link to='./tasks/new'>
        <div className='Card__new'>
          <FontAwesomeIcon icon={faPlus}/>
        </div>
      </Link>
    </>
  )
}
