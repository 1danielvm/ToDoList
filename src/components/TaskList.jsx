import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'

function useSearchTasks(tasks){
  const [query, setQuery] = React.useState('');

  const [filteredTasks, setFilteredTasks] = React.useState(tasks);
  React.useMemo(() => {
    const result = tasks.filter(task => {
      return `${task.firstName} ${task.taskTitle}`
        .toLowerCase()
        .includes(query.toLowerCase());
    })

    setFilteredTasks(result)
  }, [tasks, query]);

  return {query, setQuery, filteredTasks}
}

function TasksList(props){
  const tasks = props.tasks;
  const onDeleteTask = props.onDeleteTask;
  const { query, setQuery, filteredTasks} = useSearchTasks(tasks);
  
    if (filteredTasks.length === 0) {
      return (
        <div>
          <div className="form-group">
            <label htmlFor="">Filter tasks</label>
            <input className="form-control" type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            />
          </div>
          <h3>No tasks were found</h3>
          <Link className="btn btn-primary" to="/tasks/new">
            Create new task
          </Link>
        </div>
      );
    }

    return (
      <div className="Section__content">
        <div className="form-group">
          <label htmlFor="">Buscar tarea</label>
          <input className="form-control" type="text"
            value={query}
            onChange={(e)=>{
              setQuery(e.target.value);
            }}
          />
        </div>
        <ul>
          {filteredTasks.map(task => {
            return (
              <li key={task.id}>
                <Card 
                  task={task} 
                  onDeleteTask={onDeleteTask}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
}

export default TasksList;
