import React from 'react'

export const SectionTitle = ({tasks}) => {
  return (
    <div className="Section">
      <h3>
        Tareas <span>({tasks.length} asignadas)</span>
      </h3>
    </div>
  )
}
